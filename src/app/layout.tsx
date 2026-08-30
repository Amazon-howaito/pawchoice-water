import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OPEN_GRAPH_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "循環式ペット給水器を、容量・電源・材質・お手入れなど確認済み仕様で比較。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_NAME,
    description: "未確認情報と実機評価を分けて、ペット給水器を条件別に比較します。",
    images: [OPEN_GRAPH_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "ペット給水器を、メーカー公式情報で確認できた仕様から比較します。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" data-scroll-behavior="smooth"><body><SiteHeader />{children}<SiteFooter /></body><Script src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"2aa3a9100e2943ae84745294c75027c3"}' strategy="afterInteractive" /></html>;
}
