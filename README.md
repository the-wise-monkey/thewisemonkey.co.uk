# thewisemonkey.co.uk

Marketing site for **The Wise Monkey** — a deep tech software development studio building production-ready platforms across AI, blockchain, distributed systems, and embedded software.

Live: <https://www.thewisemonkey.co.uk/>

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (Radix primitives)
- **react-i18next** for English / Spanish locales (`src/locales/{en,es}/common.json`)
- **react-router-dom** SPA routing — see `src/App.tsx`
- **@tanstack/react-query** for the blog feed integration

## Develop

Requires Node.js (20+) and npm.

```sh
npm install
npm run dev       # dev server on :8080
npm run build     # production build into dist/
npm run lint      # eslint
npm run preview   # preview the production build
```

The blog at <https://blog.thewisemonkey.co.uk/> is a separate Ghost install consumed via the `LatestPosts` component (`src/components/LatestPosts.tsx`).

## Deploy

Deployed via **Dokploy** (self-hosted PaaS over Docker), behind Cloudflare as the CDN.

- `Dockerfile` — multi-stage build: Node builder → nginx static serve.
- `nginx.conf` — serves `dist/` and adds the headers, content-type overrides, and rewrites needed for agent-readiness.
- Auto-deploys on push to `main`.

> Cache: `nginx.conf` sets `max-age=300, must-revalidate` on the agent-readiness files (`robots.txt`, `sitemap.xml`, `llms.txt`, `.well-known/*`) so updates propagate through the Cloudflare edge in minutes instead of hours. Other static assets keep CF default caching.

## Agent-readiness

This site implements the protocols evaluated by [isitagentready.com](https://isitagentready.com):

- `public/llms.txt` and `public/llms-full.txt` (per [llmstxt.org](https://llmstxt.org/))
- `public/index.md` and `public/privacy-policy.md` — markdown alternates served via `Accept: text/markdown` content negotiation (handled in `nginx.conf`)
- `public/.well-known/api-catalog.json` — RFC 9727 linkset
- `public/.well-known/agent-skills/index.json` + skill markdown — Cloudflare's Agent Skills RFC
- `public/robots.txt` — declares Content Signals (`search=yes, ai-train=yes, ai-input=yes`) inside the `User-agent: *` block
- `index.html` — JSON-LD `@graph` (Organization, Person, WebSite, four Services), `Link` relations to discovery endpoints
- `src/components/WebMcp.tsx` — registers three WebMCP tools (`describe_services`, `jump_to_contact`, `open_blog`) when the browser supports `navigator.modelContext`

## License

Source code in this repo is for The Wise Monkey's marketing site. Logo and brand assets are not licensed for reuse.
