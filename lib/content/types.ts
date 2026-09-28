export type ContentBlockStyle =
  | "prose"
  | "split"
  | "founder"
  | "values"
  | "chips"
  | "links";

export interface ContentBlock {
  heading: string;
  style?: ContentBlockStyle;
  image?: string;
  paragraphs?: string[];
  list?: { ordered?: boolean; items: string[] };
  table?: { headers: string[]; rows: string[][] };
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface StatBanner {
  label: string;
  value: string;
}

export interface MissionVision {
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface ContentPageData {
  type?: "page" | "blog" | "case-study";
  eyebrow: string;
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  publishedDate?: string;
  updatedDate?: string;
  author?: { name: string; role: string };
  readTime?: string;
  tags?: string[];
  keywords?: string[];
  metaChips?: { label: string; value: string }[];
  stats?: StatBanner[];
  missionVision?: MissionVision[];
  sections: ContentBlock[];
  faq?: FaqItem[];
  ctaNote?: string;
  relatedLinks?: RelatedLink[];
}