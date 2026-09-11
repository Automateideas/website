import Link from "next/link";
import "./ContentPage.css";

export interface IndexCard {
  title: string;
  href: string;
  description: string;
  meta?: string;
}

export default function IndexPage({
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: IndexCard[];
}) {
  return (
    <div className="cp-page">
      <header className="cp-hero">
        <div className="cp-hero-inner">
          <div className="cp-eyebrow">
            <span className="cp-eyebrow-bar" />
            {eyebrow}
          </div>
          <h1 className="cp-hero-h1">{title}</h1>
          <p className="cp-hero-sub">{subtitle}</p>
        </div>
      </header>
      <div className="cp-content">
        <div className="cp-inner cp-inner-wide">
          <div className="cp-cards">
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className="cp-card">
                {card.meta && <span className="cp-card-meta">{card.meta}</span>}
                <span className="cp-card-title">{card.title}</span>
                <span className="cp-card-desc">{card.description}</span>
                <span className="cp-card-link">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}