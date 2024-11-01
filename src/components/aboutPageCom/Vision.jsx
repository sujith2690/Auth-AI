import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import image1 from '../../assets/images/aboutPage/vision.png';

const Vision = () => {
    const heading = 'Transforming Visions into Technological Reality';
    const content = 'Where AI Meets Integrity At AUTH AI SOLUTIONS, we leverage the transformative power of artificial intelligence to catalyse remarkable change across industries. Our unwavering commitment to transparency and reliability is what truly sets us apart in a crowded marketplace.';
    const content2 = 'Our innovative solutions are designed not just to meet the demands of today but to anticipate the challenges of tomorrow, ensuring that your business stays ahead of the curve. What drives us is our steadfast adherence to ethical principles and integrity. We believe that true innovation is grounded in responsibility, fostering trust and long-term partnerships with our clients. Together, let’s unlock the potential of AI and transform your vision into reality!';

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                <div className='p-5'>
                    <div className="flex flex-col md:flex-row w-full md:w-auto gap-8 md:p-6">
                        <div 
                            data-aos="fade-up" // AOS animation
                            data-aos-duration="300" // Duration for the animation
                        >
                            <img
                                src={image1} className='w-full h-full object-cover rounded-lg'
                                alt="Vision"
                                loading='lazy'
                            />
                        </div>
                        <div
                            className="flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left"
                            data-aos="fade-up" // AOS animation
                            data-aos-duration="400" // Duration for the animation
                        >
                            <p className="text-[#22AAD2] text-[12px] md:text-lg">― Mobile Applications</p>
                            <h3 className="text-lg md:text-3xl font-bold text-white">{heading}</h3>
                            <p className="text-[#E3E3E3] text-[12px] md:text-sm font-thin">
                                {content}
                            </p>
                        </div>
                    </div>
                    <div
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="500" // Duration for the animation
                    >
                        <p className="text-[#E3E3E3] md:flex text-[12px] md:text-base font-thin">
                            {content2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
