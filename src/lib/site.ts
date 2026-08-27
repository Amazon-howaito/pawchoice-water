export const SITE_URL = "https://water.pawchoice.jp";
export const SITE_NAME = "PawChoice ペット給水器比較";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
