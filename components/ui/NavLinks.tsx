import { linksData } from '@/data/links'
import Link from 'next/link'
import React from 'react'
import ServicesDrop from './ServicesDrop'
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = () => { 
  return (
    <div className='w-full flex md:flex-row flex-col md:items-center gap-6 text-[16px] text-zinc-800'>
        {
            linksData.map((item, index) => (
                <Link
                    key={index}
                    href={item.link == "Services" ? '' : item.route}
                >
                    {item.link == 'Services' ? (
                        <div 
                            className='flex items-center gap-1'
                        >
                            <ServicesDrop
                                tab='Services' 
                            />
                            <IoIosArrowDown size={15} color='#000' />
                        </div>
                    ) : (item.link)}
                </Link>
            ))
        }
    </div>
  )
}

export default NavLinks