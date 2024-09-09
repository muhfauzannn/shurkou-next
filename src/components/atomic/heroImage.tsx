

import Image from 'next/image';
const HeroImage = () => {
    return(
        <div className='relative -z-10 max-md:scale-[.8]'>
            <Image src="./icon/nologo.svg" alt='logo' width={400} height={500} className='relative'></Image>
            
            <div className='absolute top-[35%] left-[5%] custMove'>
                <Image src="/assets/Netflix-new-icon.png" alt='logo' width={35} height={30} className='rounded-md rotate-[-45deg]'/>
            </div>


            <div className='absolute top-[15%] left-[10%] custMove'>
                <Image src="/assets/unnamed.png" alt='logo' width={35} height={30} className='rounded-md rotate-[-15deg]'/>
            </div>

            <div className='absolute top-[-5%] left-[25%] custMove'>
                <Image src="/assets/idqU3ch8ih.png" alt='logo' width={35} height={30} className='rounded-md rotate-[15deg]'/>
            </div>
            <div className='absolute top-[25%] right-[47%] custMove'>
                <Image src="/assets/1700403373logo-chatgpt-png.png" alt='logo' width={35} height={30} className='rounded-md rotate-[15deg]'/>
            </div>


        </div>
    )
}
export default HeroImage;