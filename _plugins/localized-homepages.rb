# frozen_string_literal: true

module Jekyll
  class LocalizedHomepageGenerator < Generator
    priority :high

    def generate(site)
      homepage = site.pages.find { |page| page.data["homepage"] && page.url == "/" }
      languages = site.data["languages"]
      return unless homepage && languages.is_a?(Hash)

      codes = languages.keys.grep(/\A[a-z]{2,8}(?:-[a-z0-9]{1,8})*\z/i).uniq(&:downcase)
      return if codes.size < 2

      existing_urls = (site.pages + site.documents + site.static_files).map do |entry|
        entry.url.sub(%r{/index\.html\z}, "/")
      end.to_set
      pages = codes.filter_map do |code|
        directory = code.downcase
        url = "/#{directory}/"
        if existing_urls.include?(url) || existing_urls.include?(url.delete_suffix("/"))
          Jekyll.logger.warn "Localized homepage:", "Skipping #{url} because it already exists."
          next
        end

        page = PageWithoutAFile.new(site, site.source, directory, "index.html")
        page.content = homepage.content.dup
        page.data.merge!(homepage.data, "homepage_language" => code, "permalink" => url)
        page
      end

      alternates = {}
      routes = {}
      pages.each do |page|
        code = page.data.fetch("homepage_language")
        tag = code.casecmp?("en-UK") ? "en-GB" : code
        routes[code] = page.url
        key = tag.downcase
        if !alternates.key?(key) || code.casecmp?(tag)
          alternates[key] = { "tag" => tag, "url" => page.url }
        end
      end

      pages.each do |page|
        next unless page.data.fetch("homepage_language").casecmp?("en-UK")

        canonical = alternates.fetch("en-gb").fetch("url")
        next if canonical == page.url

        page.data["canonical_url"] = canonical
        page.data["sitemap"] = false
      end

      site.data["homepage_language_urls"] = routes
      site.data["homepage_language_alternates"] = alternates.values
      site.pages.concat(pages)
    end
  end
end
