import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';  // Assuming this is where fadeIn is located
import image1 from '../../assets/images/homePage/Vector4.png';
import image2 from '../../assets/images/homePage/Vector5.png';

const Value = () => {
    const barData = [
        { name: 'IT Consulting', percentage: '90' },
        { name: 'Cloud Migration Services', percentage: '92' },
        { name: 'Web Application Development', percentage: '95' },
        { name: 'APP Application Development', percentage: '98' },
    ];

    const integrity = [
        {
            image: image1,
            subHeading: 'Innovation and Excellence',
            content: 'Leading the future with cutting-edge solutions.',
        },
        {
            image: image2,
            subHeading: 'Integrity and Transparency',
            content: 'Building trust, fostering relationships, and ensuring accountability.',
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center bg-inherit md:p-5'>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                <div className='w-5/6 md:w-1/2 space-y-3 md:space-y-0'>
                    <div className='p-2 flex flex-col gap-3'>
                        <p className='text-[#22AAD2] text-start text-sm md:text-lg '>― Our Value</p>
                        <h3 className='flex flex-col text-2xl md:text-3xl lg:text-5xl'>
                            Integrity at Our Core,<span>Innovation in Our Spirit</span>
                        </h3>
                        <p className='text-sm md:text-base tracking-tighter font-extralight'>
                            Our diverse expertise spans multiple industries, empowering businesses of all sizes to harness the transformative power of AI and unlock invaluable data-driven insights.
                        </p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {integrity.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn('right', i * 0.2)}
                                initial="hidden"
                                animate="show"
                                className='flex gap-4 items-center'
                            >
                                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-[#0788AE] to-[#22AAD2] flex items-center justify-center'>
                                    <img src={item.image} loading='lazy' alt={item.subHeading} />
                                </div>
                                <div>
                                    <h4 className='text-lg'>{item.subHeading}</h4>
                                    <p className='text-sm tracking-tighter font-extralight'>{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className='bg-[#0f243c] w-5/6 md:w-2/6 rounded-2xl p-5 mt-3 md:mt-0 md:p-5'
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    animate="show"
                >
                    <div className='flex flex-col gap-2 md:gap-5 md:p-5'>
                        {barData.map((item, i) => (
                            <motion.div
                                key={i}
                                className='flex flex-col gap-2'
                                variants={fadeIn('up', i * 0.2)}
                                initial="hidden"
                                animate="show"
                            >
                                <p className='flex items-center justify-between px-3'>
                                    {item.name} <span>{item.percentage}%</span>
                                </p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div
                                        className="bg-[#22AAD2] h-2.5 rounded-full"
                                        style={{ width: `${item.percentage}%` }}
                                    ></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Value;
