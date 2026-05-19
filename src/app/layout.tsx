import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Neuton } from 'next/font/google';
import Link from 'next/link';
import { whatsappLink } from '@/utils/linkWpp';
import whatsappIcon from '../assets/whatsapp.png';
import Image from 'next/image';

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Alves & Ikejiri Advogados',
  description:
    'Página de advogados dedicada àqueles que precisam de ajuda em algumas áreas do direito, como tributário, civil etc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phone = '(12) 98113-1591';
  const message =
    'Olá, gostaria de obter mais informações sobre os serviços jurídicos oferecidos por vocês. Poderiam me ajudar?';
  return (
    <div className="globalWrapper">
      <Header />
      <html lang="pt-br">
        <body className={`${neuton.className} mainContentHtml`}>
          {children}
        </body>
      </html>
      <Link href={whatsappLink(phone, message)} className="fixedWhatsappButton">
        <Image
          src={whatsappIcon}
          alt="Ícone do WhatsApp"
          width={50}
          height={50}
        />
      </Link>

      <Footer />
    </div>
  );
}
