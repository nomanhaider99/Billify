import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { servicesData } from "@/data/services"

interface ServicesDropProps {
  tab: string
}

const ServicesDrop: React.FC<ServicesDropProps> = ({ tab }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>{tab}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {
          servicesData.map((item, index) => (
            <DropdownMenuItem
              key={index}
            >
              {item.text}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export default ServicesDrop