import React from 'react'
import Button from '@/components/Button'
import WhyImage from '@/public/images/Why.avif'
import Image from 'next/image'

const Why = () => {
  return (
    <div className='w-full flex md:flex-row flex-col-reverse justify-between items-center md:py-20 py-10 md:pl-10 pl-4'>
        <div className='flex flex-col gap-4 md:w-1/2 w-full'>
            <div className='text-5xl font-bold text-darkblue'>Why Billify?</div>
            <div className='text-lightblue'>Because collections matter! For the last 17 years, Sunknowledge Services Inc. has been empowering healthcare practices efficiently manage their revenue cycles with a full set of services in medical billing, coding, and virtual assistance. We work with both Payers and Providers, giving us a unique edge over other Revenue Cycle Management (RCM) companies. Our experience and proven expertise across multiple practice management systems is continuously redefining ROI for “the biggest and the best” names in the healthcare space. We understand the challenges of ensuring healthy collections from your practice. Free yourself from the hassles of billing and start focusing on what matters most – your patients. Try us and be surprised at how easy we make it for you.</div>
            <div>
                <Button
                    text='Schedule a Discovery Call'
                    outline
                 />
            </div>
        </div>
        <div className='md:w-1/2 w-full'>
            <Image
                alt=''
                src={WhyImage}
                height={550}
                width={550}
             />
        </div>
    </div>
  )
}

export default Why