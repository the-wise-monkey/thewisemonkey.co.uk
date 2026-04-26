import { useEffect } from "react";

/**
 * WebMCP tool registration.
 *
 * Exposes site actions to AI agents running in the user's browser via the
 * experimental `navigator.modelContext` API
 * (https://webmachinelearning.github.io/webmcp/). Renders nothing.
 *
 * The API is feature-detected: in browsers without WebMCP support the
 * effect is a no-op and the React tree is unaffected.
 */
const WebMcp = () => {
  useEffect(() => {
    type ModelContextLike = {
      registerTool?: (
        spec: {
          name: string;
          description: string;
          inputSchema: Record<string, unknown>;
          execute: (input: unknown) => Promise<unknown> | unknown;
        },
        options?: { signal?: AbortSignal }
      ) => unknown;
    };

    const mc = (navigator as unknown as { modelContext?: ModelContextLike })
      .modelContext;
    if (!mc?.registerTool) return;

    const ctrl = new AbortController();

    const scrollTo = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return { ok: false, error: `section "${id}" not found` };
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return { ok: true };
    };

    try {
      mc.registerTool(
        {
          name: "describe_services",
          description:
            "Return The Wise Monkey's deep tech service lines (Intelligent Products, Blockchain & Smart Contracts, Distributed Systems, Embedded & Edge) so an agent can summarize what we do.",
          inputSchema: { type: "object", properties: {} },
          execute: async () => ({
            services: [
              {
                name: "Intelligent Products",
                summary:
                  "Applied AI/ML — copilots, decision engines, recommendations, workflow orchestration, evaluation & safety.",
              },
              {
                name: "Blockchain & Smart Contracts",
                summary:
                  "Smart contracts and audits, DeFi and tokenization, wallets and payments, security and compliance.",
              },
              {
                name: "Distributed Systems",
                summary:
                  "Microservices, event-driven architectures, scalable data pipelines, observability/SRE, high-availability designs.",
              },
              {
                name: "Embedded & Edge",
                summary:
                  "Firmware/RTOS, edge AI, device-to-cloud integration, embedded testing and validation.",
              },
            ],
          }),
        },
        { signal: ctrl.signal }
      );

      mc.registerTool(
        {
          name: "jump_to_contact",
          description:
            "Scroll the page to The Wise Monkey's contact section so the user can start a conversation or book a strategy call.",
          inputSchema: { type: "object", properties: {} },
          execute: async () => scrollTo("contact"),
        },
        { signal: ctrl.signal }
      );

      mc.registerTool(
        {
          name: "open_blog",
          description:
            "Open The Wise Monkey blog (engineering notes on AI, blockchain, distributed systems, embedded) in a new tab.",
          inputSchema: { type: "object", properties: {} },
          execute: async () => {
            window.open("https://blog.thewisemonkey.co.uk/", "_blank", "noopener");
            return { ok: true };
          },
        },
        { signal: ctrl.signal }
      );
    } catch (err) {
      // Best-effort registration. Don't break the page if the API surface
      // changes or any registration throws.
      // eslint-disable-next-line no-console
      console.warn("WebMCP registration failed:", err);
    }

    return () => ctrl.abort();
  }, []);

  return null;
};

export default WebMcp;
