# frozen_string_literal: true

Jekyll::Hooks.register :site, :pre_render do |site|
  title = site.config["title"]
  titles = if title.is_a?(Hash)
             title.select { |code, text| code.is_a?(String) && text.is_a?(String) && !text.strip.empty? }
           else
             title
           end
  first_title = titles.is_a?(Hash) ? titles.values.first : titles
  unless first_title.is_a?(String) && !first_title.strip.empty?
    raise Jekyll::Errors::FatalException, "Set title in _config.yml to a non-empty string or provide at least one non-empty language title."
  end

  site.data["localized_site_titles"] = titles
  site.data["first_site_title"] = first_title
end
