import { Metadata, Viewport } from 'next';
import { Dosis, Averia_Libre, Arvo } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css';


export const metadata: Metadata = {
  title: "BoilerMake XIII",
  description: "Purdue University's flagship hackathon, BoilerMake, is back in January 2026. Escape Reality.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover', // Helps with iPad notch/status bar areas
}
  
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

const disketMono = localFont({
  src: './fonts/Disket-Mono-Bold.ttf',
  variable: '--font-disket-mono',
  display: 'swap',
})

const futuraCyrillic = localFont({
  src: './fonts/FuturaCyrillicMedium.ttf',
  variable: '--font-futura-cyrillic',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dosis.variable} ${averiaLibre.variable} ${arvo.variable} ${disketMono.variable} ${futuraCyrillic.variable}`}>
      <body>{children}</body>
    </html>
  )
}
