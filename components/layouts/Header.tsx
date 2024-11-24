import React from 'react';
import Logo from '../ui/Logo';
import NavLinks from '../ui/NavLinks';
import Button from '@/components/Button';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-white flex justify-between items-center md:py-6 py-4 md:px-10 px-4 border-b-[2px] border-zinc-400/10 shadow-sm">
      {/* Logo */}
      <div>
        <Logo />
      </div>
      {/* Links */}
      <div className='hidden md:block'>
        <NavLinks />
      </div>
      {/* Buttons & Others */}
      <div className=''>
        <Button text="Start Billify" icon={FaArrowRight} fullyRounded />
      </div>
    </div>
  );
};

export default Header;
