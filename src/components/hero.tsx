
import HeroImage from '@/components/atomic/heroImage';
import Button from '@/components/atomic/button'
const Hero = () => {
    return (
        <>
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex justify-center h-[80vh] items-center gap-8 max-md:flex-col max-md:mt-8">
                <HeroImage />
                <div className='flex flex-col gap-8 max-md:gap-2 max-md:items-center'>
                    <div>
                        <h1 className='text-[64px] font-[800] leading-none max-md:text-center max-sm:text-[3rem]'>Unlimited Apps,<br/> <span className='text-[#E6B345]'>One Payment</span></h1>
                        <p className='font-nunito max-md:text-center'>Get instant access to 30+ premium apps like Netflix, Prime Video,<br />Disney Hotstar and more with just only one time payment.</p>
                    </div>
                    <div className='flex gap-4'>
                        <Button 
                            title="Get Started"
                            redirectTo="/signup"
                            isPrimary={true}
                        />
                        <Button 
                            title="Demo"
                            redirectTo="/signup"
                            isPrimary={false}
                        />
                        
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
export default Hero;