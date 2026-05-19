'use client';
import { MainImage } from '@/components/MainImage';
import img from '../../assets/alves&ikejiri.jpeg';
import Image from 'next/image';
import styles from './page.module.css';
import { CTAButton } from '@/components/CTAButton';
import { lawyerCard } from '../../db/lawyerData.json';

export default function QuemSomos() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.institutionalContainer}>
          <figure>
            <Image src={img} alt="Alves e Ikejiri" className={styles.image} />
          </figure>
          <div className={styles.institutionalText}>
            <p>
              O escritório Alves & Ikejiri é fruto da parceria entre dois
              advogados com formações complementares, unidos pelo objetivo de
              oferecer assessoria jurídica de qualidade, com atendimento próximo
              e personalizado. Ambos são formados pela Universidade de Taubaté
              (Unitau) e atuam com dedicação às suas respectivas especialidades,
              buscando sempre o melhor resultado possível para cada cliente.
            </p>
          </div>
        </div>

        <div className={styles.lawyersCardsContainer}>
          {lawyerCard.map((card) => {
            // CORREÇÃO 1: Adicionado o .default para pegar o objeto correto da imagem importada
            const lawyerImage = require(`../../assets/${card.photo}`).default;

            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <h1>{card.name}</h1>
                  <p>{card.OAB}</p>
                  <span className={styles.cardBody}>{card.description}</span>
                </div>

                <Image
                  src={lawyerImage}
                  alt={`Foto do advogado ${card.name}`}
                  className={styles.cardPhoto}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.btn}>
          <CTAButton content="Falar pelo Whatsapp" type="default" msn="" />
        </div>
      </section>
    </>
  );
}
