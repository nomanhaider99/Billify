import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/images/Hero.png'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full md:pl-10 pl-4 md:py-[3vw] py-[6vw] flex md:flex-row flex-col items-center gap-2'>
        <div className='md:w-[40%] w-full flex flex-col gap-4'>
            <div className='text-[4rem] md:leading-[6vw] leading-[20vw] font-medium text-darkblue'>Best Billify<br /><span className='bg-darkblue text-white rounded-full px-4'>DME</span> <br />Services <br />in <div className='flex items-center gap-1'><span className='bg-darkblue text-white rounded-full px-4'>USA</span><div className='rounded-full p-4 md:w-[6vw] flex justify-center items-center border-[0.5px] border-darkblue bg-white'><FaArrowRight size={45} color='#2f29c4' /></div></div></div>
            <div className='text-lightblue text-lg leading-5'>Your Global Workforce Partner! Save costs, save time, and boost efficiency for greater success.</div>
        </div>
        <div className='md:w-[60%] w-full'>
          <Image
            alt=''
            src={HeroImage}
            height={600}
            width={800}
           />
        </div>
    </div>
  )
}

export default Hero