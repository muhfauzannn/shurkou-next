'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './atomic/button';
import Hamburger from './atomic/hamburger';
import BurgerAction from './atomic/burgerAction';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-primary w-full flex justify-center py-4 sticky top-0 transition-colors duration-300 ${isScrolled ? 'shadow-2xl' : null}`}>
      <div className="w-11/12 flex justify-between items-center">
        <div className='flex items-center'>
          <Image src="./icon/Logo (1).svg" alt='logo' width={25} height={25}/>
          <p className='text-xl font-[800]'>SHURKOU</p>
        </div>

        <div className='font-nunito flex gap-8 max-md:hidden'>
          <a href='/'>Home</a>
          <a href='#pricing'>Pricing</a>
          <a href='#features'>Features</a>
          <a href='https://google.com'>Join Discord</a>
        </div>

        <div className='flex gap-6 font-nunito max-md:hidden'>
          <Button 
            title="Sign Up"
            redirectTo="/signup"
            isPrimary={false}
          />
          <Button 
            title="Sign In"
            redirectTo="/login"
            isPrimary={true}
          />
        </div>

        <Hamburger />
      </div>

      <BurgerAction />
    </div>
  );
};

export default Header;
