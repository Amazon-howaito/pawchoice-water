import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` }, description: "循環式ペット給水器を、容量・電源・材質・お手入れなど確認済み仕様で比較。", openGraph: { type: "website", locale: "ja_JP", siteName: SITE_NAME, url: SITE_URL, title: SITE_NAME, description: "未確認情報と実機評価を分けて、ペット給水器を条件別に比較します。" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" data-scroll-behavior="smooth"><body><SiteHeader />{children}<footer className="site-footer"><nav><a href="/about">運営方針</a><a href="/privacy">プライバシー</a><a href="/disclosure">広告・情報開示</a></nav><p>掲載仕様は2026-08-27確認。価格・在庫は変動します。健康上の不安は獣医師へご相談ください。</p></footer></body></html>;
}
