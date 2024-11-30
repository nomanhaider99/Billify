import React from 'react'
import BlueServiceCard from '../ui/BlueServiceCard'
import { blueSpecialitiesData } from '@/data/blueSpecialities'

const Services = () => {
  return (
    <div className='w-full flex flex-col gap-8 px-5 md:py-20 py-10 md:px-10'>
        <div className='text-4xl text-darkblue font-semibold'>Empowering Your Vision with Cutting-Edge Solutions and Exceptional Service!</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                blueSpecialitiesData.map((item, index) => (
                    <BlueServiceCard
                        description={item.description}
                        title={item.title}
                        key={index}
                        points={item.points}
                        id={item.id}
                        content={item.content}
                     /> 
                ))
            }
        </div>
    </div>
  )
}

export default Services