import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { feedbacksData } from '@/data/feedbacks'
  

const Feedbacks = () => {
  return (
    <Carousel className='md:w-[35vw] w-[65vw] py-5'>
    <CarouselContent>
        {
            feedbacksData.map((item, index) => (
                <CarouselItem
                    key={index}
                    className='flex flex-col justify-between gap-5 p-4 bg-white border-y-[0.5px] border-darkblue md:h-[20vw] md:w-full'
                >
                    <div className='flex flex-col gap-1'>
                        <div className='text-4xl font-bold text-darkblue'>{item.title}</div>
                        <div className='text-lightblue text-lg'>{item.work}</div>
                    </div>
                    <div className='text-zinc-600 '>{item.message}</div>
                </CarouselItem>
            ))
        }
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    </Carousel>
  )
}

export default Feedbacks