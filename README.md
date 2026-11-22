# drekunia.github.io

A personal homepage built with [Jekyll](https://jekyllrb.com/).

## Development

Use Ruby 3.4, as specified in [mise.toml](mise.toml).

```sh
bundle install
bundle exec jekyll serve
```

Open [localhost:4000](http://localhost:4000). Restart the server after editing `_config.yml` to load the new configuration.

To build the site into `_site` without starting a server:

```sh
bundle exec jekyll build
```

## Site configuration

Edit [_config.yml](_config.yml) for the site title, description, profile, and links. The site requires a non-empty `title` string or at least one non-empty title in a language map. The description, author block, individual author fields, and links list are optional.

```yaml
default_language: en
url: "https://drekunia.github.io"

title:
  en: "drekunia’s site"
  ja: "ドレクニアのサイト"

description:
  en: "drekunia’s personal site."
  ja: "ドレクニアの個人サイト。"

author:
  name: "drekunia"
  title:
    en: "Personal site"
    ja: "個人サイト"
  bio:
    en: "I write about what I’m working on and what I like."
    ja: "やっていることや好きなことを書いています。"
  avatar: "/assets/img/avatar.webp"

links:
  - name: "blog"
    url: "https://drekunia.github.io/blog"
    same_tab: true
  - url: "https://example.com/guide.html?from=profile"
```

`title`, `description`, `author.name`, `author.title`, `author.bio`, and each link's `name` accept either a string or a map keyed by language code.

- A plain string or a one-entry map is shared across modes.
- For a map with multiple entries, the site tries the selected language, including compatible language tags, then English.
- If neither matches, the site title uses the first non-empty title. Optional profile fields and descriptions are omitted. The copyright line uses the site title if the author name is unavailable.
- A link with no usable name gets a label from its URL. For example, the last link above displays as `example.com/guide`. The generated label omits query parameters, leading and trailing slashes, and common file extensions. The link still opens the full URL.

The site skips link entries with a blank or missing `url`. A link section with no visible entries takes up no space. Links open in a new tab by default. Set `same_tab: true` to open in the current tab, `bold: true` to emphasize the label, or `hidden: true` to keep the link out of the visible list.

## Languages

Add or reorder language codes in [_data/languages.yml](_data/languages.yml). The dropdown follows the file order and displays each code as written. An entry can be as small as `en: {}`.

| Optional field | Use |
| --- | --- |
| `name` | Accessible name for the language option |
| `switcher` | Accessible label for the dropdown |
| `locale` | Open Graph locale, such as `en_US` or `ja_JP` |
| `error_heading` | 404 page heading |
| `error_message` | 404 page message |
| `return_home` | Label for the 404 page’s home link |
| `rights` | Extra notice after the copyright line |

Missing 404 and switcher text falls back to English. An empty `rights` field leaves just the copyright line. The root homepage uses its default language’s rights notice, while a localized homepage or the 404 page uses its own language’s notice.

- With no entries, the site uses English. With one entry, it uses that language. Both cases use a single homepage without a dropdown.
- With at least two valid language codes, Jekyll generates static homepages such as `/en/`, `/ja/`, and `/id/` from the same template. Each has localized metadata, a canonical URL, and reciprocal `hreflang` links. The canonical language URLs appear in the sitemap, and `/` is the `x-default` URL.
- A direct visit to a language URL stays in that language. On `/` and the 404 page, the site checks the visitor’s saved choice, then their browser preferences, then `default_language`. If the configured default is unavailable, it uses the first listed language.
- The homepage dropdown navigates to the selected language URL and saves the choice. The 404 dropdown changes the error page in place. The 404 template uses `noindex, follow`.

## Deployment

The [Build and Deploy workflow](.github/workflows/pages-deploy.yml) builds the site in production mode with the custom Jekyll plugins and publishes the result to GitHub Pages. It runs on site changes pushed to `main` and can also be triggered manually.

## License

See [LICENSE](LICENSE).
