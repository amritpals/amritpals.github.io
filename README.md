# amritpals.github.io

[![CI](https://github.com/amritpals/amritpals.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/amritpals/amritpals.github.io/actions/workflows/ci.yml)

Personal CV site for Amritpal Singh — Senior DevOps Engineer & SRE, Dublin.
Static HTML/CSS/JS, served by GitHub Pages from the default branch.

| File | Purpose |
|---|---|
| `index.html` | The whole CV, plus meta tags and JSON-LD `Person` schema |
| `style.css` | Theme tokens, layout, and the print stylesheet (Cmd+P → PDF) |
| `main.js` | Theme toggle, copy-email, print button, contact form |
| `robots.txt`, `sitemap.xml` | Search engine hints |

## CI

Every push runs `.github/workflows/ci.yml`:

| Check | Fails the build when |
|---|---|
| `html-validate` | the markup is invalid |
| `lychee` | a link or in-page anchor is dead |
| image budget | a referenced image exceeds 200&nbsp;KB |
| Lighthouse CI | performance, accessibility or SEO drops below 90 |

Only `master`, and only after all of that passes, is deployed to Pages.

> Requires **Settings → Pages → Source: GitHub Actions**. While the source is
> still "Deploy from a branch", the `deploy` job cannot publish.

## Third-party services

The contact form posts to [Web3Forms](https://web3forms.com); its access key sits in
`index.html` and is public by design. Traffic is counted by
[GoatCounter](https://amrinh.goatcounter.com) — no cookies, so no consent banner needed.

## Custom domain

Add a `CNAME` file containing the bare domain, point DNS at GitHub Pages, then
enable it under Settings → Pages. GitHub keeps redirecting `amritpals.github.io`.
