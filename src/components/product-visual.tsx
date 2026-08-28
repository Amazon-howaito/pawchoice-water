export function ProductVisual({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "product-visual compact" : "product-visual"} role="img" aria-label="商品画像は準備中"><svg viewBox="0 0 120 120" aria-hidden="true"><path d="M31 74c0-13 10-23 23-23h12c13 0 23 10 23 23v10H31V74Z"/><path d="M43 51V37c0-9 7-16 16-16h2c9 0 16 7 16 16v14"/><path d="M53 36c0 8 14 8 14 0"/><path d="M26 84h68"/></svg><span>商品画像は準備中</span></div>;
}
