import { ArrowUpRight, Store } from 'lucide-react'
import RevealSection from '@/components/ui/RevealSection'

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <RevealSection>
              <div className="text-xs font-semibold tracking-[0.2em] text-yellow-dark uppercase">
                — Portfólio
              </div>
            </RevealSection>
            <RevealSection delay={1}>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05]">
                Nossos trabalhos.
              </h2>
            </RevealSection>
          </div>
          <RevealSection delay={2}>
            <a
              href="https://www.instagram.com/bridgecomunicacaovisual/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center gap-2 text-navy font-semibold hover:text-yellow-dark transition"
            >
              <InstagramIcon />
              Ver mais no Instagram
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </RevealSection>
        </div>

        {/* Masonry grid — replicates the HTML layout */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-6 auto-rows-[180px] md:auto-rows-[220px] gap-4">

          {/* 01 — Large: Mercato Bistrô (col-span-3, row-span-2) */}
          <div className="pf col-span-2 md:col-span-3 row-span-2 rounded-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="wordmark text-yellow text-7xl md:text-9xl">
                  m<span className="text-yellow">.</span>
                </div>
                <div className="mt-2 text-white/60 text-xs tracking-[0.3em] uppercase">
                  Letreiro ACM • LED
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-yellow/20 blur-2xl" />
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-white/60 text-xs">01 — Letreiro</div>
              <div className="font-bold text-lg text-white">Mercato Bistrô</div>
            </div>
          </div>

          {/* 02 — Frota Iguaçu Express (col-span-3) */}
          <div
            className="pf col-span-2 md:col-span-3 rounded-2xl"
            style={{ background: 'linear-gradient(135deg,#243660,#1B2A4A)' }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 220"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g fill="none" stroke="#F5C842" strokeWidth="2" opacity=".5">
                <path d="M-20 180 Q 150 60 320 140 T 640 80" />
                <path d="M-20 200 Q 150 100 320 170 T 640 120" opacity=".4" />
              </g>
              <circle cx="500" cy="60" r="40" fill="#F5C842" />
            </svg>
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-white/60 text-xs">02 — Plotagem</div>
              <div className="font-bold text-lg text-white">Frota Iguaçu Express</div>
            </div>
          </div>

          {/* 03 — Loja Cataratas (col-span-2) */}
          <div
            className="pf col-span-1 md:col-span-2 rounded-2xl"
            style={{ background: '#F5C842' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Store className="w-16 h-16 text-navy" />
            </div>
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-navy/60 text-xs">03 — Fachada</div>
              <div className="font-bold text-lg text-navy">Loja Cataratas</div>
            </div>
          </div>

          {/* 04 — Hotel Iguaçu (col-span-1) */}
          <div
            className="pf col-span-1 md:col-span-1 rounded-2xl"
            style={{ background: '#131F38' }}
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-yellow text-4xl font-extrabold tracking-tighter">+24h</div>
            </div>
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-white/60 text-xs">04 — Sinalização</div>
              <div className="font-bold text-sm text-white">Hotel Iguaçu</div>
            </div>
          </div>

          {/* 05 — Construtora Viana (col-span-2) */}
          <div
            className="pf col-span-2 md:col-span-2 rounded-2xl"
            style={{ background: 'linear-gradient(180deg,#1B2A4A,#243660)' }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect x="40" y="60" width="320" height="100" rx="14" fill="none" stroke="#F5C842" strokeWidth="3" />
              <text
                x="200"
                y="125"
                textAnchor="middle"
                fill="#F5C842"
                fontFamily="var(--font-jakarta), sans-serif"
                fontWeight="800"
                fontSize="44"
                letterSpacing="-1"
              >
                VIANA
              </text>
            </svg>
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-white/60 text-xs">05 — Banner</div>
              <div className="font-bold text-lg text-white">Construtora Viana</div>
            </div>
          </div>

          {/* 06 — Café 1914 (col-span-3) */}
          <div
            className="pf col-span-2 md:col-span-3 rounded-2xl"
            style={{ background: '#F5C842' }}
          >
            <div className="absolute inset-0 flex items-center px-8">
              <div className="wordmark text-navy text-5xl md:text-6xl leading-none">café.</div>
            </div>
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-navy/60 text-xs">06 — Branding</div>
              <div className="font-bold text-lg text-navy">Café 1914</div>
            </div>
          </div>

          {/* 07 — Rede Boa Compra (col-span-3) */}
          <div className="pf col-span-2 md:col-span-3 rounded-2xl">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 220"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g fill="#F5C842">
                <rect x="40" y="40" width="20" height="140" rx="3" />
                <rect x="80" y="80" width="20" height="100" rx="3" />
                <rect x="120" y="20" width="20" height="160" rx="3" />
                <rect x="160" y="60" width="20" height="120" rx="3" />
              </g>
              <text
                x="380"
                y="120"
                fill="#fff"
                fontFamily="var(--font-jakarta), sans-serif"
                fontWeight="800"
                fontSize="32"
              >
                + vendas
              </text>
              <text
                x="380"
                y="150"
                fill="rgba(255,255,255,0.5)"
                fontFamily="var(--font-jakarta), sans-serif"
                fontWeight="600"
                fontSize="14"
              >
                PDV Supermercado
              </text>
            </svg>
            <div className="absolute left-4 bottom-4 z-10">
              <div className="text-white/60 text-xs">07 — Sinalização</div>
              <div className="font-bold text-lg text-white">Rede Boa Compra</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
