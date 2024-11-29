'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const ServiceWriter = () => {
    return (
        <Typewriter
            words={['DME', 'HME', 'VR ASSISTANT', 'VR SCRIBE', 'URGENT BILLING', 'RADIOLOGY','CARDIOLOGY', 'HEALTH SYSTEMS', 'HOSPITAL AR']}
            loop
        />
    )
}

export default ServiceWriter