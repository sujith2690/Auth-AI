import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import image1 from '../../assets/images/homePage/Background Image3.png';
import logo1 from '../../assets/images/homePage/customers/logo 1.png';
import logo2 from '../../assets/images/homePage/customers/logo 2.png';
import logo3 from '../../assets/images/homePage/customers/logo 3.png';
import logo4 from '../../assets/images/homePage/customers/logo 4.png';
import logo5 from '../../assets/images/homePage/customers/logo 5.png';

const Happy = () => {
    const customerLogos = [logo1, logo2, logo3, logo4, logo5];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div>
            <div className='relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[250px] gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10'>
                    <motion.h2 
                        className='text-sm md:text-2xl lg:text-5xl text-center'
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Join Our <span className='text-[#22AAD2] '>1500+</span> Happy Customers
                    </motion.h2>
                    <div className='grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10 p-2'>
                        {
                            customerLogos.map((item, i) => (
                                <motion.div 
                                    className='flex items-center justify-center'
                                    key={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: i * 0.1 }} // Delay for each logo for staggered effect
                                >
                                    <img className='w-28 h-6 md:w-36 md:h-10' src={item} alt={`Customer logo ${i + 1}`} loading='lazy' />
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                <img className='w-full max-h-[250px] object-cover z-0' src={image1} alt="Background" />
            </div>
        </div>
    );
}

export default Happy;
