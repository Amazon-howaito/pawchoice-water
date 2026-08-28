import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-brand"><span className="brand-mark brand-mark-light" aria-hidden="true">P</span><div><strong>PawChoice <small>WATER</small></strong><p>循環式ペット給水器を、公開仕様と確認状態から比較するサイトです。</p></div></div><nav aria-label="フッターナビゲーション"><Link href="/about">サイトについて</Link><Link href="/privacy">プライバシー</Link><Link href="/disclosure">広告・情報開示</Link></nav><p className="footer-note">商品ごとの仕様確認日は各ページに表示しています。価格・在庫は変動します。健康上の不安は獣医師へご相談ください。</p></div></footer>;
}
