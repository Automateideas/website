import type { ReactNode } from "react";
import Link from "next/link";

export default function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    const external = /^https?:/.test(href);
    parts.push(
      external ? (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link key={key++} href={href}>
          {label}
        </Link>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
