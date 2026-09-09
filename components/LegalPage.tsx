import "./LegalPage.css";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  updatedDate: string;
  sections: LegalSection[];
  contactNote?: string;
}

export default function LegalPage({
  eyebrow,
  title,
  description,
  updatedDate,
  sections,
  contactNote,
}: LegalPageProps) {
  return (
    <main className="lb-page">
      <section className="lb-hero">
        <div className="lb-hero-inner">
          <div className="lb-eyebrow">
            <span className="lb-eyebrow-bar" />
            {eyebrow}
          </div>
          <h1 className="lb-hero-h1">{title}</h1>
          <p className="lb-hero-sub">{description}</p>
          <div className="lb-updated">Last updated: {updatedDate}</div>
        </div>
      </section>

      <section className="lb-content">
        <div className="lb-inner">
          {sections.map((section, i) => (
            <div className="lb-section" key={section.heading}>
              <div className="lb-section-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="lb-section-h2">{section.heading}</h2>
              <div className="lb-section-body">
                {section.paragraphs.map((p) => (
                  <p className="lb-p" key={p.slice(0, 40)}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {contactNote && <p className="lb-contact-note">{contactNote}</p>}
        </div>
      </section>
    </main>
  );
}