import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Services from '@/components/services'

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex flex-col gap-16'>
      <Hero />
      <Features />
      <Services />
    </div>
    </>
  );
}