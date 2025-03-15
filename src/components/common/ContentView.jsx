import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ContentView = ({ content, image1, content2, heading }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A] overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                <div className='p-5 overflow-hidden'>
                    <div
                        className="flex flex-col md:flex-row w-full md:w-auto gap-8 md:p-6"
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="300" // Duration for the animation
                    >
                        <div>
                            <img
                                src={image1} 
                                className='w-full h-full object-cover rounded-xl'
                                alt="home2.png"
                                loading='lazy'
                            />
                        </div>
                        <div className="flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left">
                            {/* <p className="text-[#22AAD2] text-[12px] md:text-lg">― Mobile Applications</p> */}
                            <h3 className="text-lg md:text-3xl font-bold text-white">{heading}</h3>
                            <p className="text-[#E3E3E3] text-sm font-thin">
                                {content}
                            </p>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="400" // Duration for the animation
                    >
                        <p className="text-[#E3E3E3] md:flex text-sm md:text-base font-thin">
                            {content2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentView;
