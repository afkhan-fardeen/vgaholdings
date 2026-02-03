import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatWeDo from '@/components/WhatWeDo'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import News from '@/components/News'
import Clients from '@/components/Clients'
import Leadership from '@/components/Leadership'
import Quote from '@/components/Quote'
import WhyChooseUs from '@/components/WhyChooseUs'
import StealthVideo from '@/components/StealthVideo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'VGA Holdings - Building Trusted Businesses Across Energy, Industry, and Innovation. Established in 2014 in the Kingdom of Bahrain.',
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#d4af37] focus:text-white focus:rounded focus:font-medium"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <WhatWeDo />
        <Portfolio />
        <Services />
        <News />
        <Clients />
        <Leadership />
        <Quote />
        <WhyChooseUs />
        <StealthVideo />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
