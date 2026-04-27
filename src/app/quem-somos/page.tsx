import { MainImage } from "@/components/MainImage";
import img from '../../assets/wpaper.webp'
import Image from "next/image";
import styles from './page.module.css'
import { CTAButton } from "@/components/CTAButton";
import { lawyerCard } from '../../db/lawyerData.json'


export default function QuemSomos(){
    return(
        <>        
        <section className={styles.section}>
            <div className={styles.institutionalContainer}>
                <figure>
                    <Image src={img} alt="" className={styles.image}/>
                </figure>
                <div className={styles.institutionalText}>
                    <p>
                        O escritório Alves & Ikejiri é fruto da parceria entre dois advogados com formações complementares,
                        unidos pelo objetivo de oferecer assessoria jurídica de qualidade, com atendimento próximo e personalizado.
                         Ambos são formados pela Universidade de Taubaté (Unitau) e atuam com dedicação às suas respectivas
                          especialidades, buscando sempre o melhor resultado possível para cada cliente.
                    </p>
                </div>
            </div>
            <div className={styles.lawyersCardsContainer}>
                {lawyerCard.map(card =>(
                    <div key={card.id} className={styles.card}>
                        <div className={styles.cardHead}>
                        <h1>{card.name}</h1>
                        <p>{card.OAB}</p>
                        </div>
                        <div className={styles.cardBody}>
                            {card.description}
                        </div>
                        <figure className={styles.cardPhoto}>{card.photo}</figure>
                    </div>
                ))}
            </div>
            <div className={styles.btn}>
                <CTAButton content="Falar pelo Whatsapp" type="default" msn=""/>
            </div>
        </section>
        </>
    )
}