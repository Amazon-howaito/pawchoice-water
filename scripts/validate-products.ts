import { products } from "../src/data/products";
import { commerceAdapters } from "../src/lib/commerce";

const errors: string[] = [];
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
  if (product.asin !== null || product.affiliateUrl !== null) errors.push(`${product.model}: affiliate identifiers must be null`);
  for (const link of product.commerceLinks) if (commerceAdapters[link.merchant].buildUrl(link) !== null) errors.push(`${product.model}: commerce URL was generated`);
}
const p4108 = products.find((p) => p.model === "P4108");
if (p4108?.capacityLiters.verification !== "conflict" || p4108.capacityLiters.value !== null || p4108.capacityLiters.candidates.length !== 2) errors.push("P4108 capacity conflict not preserved");
const p4103s = products.find((p) => p.model === "P4103S");
if (p4103s?.dishwasherSafe.verification === "verified") errors.push("P4103S dishwasher scope must not be treated as resolved");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Product validation PASS: 9 unique products, provenance complete, conflicts and commerce safety preserved");
