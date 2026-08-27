import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { url: "/" } };

export default function Home() { return <main><section className="hero"><div className="container hero-grid"><div><p className="eyebrow">PawChoice · Water environment</p><h1>水分環境を、<br/>仕様から選ぶ。</h1><p>循環式ペット給水器9商品を、容量・電源・材質・お手入れで比較。分からない情報を、分かったふりで埋めません。</p><Link className="cta" href="/water-fountains">9商品を比較する</Link></div><aside className="hero-card"><p className="eyebrow">CHOICE FLOW</p><h2>選ぶ順番</h2><ol><li>犬・猫と設置場所</li><li>容量と給電方式</li><li>洗う部品と消耗品</li><li>停電時・電源断時</li><li>アプリなど付加機能</li></ol></aside></div></section><section className="section"><div className="container three-grid"><article className="panel"><p className="eyebrow">WATCH</p><h2>留守番中の様子</h2><p>見守りカメラは映像や通知の確認に。給水器とは別の役割です。</p></article><article className="panel"><p className="eyebrow">MEAL</p><h2>留守番中の食事</h2><p>自動給餌器は食事管理に。飲み水は別器具・別管理で考えます。</p></article><article className="panel"><p className="eyebrow">WATER</p><h2>留守番中の水分環境</h2><p>容量だけで任せきりにせず、清掃・電源・予備の水飲み場も確認します。</p></article></div></section></main> }
