import React from 'react'

interface LeverageCardProps {
    title: string,
    count: string,
    icon: React.ElementType
}

const LeverageCard: React.FC<LeverageCardProps> = ({
    count,
    icon: Icon,
    title
}) => {
  return (
    <div
        className='md:w-[22vw] w-full bg-white shadow-sm shadow-zinc-400/50 p-4 flex flex-col gap-8'
    >
        <div className='w-full flex justify-between items-center'>
            <div className='text-4xl font-bold text-darkblue'>{count}</div>
            <div>{<Icon size={40} color='#2f29c4' />}</div>
        </div>
        <div className='text-lightblue'>{title}</div>
    </div>
  )
}

export default LeverageCard