"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/water-fountains", label: "商品を探す" },
  { href: "/water-fountains/compare", label: "比較する" },
  { href: "/water-fountains/guide", label: "選び方" },
  { href: "/water-fountains/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/" aria-label="PawChoice Water トップ"><span className="brand-mark" aria-hidden="true">P</span><span className="brand-name">PawChoice</span><span className="category-label">WATER</span></Link><nav aria-label="メインナビゲーション">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav></div></header>;
}
