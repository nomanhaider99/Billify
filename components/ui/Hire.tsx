import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from './label'
import { Input } from './input'
import { Textarea } from './textarea'
import Button from '../Button'


const Hire = () => {
    return (
        <Card className='md:w-[45vw] w-full'>
            <CardHeader>
                <CardTitle className='text-4xl font-medium text-darkblue'>We'd love to help</CardTitle>
                <CardDescription className='text-lightblue'>Reach Out and we'll get in touch within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {/* Name */}
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-2'>
                    {/* First Name */}
                    <div className='md:w-1/2 w-full flex flex-col gap-1'>
                        <Label>First Name</Label>
                        <Input
                            placeholder='John'
                            type='text'
                         />
                    </div>
                    {/* Last Name */}
                    <div className='md:w-1/2 w-full flex flex-col gap-1'>
                        <Label>Last Name</Label>
                        <Input
                            placeholder='Doe'
                            type='text'
                         />
                    </div>
                </div>
                {/* Email */}
                <div className='w-full flex flex-col gap-1'>
                    <Label>Email</Label>
                    <Input
                        placeholder='johndoe@email.com'
                        type='email'
                     />
                </div>
                {/* Company */}
                <div className='w-full flex flex-col gap-1'>
                    <Label>Company</Label>
                    <Input
                        placeholder='ABC Company'
                        type='text'
                     />
                </div>
                {/* Message */}
                <div className='w-full flex flex-col gap-1'>
                    <Label>Message</Label>
                    <Textarea
                        className='h-[8vw]'
                     />
                </div>
                {/* Button */}
                <div>
                    <Button
                        text='Send Message'
                     />
                </div>
            </CardContent>
        </Card>
    )
}

export default Hire