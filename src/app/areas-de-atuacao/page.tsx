"use client";

import styles from "./areas.module.css";
import { MainImage } from "@/components/MainImage";
import img from "../../assets/wpaper.webp";
import { CTAButton } from "@/components/CTAButton";
import { areaActivity } from '../../db/areaActivityData.json'
export default function AreasDeAtuacao() {
  
  return (
    <>
      <section className={styles.container}>
        {areaActivity.map(area=>(
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
                <CTAButton type="areas" content={area.buttonText} msn={area.msn}/>
              </div>
          </div>
          
        ))}
      </section>
    </>
  );
}
