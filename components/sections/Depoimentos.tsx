import { Star } from 'lucide-react'
import RevealSection from '@/components/ui/RevealSection'

const testimonials = [
  {
    initials: 'CM',
    name: 'Carla Mendes',
    role: 'Sócia • Mercato Bistrô',
    avatarBg: 'bg-navy',
    avatarText: 'text-yellow',
    body: '"Trocamos toda a fachada e sinalização interna com a Bridge. Prazo cumprido, acabamento impecável e o suporte pós-instalação foi excelente."',
  },
  {
    initials: 'RF',
    name: 'Ricardo Ferraz',
    role: 'Diretor • Iguaçu Express',
    avatarBg: 'bg-yellow',
    avatarText: 'text-navy',
    body: '"Envelopamos 14 veículos da frota. O resultado superou expectativas — virou referência de marca rodando pela cidade."',
  },
  {
    initials: 'LP',
    name: 'Luana Prado',
    role: 'Gerente • Hotel Iguaçu',
    avatarBg: 'bg-navy',
    avatarText: 'text-yellow',
    body: '"Profissionais atentos a cada detalhe. Da reunião à instalação, tudo combinou com a essência da nossa marca."',
  },
]

const partners = [
  'mercato.',
  'iguaçu express',
  'café 1914',
  'viana.',
  'boa compra',
  'hotel iguaçu',
]

const Stars = () => (
  <div className="flex gap-1 text-yellow">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
)

export default function Depoimentos() {
  return (
    <section className="py-24 md:py-32 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <RevealSection>
            <div className="text-xs font-semibold tracking-[0.2em] text-yellow-dark uppercase">
              — Depoimentos
            </div>
          </RevealSection>
          <RevealSection delay={1}>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
              O que nossos
              <br />
              clientes dizem.
            </h2>
          </RevealSection>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <RevealSection key={t.name} delay={i}>
              <figure className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm h-full flex flex-col">
                <Stars />
                <blockquote className="mt-5 text-navy/80 leading-relaxed flex-1">{t.body}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${t.avatarBg} ${t.avatarText} font-bold grid place-items-center text-sm`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-navy/50 text-sm">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </RevealSection>
          ))}
        </div>

        {/* Partner marquee strip */}
        <div className="mt-20 overflow-hidden">
          <div className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-navy/40">
            Marcas que confiam
          </div>
          <div className="mt-6 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="marquee-track text-navy/40">
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={i}
                  className="wordmark text-3xl whitespace-nowrap"
                  aria-hidden={i >= partners.length}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
