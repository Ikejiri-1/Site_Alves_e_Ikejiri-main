import { MainImage } from '@/components/MainImage'
import img from '../../assets/wpaper.webp'
import styles from './contato.module.css'
import { CTAButton } from '@/components/CTAButton'

const contacts = [
    {
        id:1,
        type: "Whatsapp",
        value: "(12) 98113-1591",
        button: "contactWPP",
        buttonText: "Falar pelo Whatsapp",
    },
    {
        id:2,
        type: "E-mail -- Caio Ikejiri",
        value: "caio.ikejiri@adv.oabsp.org.br",
        button: "contactEmailIkejiri",
        buttonText: "Email para Caio Ikejiri"
    },
    {
        id:3,
        type: "E-mail -- Caio Alves de Faria",
        value: "caioalves@adv.oabsp.org.br",
        button: "contactEmailFaria",
        buttonText: "Email para Caio Alves"
    },
]

export default function Contato(){
    return(
        <>
        <MainImage img={img} alt="" title='Contatos' description='Atendemos de forma totalmente online, para clientes em todo o Brasil. Para iniciar o atendimento, entre em contato pelo Whatsapp ou pelo e-mail.' CTA={true}/>
        <section>
            <h1 className={styles.title}>Canais de contato</h1>
            <div className={styles.contactCardsContainer}>
                {contacts.map((contact) => (
                    <div key={contact.id} className={styles.contactCard}>
                        <div>
                        <h2 className={styles.contactType}>{contact.type}</h2>
                        <h3 className={styles.contactValue}>{contact.value}</h3>
                        </div>
                        <div className={styles.buttonDiv}>
                            <CTAButton content={contact.buttonText} msn="" type ={contact.button}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}