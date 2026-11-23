import type { FieldSource, VerifiedField } from "@/types/product";

export const source = (url: string, market: "JP" | "GLOBAL" = "JP", note?: string, checkedAt: FieldSource["checkedAt"] = "2026-08-27"): FieldSource => ({ url, checkedAt, market, note });
export const verified = <T>(value: T, ...sources: [FieldSource, ...FieldSource[]]): VerifiedField<T> => ({ verification: "verified", value, sources });
export const unknown = <T>(sources: FieldSource[] = [], note?: string): VerifiedField<T> => ({ verification: "unknown", value: null, sources, note });
export const conflict = <T>(candidates: [{ value: T; label: string; source: FieldSource }, ...{ value: T; label: string; source: FieldSource }[]], note: string): VerifiedField<T> => ({ verification: "conflict", value: null, candidates, sources: candidates.map((candidate) => candidate.source) as [FieldSource, ...FieldSource[]], conflictNote: note });
