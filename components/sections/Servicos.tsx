import { SquareStack, Car, Store, Image, Signpost, Palette } from 'lucide-react'
import RevealSection from '@/components/ui/RevealSection'

const services = [
  {
    icon: SquareStack,
    title: 'Letreiros',
    body: 'Comunicação visual em ACM, inox, acrílico e LED. Acabamento premium e durabilidade.',
  },
  {
    icon: Car,
    title: 'Plotagem',
    body: 'Envelopamento de veículos, fachadas e vitrines com vinis de alta performance.',
  },
  {
    icon: Store,
    title: 'Fachadas',
    body: 'Identificação visual completa para lojas, escritórios e estabelecimentos comerciais.',
  },
  {
    icon: Image,
    title: 'Banners e placas',
    body: 'Impressão digital em grande formato — lonas, adesivos e materiais para eventos.',
  },
  {
    icon: Signpost,
    title: 'Sinalização interna',
    body: 'Placas, totens e identificação de ambientes para circulação clara e padronizada.',
  },
  {
    icon: Palette,
    title: 'Branding',
    body: 'Criação e padronização de identidade visual — manual, logo e aplicações.',
  },
]

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="py-24 md:py-32 bg-slate-50/60 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <RevealSection>
            <div className="text-xs font-semibold tracking-[0.2em] text-yellow-dark uppercase">
              — O que fazemos
            </div>
          </RevealSection>
          <RevealSection delay={1}>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
              Tudo o que sua marca
              <br />
              precisa para aparecer.
            </h2>
          </RevealSection>
          <RevealSection delay={2}>
            <p className="mt-5 text-navy/60 text-lg">
              Da fachada à sinalização interna — soluções pensadas para destacar negócios e espaços.
            </p>
          </RevealSection>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <RevealSection key={service.title} delay={(i % 3) + 1}>
              <article className="group bg-white border border-slate-200 rounded-2xl p-7 transition-all duration-200 hover:-translate-y-1 hover:border-yellow hover:shadow-[0_24px_40px_-18px_rgba(27,42,74,.22)] h-full">
                <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center transition-colors duration-200 group-hover:bg-yellow group-hover:text-navy">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-navy/60 text-sm leading-relaxed">{service.body}</p>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
