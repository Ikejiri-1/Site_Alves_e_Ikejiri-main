import Link from 'next/link';
import styles from './card.module.css';
import { JSX } from 'react';
import { CardButton } from '../CardButton';
import Image, { StaticImageData } from 'next/image';

interface CardsProps {
  title?: string;
  subtitle?: string;
  content?: string;
  flippedTitle?: string;
  flippedContent?: string;
  className?: string;
  linkText?: string;
  flipped?: boolean;
  href?: string;
  onClick?: () => void;
  icon?: JSX.Element;
  showIcon?: boolean;
  button?: boolean;
  img?: StaticImageData;
}

export const Cards = ({
  title,
  subtitle,
  content,
  flippedTitle,
  flippedContent,
  className,
  flipped,
  href,
  icon,
  showIcon,
  button,
  img,
  onClick,
}: CardsProps) => {
  return (
    <div className={styles.cardWrapper}>
      <article className={` ${styles.card} ${className}`} onClick={onClick}>
        <div className={`${styles.face} ${styles.front}`}>
          {img && <Image src={img} alt="" className={styles.image} />}
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <p className={styles.content}>{content}</p>
          {showIcon && <span className={styles.flipHint}>{icon}</span>}
          {button && (
            <Link href={href ?? '/'} className={styles.btn}>
              Saiba mais →
            </Link>
          )}
        </div>
      </article>
    </div>
  );
};
