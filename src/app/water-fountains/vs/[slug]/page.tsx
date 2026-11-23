import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { VerifiedValue } from "@/components/verified-value";
import { comparisonBySlug, comparisonProducts, comparisons } from "@/data/comparisons";
import { absoluteUrl, OPEN_GRAPH_IMAGE } from "@/lib/site";
import type { WaterFountainProduct } from "@/types/product";

export const dynamicParams = false;
export function generateStaticParams() { return comparisons.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const comparison = comparisonBySlug((await params).slug);
  if (!comparison) return {};
  return { title: comparison.title, description: comparison.description, alternates: { canonical: `/water-fountains/vs/${comparison.slug}` }, openGraph: { url: `/water-fountains/vs/${comparison.slug}`, title: comparison.title, description: comparison.description, images: [OPEN_GRAPH_IMAGE] } };
}

const fields: { label: string; key: keyof WaterFountainProduct; format?: (value: never) => string }[] = [
  { label: "容量", key: "capacityLiters", format: (value) => `${value}L` }, { label: "対象動物", key: "targetPets" }, { label: "材質", key: "material" }, { label: "給電方式", key: "powerMethod" }, { label: "完全コードレス", key: "cordless" }, { label: "ポンプ方式", key: "pumpMethod" }, { label: "静音仕様", key: "quietSpecification" }, { label: "フィルター", key: "filter" }, { label: "交換目安", key: "filterReplacement" }, { label: "洗浄可能部品", key: "washableParts" }, { label: "食洗機対応", key: "dishwasherSafe" }, { label: "サイズ", key: "dimensions" }, { label: "重量", key: "weight" }, { label: "アプリ対応", key: "appSupport" }, { label: "飲水記録", key: "drinkingLog" }, { label: "水位通知", key: "waterLevelNotification" }, { label: "電源断時", key: "powerFailureBehavior" },
];

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const comparison = comparisonBySlug((await params).slug);
  if (!comparison) notFound();
  const [first, second] = comparisonProducts(comparison);
  const pair = [first, second];
  const path = `/water-fountains/vs/${comparison.slug}`;
  const unverified = fields.filter((field) => pair.some((product) => (product[field.key] as unknown as { verification: string }).verification !== "verified"));
  return <main>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "トップ", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "循環式ペット給水器", item: absoluteUrl("/water-fountains") }, { "@type": "ListItem", position: 3, name: comparison.title, item: absoluteUrl(path) }] }} />
    <section className="page-hero"><div className="narrow"><p className="eyebrow">1 VS 1 · SPEC COMPARISON</p><h1>{comparison.title}</h1><p className="lede">{comparison.description}</p></div></section>
    <article className="section narrow rich">
      <nav aria-label="パンくず"><Link href="/">トップ</Link> / <Link href="/water-fountains">給水器</Link> / 1対1比較</nav>
      <div className="notice"><strong>結論</strong><p>{comparison.conclusion}</p></div>
      <section><h2>2機種の主な違い</h2>{comparison.differences.map((difference) => <section key={difference.heading}><h3>{difference.heading}</h3>{difference.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</section>
      <section><h2>スペック比較表</h2><p>確認済み・未確認を分けて表示します。各項目の出典は、それぞれの商品詳細ページで確認できます。</p>
        <div className="table-scroll"><table className="compare-table"><thead><tr><th>項目</th>{pair.map((product) => <th key={product.slug}>{product.productName}<small>{product.model}</small></th>)}</tr></thead>
        <tbody>{fields.map((field) => <tr key={field.key}><th>{field.label}</th>{pair.map((product) => <td key={product.slug}><VerifiedValue field={product[field.key] as never} format={field.format} /></td>)}</tr>)}
        <tr><th>参考価格</th>{pair.map((product) => <td key={product.slug}>{product.referencePrice ? <>{product.referencePrice.label}<small>確認日 {product.referencePrice.checkedAt}</small></> : "未確認"}</td>)}</tr></tbody></table></div>
      </section>
      <section><h2>選び方・向いている人</h2><div className="three-grid">{comparison.suitability.map((entry) => { const product = pair.find((item) => item.slug === entry.productSlug); return <div className="panel" key={entry.productSlug}><h3>{entry.heading}</h3>{product && <p className="model">{product.productName}（{product.model}）</p>}<ul>{entry.points.map((point) => <li key={point}>{point}</li>)}</ul></div>; })}</div></section>
      <section><h2>確認できていない項目</h2>{unverified.length > 0 ? <ul>{unverified.map((field) => <li key={field.key}>{field.label}：{pair.filter((product) => (product[field.key] as unknown as { verification: string }).verification !== "verified").map((product) => product.model).join("・")}</li>)}</ul> : <p>比較表の項目はすべて公式情報で確認しています。</p>}<p>{comparison.unverifiedNote}</p></section>
      <section><h2>商品詳細で確認する</h2><div className="condition-grid">{pair.map((product) => <Link className="condition-card" href={`/water-fountains/${product.slug}`} key={product.slug}><h3>{product.productName}</h3><p>{product.model}の仕様・出典・参考価格を見る</p><span>詳細を確認 →</span></Link>)}<Link className="condition-card" href="/water-fountains"><h3>給水器一覧</h3><p>9商品の仕様を条件別に比較する</p><span>一覧を見る →</span></Link></div></section>
      <p className="notice">公開仕様は変更される場合があります。購入前にメーカー公式ページと取扱説明書で最新情報を確認してください。仕様確認日：{first.checkedAt}（{first.model}）／{second.checkedAt}（{second.model}）</p>
    </article>
  </main>;
}
