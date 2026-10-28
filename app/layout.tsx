import { Metadata } from 'next';
import { Dosis, Averia_Libre, Arvo, Roboto_Flex, Rubik_Wet_Paint } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css';


const description =
  "Purdue University\u2019s flagship hackathon, BoilerMake, is back in January 22-24, 2027. Escape Reality.";

export const metadata: Metadata = {
  metadataBase: new URL("https://boilermake.org"),
  title: "BoilerMake XIV",
  description,
  openGraph: {
    title: "BoilerMake XIV",
    description,
    url: "https://boilermake.org",
    siteName: "BoilerMake",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1366,
        height: 1366,
        alt: "BoilerMake logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BoilerMake XIV",
    description,
    images: ["/images/logo.png"],
  },
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

const spriteGraffiti = localFont({
  src: './fonts/SpriteGraffiti.otf',
  variable: '--font-sprite-graffiti',
  display: 'swap',
})

const codePro = localFont({
  src: './fonts/CodePro-NormalLC.otf',
  variable: '--font-code-pro',
  display: 'swap',
})

const SourceCodePro = localFont({
  src: './fonts/SourceCodePro-Regular.ttf',
  variable: '--font-source-code-pro',
  display: 'swap',
})

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
})

const rubikWetPaint = Rubik_Wet_Paint({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rubik-wet-paint',
  display: 'swap',
})

const owned = localFont({
  src: './fonts/owned.ttf',
  variable: '--font-owned',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dosis.variable} ${averiaLibre.variable} ${arvo.variable} ${disketMono.variable} ${futuraCyrillic.variable} ${spriteGraffiti.variable} ${codePro.variable} ${SourceCodePro.variable} ${robotoFlex.variable} ${rubikWetPaint.variable} ${owned.variable}`}>
      <body>{children}</body>
    </html>
  )
}
