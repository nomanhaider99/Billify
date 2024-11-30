import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import React from 'react'
import Button from "@/components/Button"

interface DrawerCompProps {
  id: number,
  title: string,
  description: string,
  content?: React.JSX.Element
}

const BlueDrawerComp: React.FC<DrawerCompProps> = ({
  content,
  id,
  title,
  description
}) => {
  return (
    <Drawer>
    <DrawerTrigger>
      <Button
        text="View More"
        outline
       />
    </DrawerTrigger>
    <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle className="text-5xl text-darkblue">{title}</DrawerTitle>
          <DrawerDescription className="text-lightblue text-lg">{description}</DrawerDescription>
        </DrawerHeader>
        <div>{content}</div>
    </DrawerContent>
    </Drawer>
  )
}

export default BlueDrawerComp