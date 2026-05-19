'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './mainimage.module.css';
import { CTAButton } from '../CTAButton';

interface MainImageProps {
  img: StaticImageData;
  title?: string;
  alt: string;
  description?: string;
  CTA?: boolean;
}

export function MainImage({
  img,
  title,
  alt,
  description,
  CTA,
}: MainImageProps) {
  return (
    <div className={styles.mainImageContainer}>
      <div className={styles.mainImage}>
        <Image src={img} alt={alt} fill priority className={styles.image} />
      </div>

      {title && (
        <div className={styles.mainImageTitle}>
          <div className={styles.title}>{title}</div>
        </div>
      )}
      {description && (
        <div className={styles.mainImageDescription}>
          <div className={styles.description}>{description}</div>
        </div>
      )}
      {CTA && (
        <div className={styles.button}>
          <CTAButton content={'Falar com Advogado'} type="default" msn="" />
        </div>
      )}
    </div>
  );
}
