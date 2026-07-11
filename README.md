# drekunia.github.io

Personal site, built with [Jekyll](https://jekyllrb.com/) and deployed to GitHub Pages via GitHub Actions.

## Development

Requires Ruby 3.4 (see `mise.toml`).

```sh
bundle install
bundle exec jekyll serve
```

Site will be available at `http://localhost:4000`.

## Deployment

Pushes to `main` trigger `.github/workflows/pages-deploy.yml`, which builds the site with Jekyll and deploys it to GitHub Pages.

## License

See [LICENSE](LICENSE).
