import Hero from '@/components/widgets/Hero'
import Leverage from '@/components/widgets/Leverage'
import Specialities from '@/components/widgets/Specialities'
import Testimonials from '@/components/widgets/Testimonials'
import Why from '@/components/widgets/Why'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Specialities />
      <Why />
      <Leverage />
      <Testimonials />
    </div>
  )
}

export default page