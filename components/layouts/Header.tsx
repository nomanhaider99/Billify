'use client'
import React, { useCallback, useState } from 'react';
import Logo from '../ui/Logo';
import NavLinks from '../ui/NavLinks';
import Button from '@/components/Button';
import { FaArrowRight, FaBars } from 'react-icons/fa';
import Menu from './Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

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
      <div className='hidden md:block'>
        <Button
          text="Start Billify"
          icon={FaArrowRight}
          fullyRounded
          outline
        />
      </div>
      <div className='md:hidden block'>
        <Menu
          opener={FaBars}
        />
      </div>
    </div>
  );
};

export default Header;
