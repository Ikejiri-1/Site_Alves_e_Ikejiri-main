import Link from 'next/link';
import styles from './CTA.module.css'
import { whatsappLink } from '@/utils/linkWpp';
import { emailLink } from '@/utils/linkEmail';

interface CTAProps{
    content: string,
    type?: string,
    msn:string
}

export const CTAButton=({content, type, msn} : CTAProps)=>{
    const phone = "12981131591";
    const message = msn

    const emailIkejiri = "caio.ikejiri@adv.oabsp.org.br"
    const subjectIkejiri = "Preciso de atendimento jurídico (Tributário -- Previdenciário)"
    const bodyIkejiri = "Olá, gostaria de solicitar um atendimento jurídico. Por favor, me informe os próximos passos para iniciar o processo. Obrigado!"
    
    const emailFaria = "caioalves@adv.oabsp.org.br"
    const subjectFaria = "Preciso de atendimento jurídico (Família e Sucessões -- Imobiliário -- Civil"
    const bodyFaria = "Olá, gostaria de solicitar um atendimento jurídico. Por favor, me informe os próximos passos para iniciar o processo. Obrigado!"

    const getLinkData = () =>{
        switch(type){
            case "default":
                return {href: whatsappLink(phone, message), className: `${styles.CTAbtn} ${styles.CTA}`};
            case "areas":
                return {href: whatsappLink(phone, message), className: `${styles.CTAArea} ${styles.CTA}`};
            case "contactWPP":
                return {href: whatsappLink(phone, message), className: `${styles.CTAContact}`};
            case "contactEmailIkejiri":
                return {href: emailLink(emailIkejiri, subjectIkejiri, bodyIkejiri), className: `${styles.CTAContact}`};
            case "contactEmailFaria":
                return {href: emailLink(emailFaria, subjectFaria, bodyFaria), className: `${styles.CTAContact}`};
            default:
                return {href: '#', className: styles.CTA};
        }
    }

    const {href, className} = getLinkData();
    const isExternal = href.startsWith("mailto:") || href.startsWith("https://wa.me");

    return(
        <>
          <Link href = {href} className={className} target={isExternal ? "_blank" : "_self"}>{content}</Link>
        </>
    )
}