import Image from "next/image";
import Link from "next/link";
import type { ContentBlock, ContentPageData } from "@/lib/content/types";
import renderInline from "@/lib/renderInline";
import { Breadcrumbs } from "./ContentPage";
import "./AboutPage.css";

function BlockBody({ block, lede }: { block: ContentBlock; lede?: boolean }) {
  return (
    <>
      {block.paragraphs?.map((p, i) => (
        <p key={i} className={lede && i === 0 ? "ap-p ap-lede" : "ap-p"}>
          {renderInline(p)}
        </p>
      ))}
      {block.table && (
        <div className="ap-table-wrap">
          <table className="ap-table">
            <thead>
              <tr>
                {block.table.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row, i) => (
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
    </>
  );
}

function Block({ block }: { block: ContentBlock }) {
  const style = block.style ?? "prose";
  const items = block.list?.items;

  if (style === "founder") {
    return (
      <section className="ap-block ap-founder">
        <div className="ap-founder-media">
          {block.image && (
            <Image
              src={block.image}
              alt="Amit Kumar, founder of Automate Ideas"
              className="ap-founder-img"
              width={400}
              height={400}
              priority={false}
            />
          )}
        </div>
        <div>
          <h2 className="ap-h2">{block.heading}</h2>
          <BlockBody block={block} lede />
        </div>
      </section>
    );
  }

  if (style === "split") {
    return (
      <section className="ap-block ap-split">
        <div className="ap-split-head">
          <h2 className="ap-h2">{block.heading}</h2>
        </div>
        <div className="ap-split-body">
          <BlockBody block={block} lede />
        </div>
      </section>
    );
  }

  if (style === "values" && items) {
    return (
      <section className="ap-block">
        <h2 className="ap-h2">{block.heading}</h2>
        <ul className="ap-values">
          {items.map((item, i) => (
            <li key={i} className="ap-value">
              <span className="ap-value-dot" aria-hidden="true" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (style === "chips" && items) {
    return (
      <section className="ap-block">
        <h2 className="ap-h2">{block.heading}</h2>
        {block.paragraphs?.map((p, i) => (
          <p key={i} className="ap-p">
            {renderInline(p)}
          </p>
        ))}
        <ul className="ap-chips">
          {items.map((item, i) => (
            <li key={i} className="ap-chip">
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (style === "links" && items) {
    return (
      <section className="ap-block">
        <h2 className="ap-h2">{block.heading}</h2>
        {block.paragraphs?.map((p, i) => (
          <p key={i} className="ap-p">
            {renderInline(p)}
          </p>
        ))}
        <ul className="ap-linkrows">
          {items.map((item, i) => (
            <li key={i} className="ap-linkrow">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="ap-block">
      <h2 className="ap-h2">{block.heading}</h2>
      <BlockBody block={block} lede />
      {items && (
        <ul className={`ap-list${block.list?.ordered ? " is-ordered" : ""}`}>
          {items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function AboutPage({ data }: { data: ContentPageData }) {
  return (
    <article className="ap-page">
      <header className="ap-head">
        <div className="ap-wrap">
          <Breadcrumbs items={data.breadcrumbs} />
          <div className="ap-head-grid">
            <div>
              <div className="ap-eyebrow">
                <span className="ap-eyebrow-bar" aria-hidden="true" />
                {data.eyebrow}
              </div>
              <h1 className="ap-h1">{data.title}</h1>
            </div>
            <p className="ap-sub">{renderInline(data.subtitle)}</p>
          </div>

          {data.stats && data.stats.length > 0 && (
            <div className="ap-stats">
              {data.stats.map((stat) => (
                <div key={stat.label} className="ap-stat">
                  <div className="ap-stat-value">{stat.value}</div>
                  <div className="ap-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="ap-body">
        <div className="ap-wrap">
          {data.missionVision && data.missionVision.length > 0 && (
            <section className="ap-mv" aria-label="Mission and vision">
              {data.missionVision.map((item) => (
                <div key={item.label} className="ap-mv-card">
                  <div className="ap-mv-label">{item.label}</div>
                  <h2 className="ap-mv-h2">{item.heading}</h2>
                  {item.paragraphs.map((p, i) => (
                    <p key={i} className="ap-mv-p">
                      {renderInline(p)}
                    </p>
                  ))}
                </div>
              ))}
            </section>
          )}

          {data.sections.map((section) => (
            <Block key={section.heading} block={section} />
          ))}

          {data.ctaNote && (
            <div className="ap-cta">
              <strong>Let&apos;s talk.&nbsp;</strong>
              {renderInline(data.ctaNote)}
            </div>
          )}

          {data.relatedLinks && data.relatedLinks.length > 0 && (
            <div className="ap-related">
              <h2 className="ap-related-h2">Continue exploring</h2>
              <div className="ap-related-grid">
                {data.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="ap-related-card">
                    <span className="ap-related-title">{link.title}</span>
                    <span className="ap-related-desc">{link.description}</span>
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
