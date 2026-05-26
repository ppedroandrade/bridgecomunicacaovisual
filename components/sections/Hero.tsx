import { ArrowRight, MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/5545991085308'

const stats = [
  { value: '12+', label: 'anos de mercado' },
  { value: '200+', label: 'clientes atendidos' },
  { value: '1.500+', label: 'projetos entregues' },
  { value: '100%', label: 'feito em Foz' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-navy text-white overflow-hidden pt-28 md:pt-32 pb-20 md:pb-32"
    >
      {/* Decorative grid + glow */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-yellow/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-[10%] w-3 h-3 rounded-full bg-yellow animate-floaty hidden md:block" />
      <div
        className="absolute top-[68%] right-[28%] w-2 h-2 rounded-full bg-yellow/60 animate-floaty hidden md:block"
        style={{ animationDelay: '-2s' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-8 items-center">
        {/* Copy */}
        <div className="md:col-span-7">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
            Foz do Iguaçu • PR
          </div>

          <h1
            className="animate-fade-in-up mt-6 text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] lg:text-[72px] font-extrabold tracking-[-0.025em]"
            style={{ animationDelay: '0.08s' }}
          >
            Sua marca ganha vida
            <br />
            com comunicação visual
            <br />
            de{' '}
            <span className="relative inline-block">
              impacto
              <span className="absolute -right-3 -bottom-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow" />
            </span>
          </h1>

          <p
            className="animate-fade-in-up mt-6 text-white/70 text-lg md:text-xl max-w-xl leading-relaxed"
            style={{ animationDelay: '0.16s' }}
          >
            Há mais de 12 anos conectando pessoas e marcas com soluções visuais inovadoras em Foz
            do Iguaçu e região.
          </p>

          <div
            className="animate-fade-in-up mt-9 flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: '0.24s' }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-yellow hover:bg-yellow-dark text-navy font-semibold px-7 py-4 rounded-full transition"
            >
              Ver portfólio
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-7 py-4 rounded-full border border-white/25 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </a>
          </div>

          <div
            className="animate-fade-in-up mt-12 flex items-center gap-6 text-sm text-white/60"
            style={{ animationDelay: '0.32s' }}
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow border-2 border-navy" />
              <div className="w-8 h-8 rounded-full bg-yellow/70 border-2 border-navy" />
              <div className="w-8 h-8 rounded-full bg-white/80 border-2 border-navy" />
            </div>
            <span>
              <strong className="text-white font-semibold">200+ marcas</strong> já confiaram
            </span>
          </div>
        </div>

        {/* Hero visual */}
        <div
          className="md:col-span-5 animate-fade-in-up"
          style={{ animationDelay: '0.24s' }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full border border-white/15" />
            <div className="absolute inset-8 rounded-full border border-white/10" />

            {/* Floating card 1 */}
            <div className="absolute top-4 left-2 w-44 md:w-52 -rotate-6 bg-white text-navy rounded-2xl p-4 shadow-cardHover">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-navy/50">
                Letreiro ACM
              </div>
              <div className="mt-2 h-20 rounded-lg bg-navy flex items-end p-2">
                <span className="wordmark text-white text-xl">
                  studio<span className="text-yellow">.</span>
                </span>
              </div>
              <div className="mt-2 text-xs text-navy/60">Entregue • Cataratas Plaza</div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute bottom-6 right-0 w-48 md:w-56 rotate-[5deg] bg-yellow text-navy rounded-2xl p-4 shadow-cardHover">
              <div className="text-[10px] font-semibold tracking-widest uppercase flex items-center gap-1">
                ⚡ LED + Acrílico
              </div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight leading-tight">
                +12 anos
                <br />
                iluminando
                <br />
                marcas.
              </div>
            </div>

            {/* Centre monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="wordmark text-white/95 text-[88px] md:text-[112px]">
                b<span className="text-yellow">.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.08 * (i + 1)}s` }}
            >
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
