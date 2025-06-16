import React from 'react'

const Box = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className='px-3 py-2 rounded-xl border-[1px] border-blue-200 flex justify-center items-center h-fit'>
        {children}
    </div>
  )
}

export default Box