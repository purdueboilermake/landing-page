import { Metadata } from 'next';
import { Dosis, Averia_Libre, Arvo } from 'next/font/google'
import './globals.css';


export const metadata: Metadata = {
  title: "BoilerMake XII",
  description: "Purdue University's flagship hackathon, BoilerMake, is back in February 2025. Adventure Awaits.",
};
  
const dosis = Dosis({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-dosis',
})

const averiaLibre = Averia_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-averia-libre',
})

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-arvo',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dosis.variable} ${averiaLibre.variable} ${arvo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
