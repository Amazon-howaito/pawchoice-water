import type { CommerceLink } from "@/types/product";

export type CommerceAdapter = { merchant: CommerceLink["merchant"]; buildUrl(link: CommerceLink, partnerTag?: string): string | null };

function failClosed(merchant: CommerceLink["merchant"]): CommerceAdapter {
  return { merchant, buildUrl: () => null };
}

const asinPattern = /^[A-Z0-9]{10}$/;
const partnerTagPattern = /^[A-Za-z0-9_-]+-22$/;
export const amazonProductUrl = (asin: string) => new URL(`/dp/${asin}/`, "https://www.amazon.co.jp").toString();

const amazon: CommerceAdapter = {
  merchant: "amazon",
  buildUrl(link, partnerTag) {
    if (
      link.merchant !== "amazon" ||
      link.status !== "active" ||
      link.listingVerified !== true ||
      !link.listingMatchBasis ||
      link.sellerVerified !== null ||
      link.affiliateUrl !== null ||
      !link.checkedAt ||
      !link.productId ||
      !asinPattern.test(link.productId) ||
      link.destinationUrl !== amazonProductUrl(link.productId) ||
      !partnerTag ||
      !partnerTagPattern.test(partnerTag)
    ) return null;

    const url = new URL(`/dp/${link.productId}/ref=nosim`, "https://www.amazon.co.jp");
    url.searchParams.set("tag", partnerTag);
    return url.toString();
  },
};

export const commerceAdapters = { amazon, rakuten: failClosed("rakuten"), yahoo: failClosed("yahoo") } as const;
