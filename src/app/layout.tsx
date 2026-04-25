import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coopstar Express | Logística e Moto Frete em São Paulo',
  description: 'A Coopstar Express oferece soluções rápidas e seguras de logística, moto frete e entregas corporativas em Moema e toda São Paulo. Agilidade e confiança para sua empresa.',
  keywords: 'moto frete, logística, entregas rápidas, moema, são paulo, delivery corporativo, coopstar express',
  openGraph: {
    title: 'Coopstar Express | Logística Inteligente',
    description: 'Entregas rápidas e seguras para sua empresa em Moema e SP.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
