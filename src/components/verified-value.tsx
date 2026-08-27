import type { ReactNode } from "react";
import type { VerifiedField } from "@/types/product";

const defaultFormat = (value: unknown): ReactNode => {
  if (typeof value === "boolean") return value ? "対応（公式確認済み）" : "非対応（公式確認済み）";
  if (Array.isArray(value)) return value.map((item) => item === "cat" ? "猫" : item === "dog" ? "犬" : String(item)).join("・");
  return String(value);
};

export function VerifiedValue<T>({ field, format = defaultFormat, showSources = false }: { field: VerifiedField<T>; format?: (value: T) => ReactNode; showSources?: boolean }) {
  if (field.verification === "unknown") return <span className="status unknown">未確認{field.note ? ` — ${field.note}` : ""}</span>;
  if (field.verification === "conflict") return <span className="status conflict">公式情報に相違あり — {field.candidates.map((candidate) => `${candidate.label}: ${String(candidate.value)}`).join(" / ")}</span>;
  return <><span className="status verified">{format(field.value)}</span>{showSources && <span className="sources">{field.sources.map((item, index) => <a key={`${item.url}-${index}`} href={item.url} rel="noopener noreferrer">出典{index + 1}（{item.market ?? "JP"}・{item.checkedAt}）</a>)}</span>}</>;
}
