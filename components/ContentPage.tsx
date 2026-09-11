import type { ReactNode } from "react";
import Link from "next/link";
import type { ContentPageData } from "@/lib/content/types";
import "./ContentPage.css";

function renderInline(text: string): ReactNode[] {
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

function Breadcrumbs({ items }: { items: ContentPageData["breadcrumbs"] }) {
  return (
    <nav className="cp-crumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <span aria-hidden="true" className="cp-crumbs-sep">
              /
            </span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function ContentPage({ data }: { data: ContentPageData }) {
  return (
    <article className="cp-page">
      <header className="cp-hero">
        <div className="cp-hero-inner">
          <Breadcrumbs items={data.breadcrumbs} />
          <div className="cp-eyebrow">
            <span className="cp-eyebrow-bar" />
            {data.eyebrow}
          </div>
          <h1 className="cp-hero-h1">{data.title}</h1>
          <p className="cp-hero-sub">{data.subtitle}</p>

          {data.type === "blog" && (
            <div className="cp-byline">
              {data.author && (
                <span className="cp-byline-author">{data.author.name}</span>
              )}
              {data.publishedDate && <span>{data.publishedDate}</span>}
              {data.readTime && <span>{data.readTime} read</span>}
              {data.tags && data.tags.length > 0 && (
                <span className="cp-byline-tags">
                  {data.tags.map((tag) => `#${tag}`).join(" ")}
                </span>
              )}
            </div>
          )}
          {data.type === "case-study" && data.metaChips && (
            <div className="cp-chips">
              {data.metaChips.map((chip) => (
                <span key={chip.label} className="cp-chip">
                  <strong>{chip.label}:</strong> {chip.value}
                </span>
              ))}
            </div>
          )}

          {data.stats && data.stats.length > 0 && (
            <div className="cp-stats">
              {data.stats.map((stat) => (
                <div key={stat.label} className="cp-stat">
                  <div className="cp-stat-value">{stat.value}</div>
                  <div className="cp-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="cp-content">
        <div className="cp-inner">
          {data.sections.map((section, idx) => (
            <section key={section.heading} className="cp-section" aria-labelledby={`cp-h-${idx}`}>
              <div className="cp-section-num" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h2 id={`cp-h-${idx}`} className="cp-section-h2">
                {section.heading}
              </h2>
              <div className="cp-section-body">
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="cp-p">
                    {renderInline(p)}
                  </p>
                ))}
                {section.list && (
                  <ul className={`cp-list${section.list.ordered ? " is-ordered" : ""}`}>
                    {section.list.items.map((item, i) => (
                      <li key={i}>{renderInline(item)}</li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="cp-table-wrap">
                    <table className="cp-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j}>{renderInline(cell)}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>
          ))}

          {data.faq && data.faq.length > 0 && (
            <section className="cp-section" aria-label="Frequently asked questions">
              <div className="cp-section-num" aria-hidden="true">
                {String(data.sections.length + 1).padStart(2, "0")}
              </div>
              <h2 className="cp-section-h2">Frequently Asked Questions</h2>
              <div className="cp-section-body">
                {data.faq.map((item) => (
                  <details key={item.q} className="cp-faq-item">
                    <summary>{item.q}</summary>
                    <div className="cp-faq-a">
                      <span className="cp-p">{renderInline(item.a)}</span>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {data.ctaNote && (
            <div className="cp-contact-note">
              <strong>Let&apos;s talk.&nbsp;</strong>
              {renderInline(data.ctaNote)}
            </div>
          )}

          {data.relatedLinks && data.relatedLinks.length > 0 && (
            <div className="cp-related">
              <h2 className="cp-related-h2">Continue exploring</h2>
              <div className="cp-related-grid">
                {data.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="cp-related-card">
                    <span className="cp-related-title">{link.title}</span>
                    <span className="cp-related-desc">{link.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}