"use client";

import styles from "./areas.module.css";
import { MainImage } from "@/components/MainImage";
import img from "../../assets/wpaper.webp";
import { CTAButton } from "@/components/CTAButton";

export default function AreasDeAtuacao() {
  
  const areas = [
    {
      id:1,
      area:"Tributário",
      summary:"Defesa de contribuintes -- pessoas físicas e jurídicas -- em todas as fases do contencioso tributário",
      servicesList:[
        {
          id:1,
          service:"Defesa em Execução Fiscal (Federal, Estadual, Municipal)"
        },
        {
          id:2,
          service:"Impugnação de inscrição em Dívida Ativa (CDA)"
        },
        {
          id:3,
          service:"Negociação e acompanhamento de Transação Tributária (PGFN e Receita Federal)"
        },
        {
          id:4,
          service:"Parcelamento de débitos fiscais"
        },
        {
          id:5,
          service:"Prescrição intercorrente e extinção de execuções fiscais"
        },
        {
          id:6,
          service:"Desbloqueio de contas via SISBAJUD"
        },
      ],
      button: <CTAButton type="areas" content="Falar pelo Whatsapp sobre Tributário" msn=""/>
    },
    {
      id:2,
      area:"Família e Sucessões",
      summary:"Assessoria jurídica em questões que envolvem relações familiares e trasmissão de patrimônio",
      servicesList:[
        {
          id:1,
          service:"Divórcio consensual e litigioso"
        },
        {
          id:2,
          service:"Guarda de filhos"
        },
        {
          id:3,
          service:"Revisão e fixação de alimentos"
        },
        {
          id:4,
          service:"Inventário judicial e extrajudicial"
        },
        {
          id:5,
          service:"União estável"
        },
        {
          id:6,
          service:"Planejamento sucessório"
        },
      ],
      button: <CTAButton type="areas" content="Falar pelo Whatsapp sobre Família e Sucessões" msn=""/>
    },
    {
      id:3,
      area:"Imobiliário",
      summary:"Orientação jurídica em negócios e conflitos relacionados a imóveis",
      servicesList:[
        {
          id:1,
          service:"Análise e elaboração de contratos de compra e venda"
        },
        {
          id:2,
          service:"Contratos de locação"
        },
        {
          id:3,
          service:"Regularização de imóveis"
        },
        {
          id:4,
          service:"Usucapião"
        },
        {
          id:5,
          service:"Assessoria em financiamentos imobiliários"
        },
      ],
      button: <CTAButton type="areas" content="Falar pelo Whatsapp sobre Imobiliário" msn=""/>
    },
    {
      id:4,
      area:"Previdenciário",
      summary:"Assessoria e segurados do INSS na obtenção de revisão de benefícios previdenciários",
      servicesList:[
        {
          id:1,
          service:"Aposentadoria por tempo de contribuição, idade e especial"
        },
        {
          id:2,
          service:"Auxílio por incapacidade temporária e permanente"
        },
        {
          id:3,
          service:"Benefício de Prestação Continuada (BPC/LOAS)"
        },
        {
          id:4,
          service:"Revisão de benefícios"
        },
        {
          id:5,
          service:"Recursos administrativos e ações judiciais"
        },
      ],
      button: <CTAButton type="areas" content="Falar pelo Whatsapp sobre Imobiliário" msn=""/>
    },
    {
      id:5,
      area:"Civil",
      summary:"Atuação em questões cíveis que envolvem pessoas físicas e jurídicas",
      servicesList:[
        {
          id:1,
          service:"Elaboração e revisão de contratos"
        },
        {
          id:2,
          service:"Ações de cobrança"
        },
        {
          id:3,
          service:"Responsabilidade civil"
        },
        {
          id:4,
          service:"Resolução de conflitos contratuais"
        },
      ],
      button: <CTAButton type="areas" content="Falar pelo Whatsapp sobre Civil" msn=""/>
    },
  ]

  return (
    <>
      <section className={styles.container}>
        <MainImage
          img={img}
          alt=""
          title="Áreas de Atuação"
          description=""
        ></MainImage>
      </section>
      <section className={styles.container}>
        {areas.map(area=>(
          <div key={area.id} className={styles.areaSummary}>
            <div className={styles.areaHead}>
            <h1>{area.area}</h1>
            <h2>{area.summary}</h2>
            </div>
            <div>
              <h3>Serviços:</h3>
                <ul className={styles.listSummary}>
                {area.servicesList.map(s=>(
                
                  <li key={s.id}>{s.service}</li>
                  ))}
                </ul> 
                
            </div>
              <div className={styles.buttonDiv}>
                <button >
                  {area.button}
                </button>
              </div>
          </div>
          
        ))}
      </section>
    </>
  );
}
