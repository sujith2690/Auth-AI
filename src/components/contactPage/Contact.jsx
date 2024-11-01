import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    const address = [
        {
            icon: <IoLocationOutline />,
            details: 'KLLG St, No. 99, PKU City, ID 28289'
        },
        {
            icon: <IoMailOutline />,
            details: 'hello@domainsite.com'
        },
        {
            icon: <CiPhone />,
            details: '+0761-8523-398'
        },
    ];

    return (
        <div className='relative flex items-center justify-center'>
            <div className='flex flex-wrap items-center justify-center gap-6 md:gap-10'>
                {address.map((item, i) => (
                    <div
                        key={i}
                        className='bg-[#0A1823] w-[120px] h-[120px] md:w-[200px] md:h-[150px] flex flex-col items-center justify-center gap-4 rounded-2xl px-4 py-5'
                        data-aos="fade-up" // AOS animation
                        data-aos-duration={(i + 1) * 200} // Varying duration for each item
                    >
                        <span className="text-[#22AAD2] text-xl md:text-3xl">{item.icon}</span>
                        <p className='text-white text-sm md:text-base text-center'>
                            {item.details}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
