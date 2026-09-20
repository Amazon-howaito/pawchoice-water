// Small identical helper copied into participating sites; no persistent identifiers.
export interface ClickMetadata {
  product_id: string;
  cta_type: string;
  placement: string;
}
export interface ClickOptions {
  enabled: boolean;
  production: boolean;
  site: "camera" | "feeder" | "water";
  location: { hostname: string; pathname: string };
  send: typeof fetch;
  now?: () => number;
}
export function createClickSender(options: ClickOptions) {
  let lastKey = "";
  let lastTime = -Infinity;
  return (
    event: { type: string; button: number; defaultPrevented: boolean },
    metadata: ClickMetadata,
  ) => {
    if (
      !options.enabled ||
      !options.production ||
      options.location.hostname !== `${options.site}.pawchoice.jp` ||
      event.defaultPrevented
    )
      return;
    if (
      !(
        (event.type === "click" && event.button === 0) ||
        (event.type === "auxclick" && event.button === 1)
      )
    )
      return;
    const time = (options.now ?? Date.now)();
    const page_path = options.location.pathname;
    const key = `${page_path}|${metadata.product_id}|${metadata.cta_type}|${metadata.placement}`;
    if (key === lastKey && time - lastTime < 500) return;
    lastKey = key;
    lastTime = time;
    try {
      void options
        .send("/api/amazon-click", {
          method: "POST",
          credentials: "omit",
          referrerPolicy: "no-referrer",
          keepalive: true,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "amazon_click",
            site: options.site,
            page_path,
            product_id: metadata.product_id,
            cta_type: metadata.cta_type,
            placement: metadata.placement,
            event_timestamp: new Date(time).toISOString(),
          }),
        })
        .catch(() => {});
    } catch {
      /* Best effort: never block the existing anchor. No retries. */
    }
  };
}

export function installClickTracking(doc: Document, options: ClickOptions): () => void {
  const send = createClickSender(options);
  const listener = (event: MouseEvent) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest<HTMLAnchorElement>("a[data-amazon-product]");
    if (!anchor) return;
    try {
      const url = new URL(anchor.href);
      if (url.protocol !== "https:" || url.hostname !== "www.amazon.co.jp") return;
    } catch {
      return;
    }
    const { amazonProduct, amazonCta, amazonPlacement } = anchor.dataset;
    if (!amazonProduct || !amazonCta || !amazonPlacement) return;
    send(event, { product_id: amazonProduct, cta_type: amazonCta, placement: amazonPlacement });
  };
  doc.addEventListener("click", listener);
  doc.addEventListener("auxclick", listener);
  return () => {
    doc.removeEventListener("click", listener);
    doc.removeEventListener("auxclick", listener);
  };
}
