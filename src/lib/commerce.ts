import type { CommerceLink } from "@/types/product";

export type CommerceAdapter = { merchant: CommerceLink["merchant"]; buildUrl(link: CommerceLink): null };

function failClosed(merchant: CommerceLink["merchant"]): CommerceAdapter {
  return { merchant, buildUrl(link) {
    if (link.merchant !== merchant || link.status !== "pending" || link.productId !== null || link.affiliateUrl !== null || link.sellerVerified !== null) throw new Error("Initial commerce records must remain pending and unset");
    return null;
  }};
}

export const commerceAdapters = { amazon: failClosed("amazon"), rakuten: failClosed("rakuten"), yahoo: failClosed("yahoo") } as const;
