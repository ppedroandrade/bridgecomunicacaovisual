import { Phone, MapPin, MessageCircle } from 'lucide-react'

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

const navLinks = [
  { href: '#top', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-12 gap-10">
        {/* Brand column */}
        <div className="md:col-span-5">
          <span className="wordmark text-white text-4xl">
            bridge<span className="text-yellow">.</span>
          </span>
          <p className="mt-5 max-w-sm text-white/60 leading-relaxed">
            Comunicação visual para marcas que querem ser vistas — e lembradas. Atendemos Foz do
            Iguaçu e toda a região da tríplice fronteira.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/bridgecomunicacaovisual/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-yellow hover:text-navy grid place-items-center transition text-white/70"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/5545991085308"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-yellow hover:text-navy grid place-items-center transition text-white/70"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <div className="text-white text-sm font-semibold uppercase tracking-[0.2em]">
            Navegação
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-yellow transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <div className="text-white text-sm font-semibold uppercase tracking-[0.2em]">
            Contato
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-yellow shrink-0" />
              (45) 99108-5308
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-yellow shrink-0">
                <InstagramIcon />
              </span>
              @bridgecomunicacaovisual
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-yellow shrink-0" />
              Foz do Iguaçu — PR
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© 2025 Bridge Comunicação Visual. Todos os direitos reservados.</div>
          <div>CNPJ • Foz do Iguaçu • PR</div>
        </div>
      </div>
    </footer>
  )
}
