# amritpals.github.io

Personal CV site for Amritpal Singh — Senior DevOps Engineer & SRE, Dublin.
Static HTML/CSS/JS, served by GitHub Pages from the default branch.

| File | Purpose |
|---|---|
| `index.html` | The whole CV, plus meta tags and JSON-LD `Person` schema |
| `style.css` | Theme tokens, layout, and the print stylesheet (Cmd+P → PDF) |
| `main.js` | Theme toggle, copy-email, print button, contact form |
| `robots.txt`, `sitemap.xml` | Search engine hints |

## Third-party services

The contact form posts to [Web3Forms](https://web3forms.com); its access key sits in
`index.html` and is public by design. Traffic is counted by
[GoatCounter](https://amrinh.goatcounter.com) — no cookies, so no consent banner needed.

## Custom domain

Add a `CNAME` file containing the bare domain, point DNS at GitHub Pages, then
enable it under Settings → Pages. GitHub keeps redirecting `amritpals.github.io`.
