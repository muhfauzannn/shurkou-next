import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex flex-col gap-16'>
      <Hero />
      <Features />
    </div>
    </>
  );
}