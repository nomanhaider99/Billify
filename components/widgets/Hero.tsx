'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ServiceWriter from '../ui/ServiceWriter'
import { HomepageTypes } from '@/types/data'
import getHomepageData from '@/app/actions/HomepageData'
import HeroImage from '@/public/images/Hero.jpg'

const Hero = () => {
  const [data, setData] = useState<HomepageTypes>();

  useEffect(() => {
    const callData = async () => {
      const res = await getHomepageData();
      setData(res);
    }
    callData();
  }, [setData]);

  return (
    <div className='w-full md:pl-10 pl-4 md:py-[3vw] py-[6vw] flex md:flex-row flex-col items-center gap-2'>
      <div className='md:w-[50%] w-full flex flex-col gap-4'>
        <div className='md:text-[4.5rem] tracking-tight text-[4rem] md:leading-[5.9vw] leading-[19vw] font-medium text-darkblue'>{data?.heading.slice(0, 12)}<br /><span className='bg-darkblue text-white rounded-full px-4 shrink-0 md:text-[4rem] text-[3rem]'><ServiceWriter /></span>
          <br />{data?.heading.slice(13, 21)} <br />{data?.heading.slice(22, 24)} <div className='flex items-center gap-1'><span className='bg-darkblue text-white rounded-full px-4'>{data?.heading.slice(25, 29)}</span><div className='rounded-full p-4 md:w-[6vw] flex justify-center items-center border-[0.5px] border-darkblue bg-white'><FaArrowRight size={45} color='#2f29c4' /></div></div></div>
        <div className='text-lightblue text-lg leading-5'>{data?.description}</div>
      </div>
      <div className='md:w-[50%] w-full'>
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

