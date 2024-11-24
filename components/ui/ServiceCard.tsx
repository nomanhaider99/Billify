'use client'
import React, { ReactNode, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import DrawerComp from '../widgets/Drawer';

interface ServiceCardProps {
    title: string,
    description: string,
    points: ReactNode,
    id: number,
    content: React.JSX.Element
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    description,
    points,
    title,
    id,
    content
}) => {
    const [hover, setHover] = useState(false);
  return (
    <div 
        className={`p-4 border-[0.5px] border-white rounded-sm cursor-pointer ${hover ? 'bg-white' : 'bg-transparent'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {
            hover ? (
                <div className='md:h-[30vw] flex flex-col justify-between'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-4xl font-medium text-darkblue'>{title}</div>
                        <div className='text-lightblue'>{description}</div>
                    </div>
                    <div className='text-zinc-600'>{points}</div>
                    <div>
                        <DrawerComp
                            id={id}
                            title={title}
                            description={description}
                            content={content}
                         />
                    </div>
                </div>
            ) : (
                <div className='md:h-[30vw] flex flex-col justify-between'>
                    <div className='flex justify-end'><FaArrowRight size={45} color='#fff' /></div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-4xl font-medium text-white'>{title}</div>
                        <div className='text-zinc-300'>{description}</div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ServiceCard