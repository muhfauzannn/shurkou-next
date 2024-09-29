"use client";
import Image from 'next/image'
import { useRef, useState, FC, InputHTMLAttributes } from 'react';

// Definisikan tipe untuk props dengan properti tambahan logo
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  logo: string;
}

const Input: FC<InputProps> = ({ label, type = 'text', id, placeholder, logo, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!isVisible);
  }

  const handleDivClick = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };



  if (type === 'password') {
      return(
        <div className='flex flex-col gap-[8px]'>
            <label className='font-[400] text-[12px] ml-[16px]' htmlFor="email">{label}</label>
            <div
                className={`w-full py-[12px] px-[16px] rounded-[6px] flex justify-between items-center bg-[#F2F2F2] ${isFocused ? 'outline outline-[2px] outline-[#071952]' : ''}`}
                    onClick={handleDivClick}
            >
            <input
                type={isVisible? 'password' : 'text'}
                id="email"
                ref={inputRef}
                placeholder={placeholder}
                className='text-[15px] font-[400] bg-[#F2F2F2] leading-[20px] w-[90%] focus:outline-none'
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
            />
            <Image src={`${isVisible ? './icon/eye-crossed.svg' : './icon/eye.svg'}`} 
            onClick={handleVisible}
            alt='email' width={16} height={16}/>

            </div>
        </div>
      )
  }
  else{

  
  return (
    <div className='flex flex-col gap-[8px]'>
      <label className='font-[400] text-[12px] ml-[16px]' htmlFor={id}>{label}</label>
      <div
        className={`w-full py-[12px] px-[16px] rounded-[6px] flex justify-between items-center bg-[#F2F2F2] ${isFocused ? 'outline outline-[2px] outline-[#071952]' : ''}`}
        onClick={handleDivClick}
      >
        <input
          type={type}
          id={id}
          ref={inputRef}
          placeholder={placeholder}
          className='text-[15px] font-[400] bg-[#F2F2F2] leading-[20px] w-[90%] focus:outline-none'
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
          {...props}
        />
        {logo && <Image src={logo} alt='logo' width={16} height={16} />}
      </div>
    </div>
  );
}
};

export default Input;