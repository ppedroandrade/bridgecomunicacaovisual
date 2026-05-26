import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bridgecomunicacaovisual.com.br'),
  title: 'Bridge Comunicação Visual — Sua marca ganha vida em Foz do Iguaçu',
  description:
    'Há mais de 12 anos transformando marcas em Foz do Iguaçu com letreiros, plotagem, fachadas, sinalização e branding. Solicite seu orçamento sem compromisso.',
  openGraph: {
    title: 'Bridge Comunicação Visual',
    description: 'Comunicação visual de impacto em Foz do Iguaçu e região.',
    images: ['/og-image.jpg'],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-white text-navy antialiased`}>
        {children}
      </body>
    </html>
  )
}
