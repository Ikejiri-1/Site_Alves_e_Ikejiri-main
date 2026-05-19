'use client';
import { Cards } from '../Cards';
import styles from './areas.module.css';
import { cardArea } from '../../db/areasData.json';
import { useEffect, useRef, useState } from 'react';

export const Areas = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.animate : ''} `}
    >
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
