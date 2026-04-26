// Cloudflare Pages Function — Accept-based content negotiation for markdown.
// Docs: https://developers.cloudflare.com/pages/functions/
//
// When a client sends `Accept: text/markdown` for the homepage or privacy
// policy, redirect-internally to the parallel `.md` representation so AI
// agents can consume our content in markdown without us giving up the SPA
// for browsers.

const MARKDOWN_ALIASES: Record<string, string> = {
  "/": "/index.md",
  "/privacy-policy": "/privacy-policy.md",
};

export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const accept = request.headers.get("accept") || "";

  if (accept.includes("text/markdown")) {
    const mdPath = MARKDOWN_ALIASES[url.pathname];
    if (mdPath) {
      const target = new URL(mdPath, url.origin);
      const upstream = await fetch(target.toString(), {
        headers: { "user-agent": request.headers.get("user-agent") || "" },
      });
      const body = await upstream.text();
      return new Response(body, {
        status: 200,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          "vary": "accept",
          "cache-control": "public, max-age=300",
        },
      });
    }
  }

  return next();
};
