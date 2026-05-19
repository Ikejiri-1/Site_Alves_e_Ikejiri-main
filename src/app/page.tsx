import { OfficeSum } from '@/components/OfficeSum';
import styles from './page.module.css';
import { Areas } from '@/components/Areas';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { CTAButton } from '@/components/CTAButton';
import { MainImage } from '@/components/MainImage';
import img from '../assets/alves&ikejiri.jpeg';

export default async function Home() {
  return (
    <>
      <section>
        <MainImage
          img={img}
          alt=""
          title="Defesa estratégica e consultoria jurídica de alta performance para seus bens e negócios"
          description="Soluções ágeis e atendimento 100% digital para clientes em todo Brasil"
          CTA={true}
        />
        {/* <div className={styles.topDiv}>
          <div className={styles.glass}>
            <h1>
              Defesa estratégica e consultoria jurídica de alta performance para
              seus bens e negócios
            </h1>
            <h2>
              Soluções ágeis e atendimento 100% digital para clientes em todo
              Brasil
            </h2>
          </div>
        </div> */}
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
        <h5>Entre em contato pelo Whatsapp e converse com um advogado!</h5>
        <div>
          <CTAButton content="Falar com Advogado" type="default" msn="" />
        </div>
      </div>
    </>
  );
}
