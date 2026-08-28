type IconName = "capacity" | "pet" | "power" | "app" | "filter" | "wash";

export function SpecIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    capacity: <><path d="M7 4h10l-1 16H8L7 4Z"/><path d="M9 9h6"/></>,
    pet: <><circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="5" r="2"/><path d="M7 15c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5Z"/></>,
    power: <path d="M13 2 5 13h7l-1 9 8-12h-7l1-8Z"/>,
    app: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
    filter: <path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"/>,
    wash: <><path d="M4 14h16v5H4z"/><path d="M7 10c0-2 2-2 2-4M12 10c0-2 2-2 2-4M17 10c0-2 2-2 2-4"/></>,
  };
  return <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
