import Shadow from '@/components/ui/Shadow'
import React from 'react'
import { Shantell_Sans } from 'next/font/google'

const font = Shantell_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

const page = () => {
  return (
    <div className='w-full flex justify-between items-center px-20 py-5'>
      <div><Shadow /></div>
      <div className='flex flex-col items-center text-center gap-4'>
        <div className='flex flex-col gap-1'>
          <div className={`${font.className} text-darkblue text-xl font-semibold`}>About Us</div>
          <div className='text-[64px] text-heading font-extrabold leading-none'>Outsourcing Made Easy for DME & Credentialing</div>
        </div>
        <div></div>
      </div>
      <div><Shadow /></div>
    </div>
  )
}

export default page