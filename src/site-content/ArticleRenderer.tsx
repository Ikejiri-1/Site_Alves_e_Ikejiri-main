import Table from '@/components/Table';
import type { ContentBlock } from '@/site-content';

interface ArticleRendererProps {
  blocks: ContentBlock[];
}

export default function ArticleRenderer({ blocks }: ArticleRendererProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <p key={index}>{block.content}</p>;

          case 'list':
            return (
              <ul key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          case 'ordered-list':
            return (
              <ol key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
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
