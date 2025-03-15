import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../../assets/images/homePage/Background Image3.png';
import logo1 from '../../assets/images/homePage/customers/logo 1.png';
import logo2 from '../../assets/images/homePage/customers/logo 2.png';
import logo3 from '../../assets/images/homePage/customers/logo 3.png';
import logo4 from '../../assets/images/homePage/customers/logo 4.png';
import logo5 from '../../assets/images/homePage/customers/logo 5.png';

const Happy = () => {
    const customerLogos = [logo1, logo2, logo3, logo4, logo5];

    // Initialize AOS
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='relative bg-inherit py-4 overflow-hidden'>
            <div className='absolute w-full h-full text-gray-200 max-h-[250px] gap-3 md:gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10'>
                <h2 
                    className='text-sm md:text-2xl lg:text-5xl text-center'
                    data-aos="fade-up" // AOS animation
                >
                    Join Our <span className='text-[#22AAD2]'>1500+</span> Happy Customers
                </h2>
                {/* <div className='grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10 p-2'> */}
                <div className='flex flex-wrap justify-around  gap-4 md:gap-10 p-2'>
                    {customerLogos.map((logo, index) => (
                        <div 
                            className='flex items-center justify-center'
                            key={index}
                            data-aos="fade-up" // AOS animation for each logo
                            data-aos-delay={index * 100} // Delay for staggered effect
                        >
                            <img className='w-28 h-6 md:w-36 md:h-10' src={logo} alt={`Customer logo ${index + 1}`} loading='lazy' />
                        </div>
                    ))}
                </div>
            </div>
            <img className='w-full max-h-[250px] object-cover z-0' src={image1} alt="Background" />
        </div>
    );
}

export default Happy;
