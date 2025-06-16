'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import ServiceWriter from '../ui/ServiceWriter'
import { HomepageTypes } from '@/types/data'
import HeroImage from '@/public/images/Hero.png'
import getHomepageData from '@/app/actions/HomepageData'
import Shadow from '../ui/Shadow'
import Button from '../Button'

const Hero = () => {
  const [data, setData] = useState<HomepageTypes>()

  useEffect(() => {
    const callData = async () => {
      const res = await getHomepageData()
      setData(res)
    }
    callData()
  }, [])

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 lg:px-20 pt-12'>
      
      {/* Left Shadow */}
      <div className='hidden md:block md:w-[10%]'>
        <Shadow />
      </div>

      {/* Content */}
      <div className='w-full md:w-[80%] flex flex-col items-center text-center gap-6'>
        {/* Heading & Buttons */}
        <div className='flex flex-col items-center gap-4 px-2'>
          <h1 className='font-extrabold text-heading leading-tight text-[clamp(3rem,8vw,4rem)]'>
            {data?.heading?.slice(0, 5)} <ServiceWriter /><br />
            {data?.heading?.slice(5, 14)}{data?.heading?.slice(14, 21)}
          </h1>

          <p className='text-[clamp(1rem,2.5vw,1.25rem)] font-medium text-heading leading-[1.6] max-w-2xl'>
            {data?.description}
          </p>

          <div className='flex flex-col md:flex-row items-center gap-3'>
            <Button text='Explore Our Services' />
            <Button text='Schedule a Meeting' outline />
          </div>
        </div>

        {/* Hero Image */}
        <div className='w-full flex justify-center mt-6'>
          <Image
            alt='hero'
            src={HeroImage}
            width={800}
            height={500}
            className='w-full max-w-[500px] h-auto z-20'
            priority
          />
        </div>
      </div>

      {/* Right Shadow */}
      <div className='hidden md:block md:w-[10%]'>
        <Shadow />
      </div>
    </div>
  )
}

export default Hero
