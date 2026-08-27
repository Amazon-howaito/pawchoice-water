export const SITE_URL = "https://water.pawchoice.jp";
export const SITE_NAME = "PawChoice ペット給水器比較";
export const OPEN_GRAPH_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "PawChoice ペット給水器比較。犬と猫、循環式給水器を描いたイラスト。",
} as const;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
