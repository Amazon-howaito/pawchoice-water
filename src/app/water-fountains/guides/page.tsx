import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { waterGuides } from "@/data/guides";
import { absoluteUrl, OPEN_GRAPH_IMAGE } from "@/lib/site";

export const metadata: Metadata = { title: "ペット給水器のお手入れ・選び方ガイド", description: "フィルター交換、電源方式、ポンプ清掃など、循環式ペット給水器の購入前後に確認したいポイント。", alternates: { canonical: "/water-fountains/guides" }, openGraph: { url: "/water-fountains/guides", title: "ペット給水器のお手入れ・選び方ガイド", description: "循環式給水器の各テーマを確認済み情報から解説します。", images: [OPEN_GRAPH_IMAGE] } };
export default function GuidesPage() { return <main><JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "トップ", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "循環式ペット給水器", item: absoluteUrl("/water-fountains") }, { "@type": "ListItem", position: 3, name: "ガイド", item: absoluteUrl("/water-fountains/guides") }] }} /><section className="page-hero"><div className="container"><p className="eyebrow">CARE & BUYING GUIDES</p><h1>給水器の疑問を、テーマ別に確認</h1><p className="lede">メーカーの公開情報と一般的な確認手順を分け、未確認事項は推測しません。</p></div></section><section className="section"><div className="container"><div className="condition-grid">{waterGuides.map((guide) => <Link className="condition-card" href={`/water-fountains/guides/${guide.slug}`} key={guide.slug}><p className="eyebrow">GUIDE</p><h2>{guide.title}</h2><p>{guide.description}</p><span>ガイドを読む →</span></Link>)}</div></div></section></main>; }
