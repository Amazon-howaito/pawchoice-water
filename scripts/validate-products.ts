import { products } from "../src/data/products";
import { commerceAdapters } from "../src/lib/commerce";

const errors: string[] = [];
const verifiedAmazonAsins = new Set(["B0CQ4TWRGB", "B0D4QDT8SF", "B0DF9ZCSDK", "B0DVGW3VSB", "B0CTZR49TV", "B0CWK6V4P8", "B0GL225P2X"]);
if (products.length !== 9) errors.push(`Expected 9 products, got ${products.length}`);
const unique = (values: string[], label: string) => { if (new Set(values).size !== values.length) errors.push(`${label} is not unique`); };
unique(products.map((p) => p.slug), "slug"); unique(products.map((p) => p.model), "model/JAN");
if (products.some((p) => p.model.includes("P4115"))) errors.push("P4115 must not be included");
for (const product of products) {
  for (const [key, field] of Object.entries(product)) {
    if (field && typeof field === "object" && "verification" in field) {
      if (field.verification === "verified" && (!Array.isArray(field.sources) || field.sources.length === 0)) errors.push(`${product.model}.${key}: verified without field source`);
      if (field.verification !== "verified" && field.value !== null) errors.push(`${product.model}.${key}: non-verified field has representative value`);
    }
  }
  if (product.affiliateUrl !== null) errors.push(`${product.model}: affiliateUrl must not be stored`);
  const amazon = product.commerceLinks.find((link) => link.merchant === "amazon");
  const shouldBeActive = product.asin !== null;
  if (!amazon) errors.push(`${product.model}: Amazon commerce record is missing`);
  else {
    if (shouldBeActive !== (amazon.status === "active")) errors.push(`${product.model}: Amazon status does not match ASIN state`);
    if (amazon.productId !== product.asin) errors.push(`${product.model}: Amazon productId does not match ASIN`);
    if (shouldBeActive && (!verifiedAmazonAsins.has(product.asin!) || amazon.listingVerified !== true || !amazon.listingMatchBasis || !amazon.destinationUrl || amazon.sellerVerified !== null || amazon.checkedAt !== "2026-08-30")) errors.push(`${product.model}: verified Amazon listing record is incomplete`);
    if (!shouldBeActive && (amazon.productId !== null || amazon.destinationUrl !== null || amazon.listingVerified !== null || amazon.listingMatchBasis !== null || amazon.sellerVerified !== null || amazon.checkedAt !== null)) errors.push(`${product.model}: pending Amazon record must remain unset`);
    if (commerceAdapters.amazon.buildUrl(amazon) !== null) errors.push(`${product.model}: URL generated without Partner Tag`);
  }
  for (const link of product.commerceLinks.filter((item) => item.merchant !== "amazon")) if (commerceAdapters[link.merchant].buildUrl(link) !== null) errors.push(`${product.model}: non-Amazon commerce URL was generated`);
}
if (products.filter((product) => product.asin !== null).length !== 7) errors.push("Expected exactly 7 verified Amazon ASINs");
if (products.filter((product) => product.asin === null).length !== 2) errors.push("Expected exactly 2 held Amazon products");
const activeAmazon = products.find((product) => product.asin !== null)?.commerceLinks[0];
if (activeAmazon) {
  const syntheticTag = ["validation", "22"].join("-");
  const generated = commerceAdapters.amazon.buildUrl(activeAmazon, syntheticTag);
  if (!generated) errors.push("Verified Amazon URL was not generated with a valid Partner Tag");
  else {
    const url = new URL(generated);
    if (url.origin !== "https://www.amazon.co.jp" || url.pathname !== `/dp/${activeAmazon.productId}/ref=nosim` || url.searchParams.get("tag") !== syntheticTag) errors.push("Generated Amazon URL is invalid");
  }
  if (commerceAdapters.amazon.buildUrl(activeAmazon, "invalid") !== null) errors.push("Invalid Partner Tag must fail closed");
  const heldAmazon = products.find((product) => product.asin === null)?.commerceLinks[0];
  if (heldAmazon && commerceAdapters.amazon.buildUrl(heldAmazon, syntheticTag) !== null) errors.push("Pending Amazon product must fail closed with a valid Partner Tag");
}
const p4108 = products.find((p) => p.model === "P4108");
if (p4108?.capacityLiters.verification !== "conflict" || p4108.capacityLiters.value !== null || p4108.capacityLiters.candidates.length !== 2) errors.push("P4108 capacity conflict not preserved");
const p4103s = products.find((p) => p.model === "P4103S");
if (p4103s?.dishwasherSafe.verification === "verified") errors.push("P4103S dishwasher scope must not be treated as resolved");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Product validation PASS: 9 unique products, provenance complete, conflicts and commerce safety preserved");
