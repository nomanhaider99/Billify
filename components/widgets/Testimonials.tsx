import React from 'react'
import Feedbacks from '../ui/Feedbacks'

const Testimonials = () => {
  return (
    <div className='w-full flex md:flex-row flex-col justify-between items-center md:pl-10 px-4 md:px-0 pl-4 md:py-20 py-10'>
        <div className='md:w-1/2 w-full flex flex-col gap-4'>
            <div className='text-5xl font-bold text-darkblue'>What Our Clients Say</div>
            <div className='text-lightblue'>Our client has consistently praised the work ethic, dedication, and technical expertise we bring to every project. They appreciate the seamless communication and ability to transform their ideas into functional and visually appealing solutions. They often highlight the attention to detail and commitment to delivering high-quality results within the agreed timelines. Additionally, they value our problem-solving skills and proactive approach, which ensure that even unforeseen challenges are handled effectively. Overall, they describe the experience of working with us as professional, collaborative, and rewarding.</div>
        </div>
        <div className='md:w-1/2 w-full flex justify-center'>
            <Feedbacks />
        </div>
    </div>
  )
}

export default Testimonials