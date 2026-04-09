"use client";
import { Cards } from "../Cards";
import styles from "./areas.module.css";

const areas = [
  {
    id: 1,
    tabs: "TRIBUTÁRIO",
    content: "Execução fiscal - Dívida Ativa - Parcelamentos",
    button: true
  },
  {
    id: 2,
    tabs: "CIVIL",
    content: "Contratos - Cobrança - Responsabilidade civil",
    button: true
  },
  {
    id: 3,
    tabs: "FAMÍLIA E SUCESSÕES",
    content: "Divórcio - Guarda - Alimentos - Inventário",
    button: true
  },
  {
    id: 4,
    tabs: "PREVIDENCIÁRIO",
    content: "INSS - Aposentadoria - BPC/LOAS",
    button: true
  },
  {
    id: 5,
    tabs: "IMOBILIÁRIO",
    content: "Contratos - Regularização - Locação",
    button: true
  },
];
export const Areas = () => {

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Áreas de Atuação</h1>
      <div className={styles.cardContainer}>
        {areas.map((areas,index)=>(
          <Cards
          key={index}
          title={areas.tabs}
          content={areas.content}
          className={styles.cards}
          button={areas.button}
          />
        ))}
        </div>
    </section>
  );
};
