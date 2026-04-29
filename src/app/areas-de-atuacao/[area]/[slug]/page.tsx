import { getArticleBySlug, allArticles, practiceAreas } from '@/site-content';
import ArticleRenderer from '@/site-content/ArticleRenderer';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

export function generateStaticParams() {
  return allArticles.map((a) => ({ area: a.area, slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; area: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ area: string; slug: string }>;
}) {
  const { slug } = await params;
  const { area } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb} aria-label="Áreas de atuação">
        <Link
          href={`/areas-de-atuacao/${area}`}
          className={styles.breadcrumbHome}
        >
          ← Voltar
        </Link>
      </nav>
      <h1 className={styles.mainTitle}>{article.title}</h1>
      <p className={styles.description}>{article.description}</p>
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2 className={styles.headingTitle}>{section.heading}</h2>
          <ArticleRenderer blocks={section.blocks} />
        </section>
      ))}
      <Link
        href={`/areas-de-atuacao/${area}`}
        className={styles.breadcrumbHome}
      >
        ← Voltar
      </Link>
    </main>
  );
}
