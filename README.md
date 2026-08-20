# amritpals.github.io

Personal CV site for Amritpal Singh — Senior DevOps Engineer & SRE, Dublin.
Static HTML/CSS/JS, served by GitHub Pages from the default branch.

| File | Purpose |
|---|---|
| `index.html` | The whole CV, plus meta tags and JSON-LD `Person` schema |
| `style.css` | Theme tokens, layout, and the print stylesheet (Cmd+P → PDF) |
| `main.js` | Theme toggle, copy-email, print button, contact form |
| `robots.txt`, `sitemap.xml` | Search engine hints |

## Before this goes live

Two placeholders need real values:

1. **Contact form** — sign up at [web3forms.com](https://web3forms.com), then replace
   `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html`.
2. **Analytics** — create a site at [goatcounter.com](https://www.goatcounter.com),
   then replace `MYCODE` in the GoatCounter script at the bottom of `index.html`.

Both fail quietly if left unset: the form shows the mailto fallback, and the
analytics request 404s without breaking the page.

## Custom domain

Add a `CNAME` file containing the bare domain, point DNS at GitHub Pages, then
enable it under Settings → Pages. GitHub keeps redirecting `amritpals.github.io`.
