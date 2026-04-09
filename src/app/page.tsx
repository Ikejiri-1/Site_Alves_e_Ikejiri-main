import { MainImage } from "@/components/MainImage";
import img from "../assets/wpaper.webp";
import { OfficeSum } from "@/components/OfficeSum";
import styles from "./page.module.css";
import { Areas } from "@/components/Areas";
import { Cards } from "@/components/Cards";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTAButton } from "@/components/CTAButton";

const cardData = [
  {
    id: 1,
    title: "Consultoria Jurídica Especializada",
    content:
      " Oferecemos orientação jurídica especializada e totalmente personalizada para cada um de nossos clientes com o objetivo de assegurar a melhor tomada de decisão em cada cenário.",
  },
  {
    id: 2,
    title: "Atuação Extrajudicial e Administrativa",
    content:
      "Lidamos com soluções e procedimentos extrajudiciais e administrativos, desde a solução de conflitos a requerimentos em órgãos públicos.",
  },
  {
    id: 3,
    title: "Atuação no Contencioso",
    content:
      "Atuamos na resolução de disputas em processos judiciais de pessoas dísicas e jurídicas, defendendo seus interesses como autor, réu ou terceiro interessado, sempre em busca do melhor resultado.",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <MainImage img={img} alt="" title="Assessoria jurídica especializada para pessoas físicas e empresas em todo o Brasil." 
        description="Atendimento online. Tributário - Família - Imobiliário - Previdenciário - Civil" CTA={true} />
      </section>
      <section className={styles.objectivesSection}>
        <OfficeSum />
      </section>
      <section className={styles.cardsSection}>
        {cardData.map((c) => {
          return <Cards key={c.id} title={c.title} content={c.content}></Cards>;
        })}
      </section>
      <section>
        <Areas />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <div className={styles.CTA}>
        <h4>Tem uma dúvida jurídica ou precisa de orientação?</h4>
        <h5>Entre em contato pelo Whatsapp e nos conte a sua situação!</h5>
      <div>
        <CTAButton content="Falar pelo Whatsapp" type="default" msn=""/>
      </div>
      </div>
    </>
  );
}
