import Image from 'next/image';
import Link from 'next/link'; // Import Link dari Next.js

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-secondary mt-20">
        <div className="w-11/12 flex justify-between text-[#071952] py-10 max-md:flex-col max-md:gap-5">
          <div>
            <div className="flex items-center">
              <Image src="./icon/Logo (2).svg" alt="logo" width={40} height={40} />
              <p className="text-2xl font-[800] leading-none">SHURKOU</p>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] font-nunito max-md:flex-row">
            <p className="font-[700]">Main</p>
            <Link href="/" className="font-[400]">Home</Link>
            <Link href="#pricing" className="font-[400]">Pricing</Link>
            <Link href="#features" className="font-[400]">Features</Link>
            <a href="https://discord.com" className="font-[400]">Join Discord</a> {/* Link eksternal tetap menggunakan a */}
          </div>

          <div className="flex flex-col gap-[15px] font-nunito max-md:flex-row">
            <p className="font-[700]">Account</p>
            <Link href="/dashboard" className="font-[400]">Dashboard</Link>
            <Link href="/login" className="font-[400]">Login</Link>
            <Link href="/signup" className="font-[400]">Sign Up</Link>
          </div>

          <div className="flex flex-col gap-[15px] font-nunito">
            <p className="font-[700]">Contact Us</p>
            <div className="flex gap-4 items-center">
              <a href="https://instagram.com">
                <Image src="./icon/instagram-seeklogo.svg" alt="logo" width={20} height={20} />
              </a>
              <a href="https://discord.com">
                <Image src="./icon/discord-color-seeklogo-2.svg" alt="logo" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-screen bg-secondary border-[#3059EE]">
        <div className="w-11/12">
          <p className="text-[#071952] text-end py-2 font-poppins font-[600] text-xs">
            Copyright © 2024 by SHURKOU. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
