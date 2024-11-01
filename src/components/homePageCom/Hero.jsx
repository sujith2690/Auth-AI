import React from 'react'
import Buttons from '../common/Buttons'
import Strategy from './Strategy'
import image from '../../assets/images/homePage/Background Image3.png'
import { motion } from "framer-motion"
import { fadeIn } from '../../variants'

const Hero = () => {

    return (
        <div>
            <div className='relative mt-10'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className="absolute w-full h-full text-gray-200 max-h-[500px] gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10"
                >
                    <motion.p variants={fadeIn("up", 0.4)} className="text-lg md:text-2xl">
                        Welcome to <span className='text-[#22AAD2]'>AUTH AI SOLUTIONS</span>
                    </motion.p>
                    <motion.h1
                        variants={fadeIn("up", 0.6)}
                        className="text-2xl md:text-5xl lg:text-7xl flex flex-col text-center items-center justify-center"
                    >
                        AI Solutions for an Innovative <span>Tomorrow</span>
                    </motion.h1>
                    <motion.p variants={fadeIn("up", 0.8)} className="text-[#E3E3E3] text-sm text-center">
                        Where AI Meets Integrity- Empowering Innovation with Intelligence
                    </motion.p>
                    <motion.div variants={fadeIn("up", 1)} className="mt-4">
                        <Buttons content={'Get Started'} />
                    </motion.div>
                </motion.div>

                <img className='w-full max-h-[500px] object-cover z-0' src={image} alt="" loading='lazy' />
            </div>
            <Strategy />
        </div>

    )
}

export default Hero