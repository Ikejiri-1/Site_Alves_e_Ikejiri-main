export type PracticeArea =
  | 'tributario'
  | 'civil'
  | 'familia-e-sucessoes'
  | 'imobiliario'
  | 'previdenciario';

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  area: PracticeArea;
  sections: ArticleSection[];
  ctaLabel?: string;
}

export interface PracticeAreaMeta {
  slug: PracticeArea;
  label: string;
  description: string;
}
