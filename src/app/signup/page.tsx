'use client'
import Image from 'next/image'
import HeroImage from '@/components/atomic/heroImage';
import Input from '@/components/atomic/input';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Signup(){
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isLengthValid, setLengthPassword] = useState(false);
    const [isContainNumber, setContainNumber] = useState(false);

    const handleValidPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;

        // Mengecek panjang password minimal 12 karakter
        const isLengthValid = password.length >= 12;
        setLengthPassword(isLengthValid);
    
        // Mengecek apakah password mengandung angka
        const isContainNumber = /\d/.test(password);
        setContainNumber(isContainNumber);
    
        // Password dianggap valid jika memenuhi kedua kriteria di atas
        setIsValidPassword(isLengthValid && isContainNumber);
    };
    

    return (
        <div className="flex h-screen">
            <div className="w-[50%] flex justify-center items-center max-md:hidden">
                <HeroImage />
            </div>

            <div className="w-[50%] max-md:w-full bg-white flex justify-center">
                <div className='w-10/12 h-screen flex flex-col justify-between text-[#071952] py-11'>

                    <div className='flex flex-col gap-[48px]'>
                        <Link href='/'>
                            <div className='flex items-center'>
                                <Image src="./icon/Logo (2).svg" alt='logo' width={30} height={30}/>
                                <p className='text-xl font-[800] leading-none'>SHURKOU</p>
                            </div>
                        </Link>

                        <div className='font-poppins flex flex-col gap-[24px]'>
                            <h1 className='text-[20px] font-[600]'>Register Your Account</h1>
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
                                        {/* Telephone */}
                                        <Input 
                                            label='Phone Number'
                                            type='number'
                                            id='number'
                                            placeholder='628xxxxxxxxx'
                                            logo = '/icon/phone-flip.svg'
                                        />
                                        {/* End Telephone */}
                                        {/* Password */}
                                        <Input 
                                            label='Password'
                                            type='password'
                                            id='number'
                                            placeholder='Enter your password'
                                            logo = ''
                                            onChange={handleValidPassword}
                                        />
                                        {/* End Password */}
                                        <div className='flex flex-col gap-1'>
                                            <div className='flex gap-2 items-center ml-2'>
                                                {
                                                    isLengthValid ?
                                                    (<Image src="./icon/checklist.svg" alt='logo' width={14} height={14}/>):
                                                    (<div className='w-[14px] h-[14px] rounded-full border-[2px] border-[#071952]'></div>)
                                                }
                                                <p className='text-[12px] font-nunito'>Your Password must be at least 12 characters</p>
                                            </div>

                                            <div className='flex gap-2 items-center ml-2'>
                                                {
                                                    isContainNumber ?
                                                    (<Image src="./icon/checklist.svg" alt='logo' width={14} height={14}/>):
                                                    (<div className='w-[14px] h-[14px] rounded-full border-[2px] border-[#071952]'></div>)
                                                }
                                                <p className='text-[12px] font-nunito'>Your password should contain at least one number</p>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <button type='submit' className={`cursor-pointer duration-300 transition-all ${isValidPassword ? 'opacity-100' : 'opacity-50'}`}>
                                        <div className='py-[10px] px-[24px] w-full bg-primary flex justify-center items-center text-white rounded-[6px]'>
                                            Sign Up
                                        </div>
                                    </button>

                                    <div className='w-full h-[1px] bg-[#E5E5E5]'>

                                    </div>

                                    <p className='text-[12px] font-[400] font-poppins text-[#1A1A1A] text-center'>Already have an account? <Link href="/login" className='text-[#3059EE] font-[600]'>Sign in</Link></p>
                                    
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