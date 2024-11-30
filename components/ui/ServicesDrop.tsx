'use client';

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"; // Assuming the correct import path
import getServicesData from "@/app/actions/ServicesData";

interface ServicesDropProps {
  tab: string;
}

const ServicesDrop: React.FC<ServicesDropProps> = ({ tab }) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const callData = async () => {
      const services = await getServicesData();
      setData(services);
    };

    callData();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>{tab}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <DropdownMenuItem className="cursor-pointer">{item}</DropdownMenuItem>
            {index < data.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDrop;
