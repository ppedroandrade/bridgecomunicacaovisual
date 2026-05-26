import { MessageCircle, ArrowRight, MapPin, Phone, Clock } from 'lucide-react'
import RevealSection from '@/components/ui/RevealSection'

const WA_LINK = 'https://wa.me/5545991085308'

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function CTAFinal() {
  return (
    <section
      id="contato"
      className="relative bg-navy text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-yellow/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <RevealSection>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
            Orçamento sem compromisso
          </div>
        </RevealSection>

        <RevealSection delay={1}>
          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-[-0.025em] leading-[1.05]">
            Pronto para transformar
            <br />
            sua marca<span className="text-yellow">.</span>
          </h2>
        </RevealSection>

        <RevealSection delay={2}>
          <p className="mt-6 text-white/70 text-lg md:text-xl">
            Entre em contato agora — respondemos no mesmo dia útil pelo WhatsApp.
          </p>
        </RevealSection>

        <RevealSection delay={3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center gap-2 bg-yellow hover:bg-yellow-dark text-navy font-bold text-lg px-8 py-5 rounded-full transition shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bridgecomunicacaovisual/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium px-5 py-3 transition"
            >
              <InstagramIcon />
              @bridgecomunicacaovisual
            </a>
          </div>
        </RevealSection>

        <RevealSection delay={4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow" />
              Foz do Iguaçu • PR
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow" />
              (45) 99108-5308
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow" />
              Seg–Sex • 8h às 18h
            </span>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
