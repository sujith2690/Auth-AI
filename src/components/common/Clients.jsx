import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { H1, H2, H3, H4, H5, H6, P } from './Typography';

const Clients = () => {
    const specialData = [
        { data: '150+', type: 'Happy Clients' },
        { data: '350+', type: 'Projects Done' },
        { data: '25+', type: 'Team Members' },
        { data: '30', type: 'Award Winning' },
    ];

    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 bg-gradient-to-r from-[#0788AE] to-[#22AAD2] p-5 md:py-3'>
            {specialData.map((item, i) => (
                <motion.div
                    key={i}
                    variants={fadeIn("up", i * 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className='flex flex-col items-center md:p-2'
                >
                    <h1 className='text-2xl md:text-4xl lg:text-6xl text-center'>{item.data}</h1>
                    <h4 className='text-sm md:text-2xl text-center'>{item.type}</h4>
                </motion.div>
            ))}
        </div>
    );
}

export default Clients;
