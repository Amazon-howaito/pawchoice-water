"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { VerifiedValue } from "@/components/verified-value";
import { ProductVisual } from "@/components/product-visual";
import { SpecIcon } from "@/components/spec-icon";
import type { WaterFountainProduct } from "@/types/product";

type Filters = { cat: boolean; dog: boolean; cordless: boolean; app: boolean; minCapacity: boolean };
const initial: Filters = { cat: false, dog: false, cordless: false, app: false, minCapacity: false };

function verificationSummary(product: WaterFountainProduct) {
  const fields = [product.capacityLiters, product.targetPets, product.cordless, product.appSupport];
  if (fields.some((field) => field.verification === "conflict")) return { label: "一部の公式情報に相違あり", kind: "conflict" };
  if (fields.some((field) => field.verification === "unknown")) return { label: "一部仕様を確認中", kind: "unknown" };
  return { label: "主要仕様を公式確認済み", kind: "verified" };
}

function conditionPoint(product: WaterFountainProduct) {
  if (product.cordless.verification === "verified" && product.cordless.value) return "バッテリー内蔵の完全コードレスを確認済み";
  if (product.capacityLiters.verification === "verified" && product.capacityLiters.value >= 2.5) return "公式容量2.5L以上を確認済み";
  if (product.appSupport.verification === "verified" && product.appSupport.value) return "公式アプリ対応を確認済み";
  if (product.targetPets.verification === "verified" && product.targetPets.value.includes("dog")) return "公式対象に犬・猫を含む";
  return "公式対象に猫を含む";
}

function caution(product: WaterFountainProduct) {
  if (product.capacityLiters.verification === "conflict") return "容量は公式情報に相違があり、絞り込み判定から除外";
  if (product.filterReplacement.verification === "unknown") return "フィルター交換目安は確認中";
  if (product.dishwasherSafe.verification !== "verified") return "食洗機対応は確定していません";
  return "実機での洗いやすさ・動作音は未評価";
}

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
    <div className="product-grid">{visible.map((product) => { const summary = verificationSummary(product); return <article className="product-card" key={product.slug}><ProductVisual compact/><span className={`verification-summary ${summary.kind}`}>{summary.kind === "verified" ? "✓" : summary.kind === "conflict" ? "!" : "?"} {summary.label}</span><div className="product-identity"><p className="maker">{product.manufacturer}</p><p className="model">{product.model}</p></div><h3>{product.productName}</h3>{product.referencePrice && <p className="reference-price"><span>参考価格</span>{product.referencePrice.label}<small>確認日 {product.referencePrice.checkedAt}</small></p>}<dl className="card-specs"><div><dt><SpecIcon name="capacity"/>容量</dt><dd><VerifiedValue field={product.capacityLiters} format={(value) => `${value}L`} /></dd></div><div><dt><SpecIcon name="pet"/>対象</dt><dd><VerifiedValue field={product.targetPets} /></dd></div><div><dt><SpecIcon name="power"/>給電</dt><dd><VerifiedValue field={product.cordless} format={(value) => value ? "完全コードレス" : "常時給電 / 有線"} /></dd></div><div><dt><SpecIcon name="app"/>アプリ</dt><dd><VerifiedValue field={product.appSupport} /></dd></div></dl><div className="card-insights"><p><strong>条件に合うポイント</strong>{conditionPoint(product)}</p><p className="card-caution"><strong>確認したい点</strong>{caution(product)}</p></div><div className="card-actions"><button className="compare-toggle" aria-pressed={selected.includes(product.slug)} disabled={!selected.includes(product.slug) && selected.length >= 4} onClick={() => select(product.slug)}>{selected.includes(product.slug) ? "✓ 比較に追加済み（外す）" : "比較に追加"}</button><Link className="detail-link" href={`/water-fountains/${product.slug}`}>商品詳細を見る</Link></div></article>})}</div>
    {visible.length === 0 && <div className="empty"><h3>該当商品がありません</h3><p>未確認項目は一致扱いにしません。条件を減らして確認してください。</p></div>}
    {selected.length > 0 && <aside className="compare-bar" aria-live="polite"><span><strong>{selected.length}件</strong> 選択中（上限4件）</span>{selected.length >= 2 ? <Link href={`/water-fountains/compare?items=${selected.join(",")}`}>選択商品を比較する</Link> : <span>比較するにはあと1件選んでください</span>}</aside>}
  </section>;
}
