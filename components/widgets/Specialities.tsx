import React from 'react'
import ServiceCard from '../ui/ServiceCard'
import { specialitiesData } from '@/data/specialities'

const Specialities = () => {
  return (
    <div className='w-full py-20 bg-darkblue flex flex-col gap-8 px-5'>
        <div className='text-4xl text-white font-semibold'>Empowering Your Vision with Cutting-Edge Solutions and Exceptional Service!</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                specialitiesData.map((item, index) => (
                    <ServiceCard
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

export default Specialities