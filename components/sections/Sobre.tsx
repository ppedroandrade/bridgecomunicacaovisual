import { Award, Users, Layers } from 'lucide-react'
import RevealSection from '@/components/ui/RevealSection'

const cards = [
  {
    icon: Award,
    title: '12+ anos de experiência',
    body: 'Bagagem técnica e portfólio sólido em projetos de pequeno e grande porte.',
  },
  {
    icon: Users,
    title: '200+ clientes atendidos',
    body: 'Do comércio local às grandes redes — cada projeto recebe a mesma atenção.',
  },
  {
    icon: Layers,
    title: 'Soluções completas',
    body: 'Projeto, produção e instalação no mesmo lugar — você fala com um único time.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <RevealSection>
              <div className="text-xs font-semibold tracking-[0.2em] text-yellow-dark uppercase">
                — Quem somos
              </div>
            </RevealSection>
            <RevealSection delay={1}>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
                Comunicação visual
                <br />
                feita por quem
                <br />
                vive de marcas.
              </h2>
            </RevealSection>
          </div>

          <div className="md:col-span-7 md:pt-3">
            <RevealSection delay={1}>
              <p className="text-navy/70 text-lg leading-relaxed">
                Somos uma equipe apaixonada por traduzir marcas em experiências visuais. Em mais de
                uma década atendendo Foz do Iguaçu e a tríplice fronteira, construímos uma operação
                completa — do projeto à instalação — com foco em qualidade, criatividade e prazo.
              </p>
            </RevealSection>
            <RevealSection delay={2}>
              <p className="mt-4 text-navy/60 text-base leading-relaxed">
                Letreiros, fachadas, plotagem, sinalização e identidade visual: tudo o que sua marca
                precisa para ocupar o espaço físico com presença.
              </p>
            </RevealSection>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <RevealSection key={card.title} delay={i}>
              <div className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-yellow rounded-2xl p-7 transition shadow-sm hover:shadow-card h-full">
                <div className="w-11 h-11 rounded-xl bg-navy text-yellow flex items-center justify-center">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{card.title}</h3>
                <p className="mt-2 text-navy/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
