import { leverageData } from '@/data/leverage'
import React from 'react'
import LeverageCard from '../ui/LeverageCard'

const Leverage = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:pl-10 pl-4 pb-20'>
      {
        leverageData.map((item, index) => (
          <LeverageCard
            count={item.count}
            icon={item.icon}
            title={item.title}
            key={index}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Leverage