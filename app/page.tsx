import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Security from '@/components/sections/Security'
import Stats from '@/components/sections/Stats'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

