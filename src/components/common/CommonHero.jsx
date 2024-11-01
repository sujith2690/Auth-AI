import React, { useEffect } from 'react';
import backGroundImage from '../../assets/images/Background Image 1.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const CommonHero = ({ heading, content }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className='relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[300px] gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10'>
                <div className='flex items-center justify-center'>
                    <div className='w-5/6 md:w-1/2 flex flex-col items-center justify-center gap-2'>
                        <h1 
                            className="text-2xl md:text-5xl lg:text-7xl text-center whitespace-nowrap"
                            data-aos="fade-up" // AOS animation
                        >
                            {heading}
                        </h1>
                        <p 
                            className='text-[#B5B3B3] text-sm text-center'
                            data-aos="fade-up" // AOS animation
                            data-aos-delay="200" // Delay for the paragraph
                        >
                            {content}
                        </p>
                    </div>
                </div>
            </div>
            <img className='w-full max-h-[300px] object-cover z-0' src={backGroundImage} alt="Background Image" />
        </div>
    );
}

export default CommonHero;
