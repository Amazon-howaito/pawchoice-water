"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { VerifiedValue } from "@/components/verified-value";

type Filters = { cat: boolean; dog: boolean; cordless: boolean; app: boolean; minCapacity: boolean };
const initial: Filters = { cat: false, dog: false, cordless: false, app: false, minCapacity: false };

export function ProductExplorer() {
  const [filters, setFilters] = useState(initial);
  const [selected, setSelected] = useState<string[]>([]);
  const visible = useMemo(() => products.filter((product) => {
    const checks = [
      !filters.cat || (product.targetPets.verification === "verified" && product.targetPets.value.includes("cat")),
      !filters.dog || (product.targetPets.verification === "verified" && product.targetPets.value.includes("dog")),
      !filters.cordless || (product.cordless.verification === "verified" && product.cordless.value === true),
      !filters.app || (product.appSupport.verification === "verified" && product.appSupport.value === true),
      !filters.minCapacity || (product.capacityLiters.verification === "verified" && product.capacityLiters.value >= 2.5),
    ];
    return checks.every(Boolean);
  }), [filters]);
  const toggle = (key: keyof Filters) => setFilters((current) => ({ ...current, [key]: !current[key] }));
  const select = (slug: string) => setSelected((current) => current.includes(slug) ? current.filter((item) => item !== slug) : current.length < 4 ? [...current, slug] : current);

  return <section aria-labelledby="products-heading">
    <div className="section-heading"><div><p className="eyebrow">9 PRODUCTS · AND FILTER</p><h2 id="products-heading">確認済み仕様で絞り込む</h2></div><p>{visible.length}件を表示</p></div>
    <div className="filters" aria-label="商品絞り込み">{([ ["cat", "猫向け"], ["dog", "犬向け"], ["minCapacity", "2.5L以上"], ["cordless", "完全コードレス"], ["app", "アプリ対応"] ] as const).map(([key, label]) => <button key={key} aria-pressed={filters[key]} onClick={() => toggle(key)}>{filters[key] ? "✓ " : "+ "}{label}</button>)}<button onClick={() => setFilters(initial)}>リセット</button></div>
    <p className="subtle">選択条件はANDで結合します。未確認・相違ありの値は一致扱いにしません。</p>
    <div className="product-grid">{visible.map((product) => <article className="product-card" key={product.slug}><p className="maker">{product.manufacturer}</p><h3><Link href={`/water-fountains/${product.slug}`}>{product.productName}</Link></h3><p className="model">{product.model}</p><dl><div><dt>容量</dt><dd><VerifiedValue field={product.capacityLiters} format={(value) => `${value}L`} /></dd></div><div><dt>対象</dt><dd><VerifiedValue field={product.targetPets} /></dd></div><div><dt>コードレス</dt><dd><VerifiedValue field={product.cordless} /></dd></div><div><dt>アプリ</dt><dd><VerifiedValue field={product.appSupport} /></dd></div></dl><button className="compare-toggle" aria-pressed={selected.includes(product.slug)} disabled={!selected.includes(product.slug) && selected.length >= 4} onClick={() => select(product.slug)}>{selected.includes(product.slug) ? "比較から外す" : "比較に追加"}</button></article>)}</div>
    {visible.length === 0 && <div className="empty"><h3>該当商品がありません</h3><p>未確認項目は一致扱いにしません。条件を減らして確認してください。</p></div>}
    {selected.length > 0 && <aside className="compare-bar"><span><strong>{selected.length}件</strong> 選択中（2〜4件）</span>{selected.length >= 2 ? <Link href={`/water-fountains/compare?items=${selected.join(",")}`}>選択商品を比較</Link> : <span>あと1件選んでください</span>}</aside>}
  </section>;
}
