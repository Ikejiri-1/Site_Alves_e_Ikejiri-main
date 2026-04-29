import Table from '@/components/Table';
import type { ContentBlock } from '@/site-content';
import styles from '../app/areas-de-atuacao/[area]/[slug]/page.module.css';

interface ArticleRendererProps {
  blocks: ContentBlock[];
}

export default function ArticleRenderer({ blocks }: ArticleRendererProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <p className={`${styles.articleContent}`} key={index}>
                {block.content}
              </p>
            );

          case 'list':
            return (
              <ul key={index} className={styles.articleList}>
                {block.items.map((item, i) => (
                  <li key={i} className={styles.articleListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            );

          case 'ordered-list':
            return (
              <ol key={index} className={styles.orderedList}>
                {block.items.map((item, i) => (
                  <li key={i} className={styles.orderedListItem}>
                    {item}
                  </li>
                ))}
              </ol>
            );

          case 'simple-table':
            return <Table key={index} types={block.rows} />;

          case 'comparison-table':
            return (
              <Table key={index} headers={block.headers} rows={block.rows} />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
