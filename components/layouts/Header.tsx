'use client'
import React from 'react'
import Box from '../ui/Box'
import { NotebookPen } from 'lucide-react'
import Button from '../Button'
import NavLinks from '../ui/NavLinks'
import { Menu } from 'lucide-react'
import NavMenu from './Menu'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center px-6 md:px-16 lg:px-32 py-4'>
      {/* Logo & Tabs */}
      <div className='flex items-center gap-3'>
        {/* LOGO */}
        <Box>
          <div className='flex items-center gap-2'>
            <NotebookPen />
            <div className='text-xl font-bold'>Billify</div>
          </div>
        </Box>

        {/* NavLinks (visible on md+) */}
        <div className='hidden md:block'>
          <Box>
            <div className='flex gap-4 text-md text-heading'>
              <NavLinks />
            </div>
          </Box>
        </div>
      </div>

      {/* Right Buttons */}
      <div className='flex items-center gap-3'>
        {/* Auth Buttons (hidden on small screens) */}
        <div className='hidden md:flex gap-3'>
          <Button text='Register' outline />
          <Button text='Login' />
        </div>

        {/* Menu button (visible only on mobile) */}
        <div className='md:hidden'>
          <Box
            children={<NavMenu opener={Menu as any} />}
           />
        </div>
      </div>
    </div>
  )
}

export default Header
