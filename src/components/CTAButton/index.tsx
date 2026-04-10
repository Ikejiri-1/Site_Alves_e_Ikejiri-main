import Link from 'next/link';
import styles from './CTA.module.css'
import { whatsappLink } from '@/utils/linkWpp';

interface CTAProps{
    content: string,
    type?: string,
    msn:string
}

export const CTAButton=({content, type, msn} : CTAProps)=>{
    const phone = "12981131591";
    const message = msn

    return(
        <>
            {type == "default" && 
                <Link href={whatsappLink(phone,message)} className={`${styles.CTAbtn} ${styles.CTA}`}>
                    {content}
                </Link>
            }
            {type == "areas" &&
                <Link href={whatsappLink(phone,message)} className={`${styles.CTAArea} ${styles.CTA}`}>{content}</Link>
            }
        </>
    )
}