import { MainImage } from "@/components/MainImage";
import img from "../assets/wpaper.webp";
import { OfficeSum } from "@/components/OfficeSum";
import styles from "./page.module.css";
import { Areas } from "@/components/Areas";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTAButton } from "@/components/CTAButton";


export default function Home() {
  return (
    <>
      <section>
        <MainImage img={img} alt="" title="Defesa estratégica e Consultoria jurídica de alta performance para seus bens e negócios" 
        description="Soluções ágeis e atendimento 100% digital para clientes em todo Brasil" CTA={true} />
      </section>
      <section className={styles.objectivesSection}>
        <OfficeSum />
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
