# nishanthajayawardhana.com

Personal portfolio website for Nishantha Jayawardhana, hosted on
[Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/).

## Structure

```
public/          Static site (HTML/CSS/JS)
  _headers       Security + cache headers applied at the edge
wrangler.jsonc   Cloudflare Workers configuration (custom domain, assets)
.github/         GitHub Actions deploy workflow
```

## Local development

```sh
npx wrangler dev
```

## Deploy

```sh
npx wrangler deploy
```

Pushes to `main` also deploy automatically via GitHub Actions once the
`CLOUDFLARE_API_TOKEN` repository secret is set (create a token with the
**Edit Cloudflare Workers** template at https://dash.cloudflare.com/profile/api-tokens).

## Security

All responses carry a strict Content-Security-Policy, HSTS,
`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and related
headers via `public/_headers`. The site uses no external scripts, fonts,
or trackers.
