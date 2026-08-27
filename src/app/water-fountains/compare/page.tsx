import type { Metadata } from "next";
import { Suspense } from "react";
import { CompareClient } from "@/components/compare-client";

export const metadata:Metadata={title:"循環式ペット給水器を2〜4商品で比較",description:"容量、材質、電源、フィルター、アプリなどを2〜4商品で横並び比較。",alternates:{canonical:"/water-fountains/compare"},robots:{index:false,follow:true},openGraph:{url:"/water-fountains/compare",title:"給水器を仕様比較"}};
export default function ComparePage(){return <main><section className="page-hero"><div className="container"><p className="eyebrow">COMPARE · 2–4 PRODUCTS</p><h1>選んだ商品を横並びで比較</h1><p className="lede">確認済み・未確認・公式情報相違を分けて表示します。選択状態を含むURLはインデックス対象にしません。</p></div></section><section className="section"><div className="container"><Suspense fallback={<p>比較表を準備しています…</p>}><CompareClient/></Suspense></div></section></main>}
