'use client'
import getHomepageData from '@/app/actions/HomepageData';
import { HomepageTypes } from '@/types/data';
import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const ServiceWriter = () => {
    const [data, setData] = useState<HomepageTypes>();

    useEffect(() => {
        const callData = async () => {
            const data = await getHomepageData();
            setData(data);
        }

        callData();
    }, [ setData ])

    return (
        <Typewriter
            words={data?.services as any}
            loop
        />
    )
}

export default ServiceWriter