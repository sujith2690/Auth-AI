import React from 'react';
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
                <div
                    key={i}
                    className='flex flex-col items-center md:p-2'
                    data-aos="fade-up" // AOS animation
                    data-aos-duration="1000" // Duration of the animation
                    data-aos-delay={i * 100} // Staggering effect for delay
                >
                    <h1 className='text-2xl md:text-4xl lg:text-6xl text-center'>{item.data}</h1>
                    <h4 className='text-sm md:text-2xl text-center'>{item.type}</h4>
                </div>
            ))}
        </div>
    );
}

export default Clients;
