import type { ReactNode } from "react";
import type { FieldSource, VerifiedField } from "@/types/product";

const defaultFormat = (value: unknown): ReactNode => {
  if (typeof value === "boolean") return value ? "対応（公式確認済み）" : "非対応（公式確認済み）";
  if (Array.isArray(value)) return value.map((item) => item === "cat" ? "猫" : item === "dog" ? "犬" : String(item)).join("・");
  return String(value);
};

export function VerifiedValue<T>({ field, format = defaultFormat, showSources = false }: { field: VerifiedField<T>; format?: (value: T) => ReactNode; showSources?: boolean }) {
  if (field.verification === "unknown") {
    return <div className="verification-block"><span className="status unknown">公式情報では確認できていません</span>{field.note && <p className="verification-note">{field.note}</p>}{showSources && field.sources.length > 0 && <SourceLinks sources={field.sources} label="確認した公式情報" />}</div>;
  }
  if (field.verification === "conflict") {
    if (!showSources) return <span className="status conflict">公式情報に相違あり — {field.candidates.map((candidate) => `${candidate.label}: ${String(candidate.value)}`).join(" / ")}</span>;
    return <div className="verification-block"><span className="status conflict">公式情報に相違あり</span><p className="verification-note">{field.conflictNote}</p><ul className="conflict-candidates">{field.candidates.map((candidate, index) => <li key={`${candidate.source.url}-${index}`}><span><strong>{candidate.label}</strong><b>{format(candidate.value)}</b></span><span className="source-meta">{`確認日 ${candidate.source.checkedAt}`}</span><a href={candidate.source.url} target="_blank" rel="noopener noreferrer">{`${candidate.label}の出典`}</a></li>)}</ul></div>;
  }
  return <><span className="status verified">{format(field.value)}</span>{showSources && <SourceLinks sources={field.sources} label="出典" />}</>;
}

function SourceLinks({ sources, label }: { sources: FieldSource[]; label: string }) {
  return <span className="sources">{sources.map((item, index) => <a key={`${item.url}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer">{label}{sources.length > 1 ? index + 1 : ""}（{item.market === "GLOBAL" ? "Global公式" : "日本公式"}・{item.checkedAt}）</a>)}</span>;
}
