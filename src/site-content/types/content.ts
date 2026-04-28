export type PracticeArea =
  | 'tributario'
  | 'civil'
  | 'familia-e-sucessoes'
  | 'imobiliario'
  | 'previdenciario';

// ─── Blocos de conteúdo ─────────────────────────────────────────────────────

/** Parágrafo simples */
export interface TextBlock {
  type: 'text';
  content: string;
}

/** Lista não-ordenada (ul) */
export interface ListBlock {
  type: 'list';
  items: string[];
}

/** Lista numerada (ol) */
export interface OrderedListBlock {
  type: 'ordered-list';
  items: string[];
}

/**
 * Tabela simples — duas colunas (título | descrição)
 * Usa o modo `types` do componente Table
 */
export interface SimpleTableBlock {
  type: 'simple-table';
  rows: Array<{ title: string; description: string }>;
}

/**
 * Tabela comparativa — N colunas com cabeçalho
 * Usa o modo `headers + rows` do componente Table
 */
export interface ComparisonTableBlock {
  type: 'comparison-table';
  headers: string[];
  rows: Array<{ label: string; values: string[] }>;
}

export type ContentBlock =
  | TextBlock
  | ListBlock
  | OrderedListBlock
  | SimpleTableBlock
  | ComparisonTableBlock;

// ─── Seção e Artigo ─────────────────────────────────────────────────────────

export interface ArticleSection {
  heading: string;
  blocks: ContentBlock[];
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
