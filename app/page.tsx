import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Sobre from '@/components/sections/Sobre'
import Servicos from '@/components/sections/Servicos'
import Portfolio from '@/components/sections/Portfolio'
import Depoimentos from '@/components/sections/Depoimentos'
import CTAFinal from '@/components/sections/CTAFinal'
import Footer from '@/components/sections/Footer'
import WhatsAppFloat from '@/components/sections/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
