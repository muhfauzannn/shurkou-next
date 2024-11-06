import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import Services from '@/components/sections/services'
import Plan from '@/components/sections/plan'
import Faq from '@/components/sections/faq'
import Cta from '@/components/sections/cta'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex flex-col gap-16 mb-20'>
      <Hero />
      <Features />
      <Services />
      <Plan />
      <Faq />
      <Cta />
    </div>
    <Footer />
    </>
  );
}