import { productBySlug } from "@/data/products";
import type { WaterFountainProduct } from "@/types/product";

export type ProductComparison = {
  slug: string;
  productSlugs: readonly [string, string];
  title: string;
  description: string;
  conclusion: string;
  differences: { heading: string; paragraphs: string[] }[];
  suitability: { productSlug: string; heading: string; points: string[] }[];
  unverifiedNote: string;
};

export const comparisons: ProductComparison[] = [
  {
    slug: "elecom-pet-wd01wh-vs-wd02wh",
    productSlugs: ["elecom-pet-wd01wh", "elecom-pet-wd02wh"],
    title: "PET-WD01WHとPET-WD02WHの違い｜エレコム サイレントアクア2機種を仕様で比較",
    description: "エレコムの循環式ペット給水器 PET-WD01WH と PET-WD02WH を、ポンプ方式、給電、サイズ、フィルター、静音仕様など確認済み仕様で1対1比較します。",
    conclusion: "PET-WD01WHとPET-WD02WHで迷ったら、ワイヤレスポンプと給電ベースによる補水・清掃の扱いやすさと、設置のコンパクトさを重視するならPET-WD02WH、停電時にトレイへ残る水量が約100mLと公式に明示されている点を重視するならPET-WD01WHが候補になります。",
    differences: [
      { heading: "ポンプと給電の方式", paragraphs: ["PET-WD01WHは有線ポンプで、専用ACアダプターと専用給電ケーブルで給電します。PET-WD02WHはタンク内のポンプがワイヤレスで、水タンクを給電ベースに置いて給電する方式です（給電ベースへの接続はUSB Type-C）。どちらも本体は常時給電で、完全コードレスではありません。", "PET-WD02WHは水タンクと給電ベースが分かれる完全セパレート設計のため、補水のときに水タンクだけを持ち運べます。"] },
      { heading: "設置サイズ", paragraphs: ["本体サイズはPET-WD01WHが約204×191×154mm、PET-WD02WHが約177×177×144mm（給電ベース含む）で、設置面積はPET-WD02WHの方が小さく収まります。重量はPET-WD01WHが約0.6kg（本体のみ）、PET-WD02WHが約690gと、対象範囲の表記が異なるため、重さの単純比較はしません。"] },
      { heading: "静音仕様の公称値", paragraphs: ["メーカー公称値は、PET-WD01WHが16.6dB以下（本体から30cmで測定）、PET-WD02WHが9dB以下（近距離で測定）です。測定条件の表記が異なるため、この数値だけでどちらの動作音が静かかは断定しません。"] },
      { heading: "フィルターと水位の知らせ", paragraphs: ["適合フィルターの型番は、PET-WD01WHがPET-WD04FT、PET-WD02WHがPET-WD02FT4と異なります。交換品を買うときは、本体型番に合う型番を確認してください。水位が限界水量を下回ったときに赤色ランプで知らせる仕様は、両機種とも公式情報で確認しています。"] },
    ],
    suitability: [
      { productSlug: "elecom-pet-wd01wh", heading: "PET-WD01WHが候補になるケース", points: ["停電時にトレイへ残る水量（約100mL）が公式に明示されている点を重視したい", "専用ACアダプターと有線ポンプの構成で使いたい", "適合フィルター PET-WD04FT の買い置きがある"] },
      { productSlug: "elecom-pet-wd02wh", heading: "PET-WD02WHが候補になるケース", points: ["補水や清掃のときに、水タンクだけを持ち運びたい", "設置スペースを小さく収めたい", "タンク内にポンプのケーブルがない構造がよい"] },
    ],
    unverifiedNote: "フィルター交換目安と食洗機対応は、両機種とも公式情報で確認できていません。このページの比較と結論には使っていません。",
  },
];

export const comparisonBySlug = (slug: string) => comparisons.find((comparison) => comparison.slug === slug);
export const comparisonsForProduct = (productSlug: string) => comparisons.filter((comparison) => comparison.productSlugs.includes(productSlug));
export const comparisonProducts = (comparison: ProductComparison): [WaterFountainProduct, WaterFountainProduct] => {
  const [first, second] = comparison.productSlugs.map(productBySlug);
  if (!first || !second) throw new Error(`Comparison ${comparison.slug} references a missing product`);
  return [first, second];
};
