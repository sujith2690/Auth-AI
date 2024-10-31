import React from 'react'
import Buttons from '../common/Buttons'
import Strategy from './Strategy'
import image from '../../assets/images/homePage/Background Image3.png'

const Hero = () => {

    return (
        <div>
            <div className='relative mt-10'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10'>
                    <p className='text-lg md:text-2xl'>
                        Welcome to <span className='text-[#22AAD2]'>AUTH AI SOLUTIONS</span>
                    </p>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl flex flex-col text-center items-center justify-center '>
                        AI Solutions for an Innovative <span>Tomorrow</span>
                    </h1>
                    <p className='text-[#E3E3E3] text-sm text-center'>
                        Where AI Meets Integrity- Empowering Innovation with Intelligence
                    </p>
                    <Buttons content={'Get Started'} />
                </div>
                <img className='w-full max-h-[500px] object-cover z-0' src={image} alt="" loading='lazy' />
            </div>
            <Strategy />
        </div>

    )
}

export default Hero