export type Verification = "verified" | "unknown" | "conflict";

export type FieldSource = {
  url: string;
  checkedAt: "2026-08-27";
  market?: "JP" | "GLOBAL";
  note?: string;
};

export type ConflictCandidate<T> = { value: T; label: string; source: FieldSource };

export type VerifiedField<T> =
  | { verification: "verified"; value: T; sources: [FieldSource, ...FieldSource[]] }
  | { verification: "unknown"; value: null; sources: FieldSource[]; note?: string }
  | { verification: "conflict"; value: null; sources: [FieldSource, ...FieldSource[]]; candidates: [ConflictCandidate<T>, ...ConflictCandidate<T>[]]; conflictNote: string };

export type Merchant = "amazon" | "rakuten" | "yahoo";
export type CommerceLink = {
  merchant: Merchant;
  productId: string | null;
  destinationUrl: string | null;
  affiliateUrl: null;
  listingVerified: true | null;
  listingMatchBasis: string | null;
  sellerVerified: boolean | null;
  status: "active" | "pending";
  checkedAt: "2026-08-30" | null;
};

export type WaterFountainProduct = {
  slug: string;
  productName: string;
  manufacturer: string;
  model: string;
  capacityLiters: VerifiedField<number>;
  targetPets: VerifiedField<("cat" | "dog")[]>;
  material: VerifiedField<string>;
  powerMethod: VerifiedField<string>;
  cordless: VerifiedField<boolean>;
  pumpMethod: VerifiedField<string>;
  quietSpecification: VerifiedField<string>;
  filter: VerifiedField<string>;
  filterReplacement: VerifiedField<string>;
  washableParts: VerifiedField<string>;
  dishwasherSafe: VerifiedField<boolean>;
  dimensions: VerifiedField<string>;
  weight: VerifiedField<string>;
  appSupport: VerifiedField<boolean>;
  drinkingLog: VerifiedField<boolean>;
  waterLevelNotification: VerifiedField<string>;
  powerFailureBehavior: VerifiedField<string>;
  referencePrice: { label: string; checkedAt: "2026-08-27"; sourceUrl: string } | null;
  officialUrl: string;
  checkedAt: "2026-08-27";
  asin: string | null;
  affiliateUrl: null;
  commerceLinks: [CommerceLink, CommerceLink, CommerceLink];
  safetyNotes: string[];
};
