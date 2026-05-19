'use client';

import { Cards } from '../Cards';
import styles from './why.module.css';
import agil from '../../../public/assets/agil.png';
import foco from '../../../public/assets/foco.png';
import pessoas from '../../../public/assets/pessoas-de-negocio.png';
import saudacao from '../../../public/assets/saudacao-de-duas-maos-de-empresarios.png';
import { useEffect, useRef, useState } from 'react';

const data = [
  {
    id: 1,
    description: 'Agilidade na resolução dos casos.',
    icon: agil,
  },
  {
    id: 2,
    description: 'Transparência em cada etapa.',
    icon: saudacao,
  },
  {
    id: 3,
    description: 'Atendimento personalizado.',
    icon: pessoas,
  },
  {
    id: 4,
    description: 'Profissionais dedicados com foco em resultado.',
    icon: foco,
  },
];
export const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se a seção estiver visível na tela, ativa o estado
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconecta o observer se quiser que a animação ocorra apenas uma vez
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.45,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.ball}>
        <h1 className={styles.title}>Por que nos escolher?</h1>
      </div>
      <div className={styles.content}>
        {data.map((d) => {
          return (
            <Cards
              img={d.icon}
              key={d.id}
              className={styles.card}
              subtitle={d.description}
            />
          );
        })}
      </div>
    </section>
  );
};
