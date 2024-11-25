import React from 'react'
import Logo from '../ui/Logo'
import CustomButton from '../Button'
import { Button } from '@/components/ui/Button'
import { FaPlus } from 'react-icons/fa'
import { servicesData } from '@/data/services'

const Footer = () => {
  return (
    <div className='w-full flex md:flex-row flex-col items-start justify-between md:px-10 px-4 md:py-20 py-10 gap-8 md:gap-0 bg-darkblue'>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-0'>
                <div><Logo secondary /></div>
                <div className='text-zinc-100'>Your Global Workforce Partner</div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='text-white'>Billify Services</div>
                <div className='text-white'>Hire</div>
            </div>
            <div>
                <CustomButton
                    icon={FaPlus}
                    text='Add Listing'
                    outline
                 />
            </div>
            <div>
                <Button 
                    variant='outline'
                    className='border-[0.5px] md:w-[20vw] w-[60vw] border-white bg-transparent text-white'
                >
                    Start Now
                </Button>
            </div>
        </div>
        <div className='border-t-[0.5px] border-white/20 flex flex-col px-10 py-5 gap-6'>
            <div className='text-white font-bold text-lg'>Services We Offer</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    servicesData.map((item, index) => (
                        <div 
                            className='text-zinc-200 cursor-pointer'
                            key={index}
                        >
                            {item.text}
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='text-white font-bold text-lg'>Solutions & Resources</div>
            <div className='flex flex-col text-zinc-200'>
                <div>Hiring</div>
                <div>Guides</div>
                <div>Contact Us</div>
            </div>
        </div>
    </div>
  )
}

export default Footer