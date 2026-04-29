'use client';
import { Cards } from '../Cards';
import styles from './areas.module.css';
import { cardArea } from '../../db/areasData.json';

export const Areas = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Áreas de Atuação</h1>
      <div className={styles.cardContainer}>
        {cardArea.map((areas) => (
          <Cards
            key={areas.id}
            title={areas.tabs}
            content={areas.content}
            className={styles.cards}
            button={areas.button}
            href={`/areas-de-atuacao/${areas.area}`}
          />
        ))}
      </div>
    </section>
  );
};
