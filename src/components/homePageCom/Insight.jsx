import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import image1 from '../../assets/images/homePage/explore1.png';
import image2 from '../../assets/images/homePage/explore2.png';
import image3 from '../../assets/images/homePage/explore3.png';

const Insight = () => {
    const content = [
        {
            title: 'Data Analytics',
            image: image1,
            date: 'Oct 12, 2024',
            heading: 'Unleashing Data Analytics: Driving Business Growth',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus...'
        },
        {
            title: 'E-Commerce',
            image: image2,
            date: 'Oct 15, 2024',
            heading: 'E-commerce Trends: Adapting to Digital Consumers',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus...'
        },
        {
            title: 'Cyber Security',
            image: image3,
            date: 'Oct 16, 2024',
            heading: 'Cybersecurity Challenges: Strategies for Protection',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus...'
        },
    ];

    // Define animation variants for fading in
    const fadeIn = {
        hidden: { opacity: 0, y: 20 }, // Start off-screen (20px down)
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Animate to on-screen
    };

    return (
        <div className='bg-[#132030] flex flex-col items-center justify-center md:h-full'>
            <div>
                <div className='p-4 flex flex-col gap-2'>
                    <h4 className='text-[#22AAD2] text-sm md:text-2xl '>― Our Insight</h4>
                    <h2 className='text-lg md:text-4xl'>Explore the Edge of Innovation</h2>
                </div>
                <div>
                    <div className='grid place-items-center grid-cols-2 md:grid-cols-3 gap-5 p-5'>
                        {
                            content.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    className="max-w-sm overflow-hidden shadow-lg bg-[#0A1828] rounded-3xl relative" 
                                    variants={fadeIn} 
                                    initial="hidden" 
                                    animate="visible"
                                    transition={{ delay: i * 0.1 }} // Stagger animation for each item
                                >
                                    <img className="w-full" src={item.image} alt={item.heading} loading='lazy' />
                                    <div className="absolute top-2 left-2 p-2">
                                        <span className="text-black text-sm bg-[#22AAD2] px-2 py-1 rounded-full">{item.title}</span>
                                    </div>
                                    <div className="px-6 py-4">
                                        <span className="text-sm text-[#22AAD2]">{item.date}</span>
                                        <div className="font-bold sm md:text-lg mb-2">{item.heading}</div>
                                        <p className="text-gray-700 text-base hidden md:flex">
                                            {item.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Insight;
