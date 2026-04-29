import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getArticlesByArea,
  getPracticeAreaMeta,
  practiceAreas,
} from '@/site-content';
import type { PracticeArea } from '@/site-content';
import styles from './page.module.css';

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const meta = getPracticeAreaMeta(area as PracticeArea);
  if (!meta) return {};
  return {
    title: `${meta.label} | Alves & Ikejiri Advocacia`,
    description: meta.description,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const meta = getPracticeAreaMeta(area as PracticeArea);

  if (!meta) notFound();

  const articles = getArticlesByArea(area as PracticeArea);

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb} aria-label="Áreas de atuação">
        <Link href="/" className={styles.breadcrumbHome}>
          Início
        </Link>

        <span className={styles.breadcrumbDivider} aria-hidden="true">
          /
        </span>

        <ol className={styles.breadcrumbAreas} role="list">
          {practiceAreas.map((practiceArea, index) => {
            const isActive = practiceArea.slug === area;
            return (
              <li key={practiceArea.slug} className={styles.breadcrumbItem}>
                {index > 0 && (
                  <span
                    className={styles.breadcrumbSeparator}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                {isActive ? (
                  <span
                    className={`${styles.breadcrumbLink} ${styles.breadcrumbActive}`}
                    aria-current="page"
                  >
                    {practiceArea.label}
                  </span>
                ) : (
                  <Link
                    href={`/areas-de-atuacao/${practiceArea.slug}`}
                    className={styles.breadcrumbLink}
                  >
                    {practiceArea.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── Cabeçalho da área ── */}
      <header className={styles.header}>
        <p className={styles.eyebrow}>Área de Atuação</p>
        <h1 className={styles.title}>{meta.label}</h1>
        <p className={styles.description}>{meta.description}</p>
      </header>

      {/* ── Grid de artigos ── */}
      <section
        className={styles.grid}
        aria-label={`Artigos sobre ${meta.label}`}
      >
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/areas-de-atuacao/${area}/${article.slug}`}
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.cardDescription}>{article.description}</p>
            </div>
            <span className={styles.cardCta} aria-hidden="true">
              Ler artigo →
            </span>
          </Link>
        ))}
      </section>

      {/* ── Voltar ── */}
      <div className={styles.back}>
        <Link href="/" className={styles.backLink}>
          ← Voltar para o início
        </Link>
      </div>
    </main>
  );
}
