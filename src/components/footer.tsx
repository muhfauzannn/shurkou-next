import Image from 'next/image'

const Footer = ()=>{
    return(
        <>
        <div className="w-full flex flex-col items-center bg-secondary mt-20">
            <div className="w-11/12 flex justify-evenly text-[#071952] py-10 max-md:flex-col max-md:gap-5">
                <div>
                    <div className='flex items-center'>
                        <Image src="./icon/Logo (2).svg" alt='logo' width={40} height={40}/>
                        <p className='text-2xl font-[800] leading-none'>SHURKOU</p>
                    </div>
                </div>

                <div className='flex flex-col gap-[15px] font-nunito max-md:flex-row'>
                    <p className='font-[700]'>Main</p>
                    <a href='#' className='font-[400]'>Home</a>
                    <a href='#' className='font-[400]'>Pricing</a>
                    <a href='#' className='font-[400]'>Features</a>
                    <a href='#' className='font-[400]'>Join Discord</a>
                </div>

                <div className='flex flex-col gap-[15px] font-nunito max-md:flex-row'>
                    <p className='font-[700]'>Account</p>
                    <a href='#' className='font-[400]'>Dashboard</a>
                    <a href='#' className='font-[400]'>Login</a>
                    <a href='#' className='font-[400]'>Sign Up</a>
                </div>

                <div className='flex flex-col gap-[15px] font-nunito'>
                    <p className='font-[700]'>Contact Us</p>
                    <div className='flex gap-4 items-center'>
                        <a href='#'>
                            <Image src="./icon/instagram-seeklogo.svg" alt='logo' width={20} height={20}/>
                        </a>
                        <a href='#'>
                            <Image src="./icon/discord-color-seeklogo-2.svg" alt='logo' width={20} height={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-center w-screen bg-secondary border-t-[1px] border-[#3059EE]'>
            <p className='text-[#071952] py-2 font-poppins font-[600] text-sm'>Copyright © 2021-2024 SHURKOU. All rights reserved.</p>
        </div>
        
        </>
    )
}
export default Footer