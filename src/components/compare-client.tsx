"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { VerifiedValue } from "@/components/verified-value";
import type { WaterFountainProduct } from "@/types/product";

const rows: { label: string; key: keyof WaterFountainProduct; format?: (value: never) => string }[] = [
  { label: "容量", key: "capacityLiters", format: (value) => `${value}L` }, { label: "対象", key: "targetPets" }, { label: "材質", key: "material" }, { label: "給電", key: "powerMethod" }, { label: "完全コードレス", key: "cordless" }, { label: "ポンプ方式", key: "pumpMethod" }, { label: "静音仕様", key: "quietSpecification" }, { label: "フィルター", key: "filter" }, { label: "交換目安", key: "filterReplacement" }, { label: "洗浄可能部品", key: "washableParts" }, { label: "食洗機", key: "dishwasherSafe" }, { label: "寸法", key: "dimensions" }, { label: "重量", key: "weight" }, { label: "アプリ", key: "appSupport" }, { label: "飲水記録", key: "drinkingLog" }, { label: "水位通知", key: "waterLevelNotification" }, { label: "電源断時", key: "powerFailureBehavior" },
];

export function CompareClient() {
  const params = useSearchParams();
  const slugs = (params.get("items") ?? "").split(",").filter(Boolean).slice(0, 4);
  const selected = slugs.map((slug) => products.find((product) => product.slug === slug)).filter((item): item is WaterFountainProduct => Boolean(item));
  if (selected.length < 2) return <div className="empty"><h2>2〜4商品を選択してください</h2><p>商品一覧の「比較に追加」から、比較したい商品を2件以上選んでください。</p></div>;
  return <><p className="notice">仕様評価のみを表示しています。実機評価は全商品で未実施です。相違・未確認項目は判定や点数に変換しません。</p><div className="table-scroll"><table className="compare-table"><thead><tr><th>比較項目</th>{selected.map((product) => <th key={product.slug}>{product.productName}<small>{product.model}</small></th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.key}><th>{row.label}</th>{selected.map((product) => <td key={product.slug}><VerifiedValue field={product[row.key] as never} format={row.format} /></td>)}</tr>)}</tbody></table></div></>;
}
