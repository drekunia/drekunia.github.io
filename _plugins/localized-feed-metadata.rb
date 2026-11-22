# frozen_string_literal: true

Jekyll::Hooks.register :pages, :pre_render do |page|
  next unless defined?(JekyllFeed::PageWithoutAFile) && page.is_a?(JekyllFeed::PageWithoutAFile)

  # The feed template expects scalar metadata.
  metadata_setup = <<~LIQUID.strip
    {% include resolve-languages.html %}
    {% include resolve-page-metadata.html code=default_code %}
    {% assign title = resolved_site_title %}
  LIQUID
  content = page.content.sub("{% assign title = site.title | default: site.name %}", metadata_setup)

  if page.site.config["description"].is_a?(Hash)
    description_setup = <<~LIQUID.strip
      {% include resolve-description.html value=site.description code=default_code %}
      {% if resolved_description != empty %}
    LIQUID
    content = content
      .sub("{% if site.description %}", description_setup)
      .sub("{{ site.description | xml_escape }}", "{{ resolved_description | xml_escape }}")
  end

  if page.site.config["author"].is_a?(Hash)
    content = content
      .sub("{% if site.author %}", "{% if resolved_author_name != empty %}")
      .sub("{{ site.author.name | default: site.author | xml_escape }}", "{{ resolved_author_name | xml_escape }}")
  end

  post_author_setup = <<~LIQUID.strip
    {% assign post_author_source = post_author.name %}
    {% assign post_author_string = post_author | append: '' %}
    {% if post_author == post_author_string %}
      {% assign post_author_source = post_author %}
    {% endif %}
    {% include resolve-localized-text.html value=post_author_source code=default_code %}
    {% assign post_author_name = trimmed_localized_text %}
  LIQUID
  page.content = content.sub("{% assign post_author_name = post_author.name | default: post_author %}", post_author_setup)
end
