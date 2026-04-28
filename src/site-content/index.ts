import { tributarioArticles } from './data/tributario';
import { civilArticles } from './data/civil';
import { familiaESucessoesArticles } from './data/familia-e-sucessoes';
import { imobiliarioArticles } from './data/imobiliario';
import { previdenciarioArticles } from './data/previdenciario';
import type { Article, PracticeArea, PracticeAreaMeta } from './types/content';

export type { Article, PracticeArea, PracticeAreaMeta };
export type { ContentBlock, TextBlock, ListBlock, OrderedListBlock, SimpleTableBlock, ComparisonTableBlock } from './types/content';

// ─── Metadados das áreas de prática ────────────────────────────────────────

export const practiceAreas: PracticeAreaMeta[] = [
  {
    slug: 'tributario',
    label: 'Tributário',
    description:
      'Defesa em execuções fiscais, negociação com PGFN e Receita Federal, transação tributária e estratégias contra bloqueios judiciais.',
  },
  {
    slug: 'civil',
    label: 'Civil',
    description:
      'Ações indenizatórias, disputas contratuais e defesa contra negativações indevidas. Responsabilidade civil e reparação de danos.',
  },
  {
    slug: 'familia-e-sucessoes',
    label: 'Família e Sucessões',
    description:
      'Divórcio, guarda e convivência, pensão alimentícia, inventário e planejamento sucessório com foco no menor impacto tributário.',
  },
  {
    slug: 'imobiliario',
    label: 'Imobiliário',
    description:
      'Regularização de imóveis, usucapião, ação de despejo, due diligence, suspensão de leilões e defesa da posse.',
  },
  {
    slug: 'previdenciario',
    label: 'Previdenciário',
    description:
      'BPC-LOAS para idosos, pessoas com deficiência, autismo e TDAH. Auxílio-acidente e reversão de negativas do INSS.',
  },
];

// ─── Todos os artigos ───────────────────────────────────────────────────────

export const allArticles: Article[] = [
  ...tributarioArticles,
  ...civilArticles,
  ...familiaESucessoesArticles,
  ...imobiliarioArticles,
  ...previdenciarioArticles,
];

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getArticlesByArea(area: PracticeArea): Article[] {
  return allArticles.filter((article) => article.area === area);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug);
}

export function getPracticeAreaMeta(slug: PracticeArea): PracticeAreaMeta | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}

// ─── Re-exports ─────────────────────────────────────────────────────────────

export {
  tributarioArticles,
  civilArticles,
  familiaESucessoesArticles,
  imobiliarioArticles,
  previdenciarioArticles,
};
