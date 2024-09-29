import Image from 'next/image'
import HeroImage from '@/components/atomic/heroImage';
import Input from '@/components/atomic/input';

export default function Signup(){
    return (
        <div className="flex h-screen">
            <div className="w-[50%] flex justify-center items-center max-md:hidden">
                <HeroImage />
            </div>

            <div className="w-[50%] max-md:w-full bg-white flex justify-center">
                <div className='w-10/12 h-screen flex flex-col justify-between text-[#071952] py-11'>

                    <div className='flex flex-col gap-[48px]'>
                        <a href='/'>
                            <div className='flex items-center'>
                                <Image src="./icon/Logo (2).svg" alt='logo' width={30} height={30}/>
                                <p className='text-xl font-[800] leading-none'>SHURKOU</p>
                            </div>
                        </a>

                        <div className='font-poppins flex flex-col gap-[24px]'>
                            <h1 className='text-[20px] font-[600]'>Welcome Back!</h1>
                            <div>
                                <form className='flex flex-col gap-[32px]'>
                                    <div className='flex flex-col gap-[16px]'>
                                        {/* Email */}
                                        <Input 
                                            label='Email'
                                            type='email'
                                            id='email'
                                            placeholder='fznganteng@example.com'
                                            logo = '/icon/envelope.svg'
                                        />
                                        {/* End Email */}
                                        {/* Password */}
                                        <Input 
                                            label='Password'
                                            type='password'
                                            id='number'
                                            placeholder='Enter your password'
                                            logo = ''
                                        />
                                        {/* End Password */}
                                    </div>

                                    <button type='submit' className='cursor-pointer'>
                                        <div className='py-[10px] px-[24px] w-full bg-primary flex justify-center items-center text-white rounded-[6px]'>
                                            Login
                                        </div>
                                    </button>


                                    <div className='w-full h-[1px] bg-[#E5E5E5]'>

                                    </div>

                                    <p className='text-[12px] font-[400] font-poppins text-[#1A1A1A] text-center'>Don't have an account? <a href="/signup" className='text-[#3059EE] font-[600]'>Sign Up</a></p>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='text-[#666] text-[12px]'>
                        Copyright © 2024 by SHURKOU. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}