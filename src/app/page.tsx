import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Services from '@/components/services'
import Plan from '@/components/plan'
import Faq from '@/components/faq'
import Cta from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex flex-col gap-16'>
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