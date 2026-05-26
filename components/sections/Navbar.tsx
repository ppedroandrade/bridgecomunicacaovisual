'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'

const WA_LINK = 'https://wa.me/5545991085308'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300${scrolled ? ' shadow-sm' : ''}`}
    >
      <div className="backdrop-blur-[10px] [backdrop-filter:saturate(160%)_blur(10px)] bg-white/85 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center">
            <span className="wordmark text-navy text-[28px] md:text-[32px]">
              bridge<span className="text-yellow">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium text-navy/80">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-navy transition">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-yellow hover:bg-yellow-dark text-navy font-semibold text-sm px-5 py-2.5 rounded-full transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar orçamento
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 text-navy"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-5 py-4 flex flex-col gap-1 text-navy">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-yellow text-navy font-semibold text-sm px-5 py-3 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
