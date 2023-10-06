"use client"

import Image from '@/node_modules/next/image';
import { relative } from 'path';
import React from 'react'
import CustomButton from './CustomButton';


const Hero = () => {
    const handleScroll = () => {

    }
    
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero_title'style={{ fontSize: '3rem' }}>
                Find, book, or rent a car <br/>- quickly and easily!
            </h1>
            <p className='hero_subtitle'>
                Stremline your car rental experience with our effortless booking process.
            </p>
            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
            <div className='hero_image-container'>
                <div className='hero_image'>
                    <Image src="/hero.png" fill={true} alt="hero" className="object-contain"/>
                    
                    <div className='hero_image-overay' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero