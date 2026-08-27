import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/">PawChoice <span>WATER</span></Link><nav aria-label="メインナビゲーション"><Link href="/water-fountains">商品を探す</Link><Link href="/water-fountains/compare">比較する</Link><Link href="/water-fountains/guide">選び方</Link><Link href="/water-fountains/faq">FAQ</Link></nav></header>;
}
