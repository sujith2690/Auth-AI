import React from 'react';
import Buttons from '../common/Buttons';
import image from '../../assets/images/homePage/home2.png';

const Transform = () => {
    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A] overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-8 p-2 md:p-6">
                    <div
                        className="flex w-full"
                        data-aos="fade-left" // AOS animation
                        data-aos-duration="1000" // Duration of the animation
                    >
                        <img
                            src={image}
                            className="w-full h-auto object-cover rounded-3xl md:h-full md:w-full"
                            alt="home2.png"
                            loading="lazy"
                        />
                    </div>
                    <div
                        className="flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] p-4 md:static md:bg-transparent text-left"
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="1000" // Duration of the animation
                    >
                        <p className="text-[#22AAD2] text-sm md:text-lg" data-aos="fade-right" data-aos-duration="1000">
                            ― About Us
                        </p>
                        <h3 className="text-lg md:text-3xl font-bold text-white" data-aos="fade-up" data-aos-duration="1000">
                            Transforming Visions into Reality
                        </h3>
                        <p className="mt-4 text-sm md:text-sm text-[#E3E3E3] font-thin" data-aos="fade-up" data-aos-duration="1000">
                            At AUTH AI SOLUTIONS, we leverage the transformative power of artificial intelligence to catalyze remarkable change across industries. Our unwavering commitment to transparency and reliability is what truly sets us apart in a crowded marketplace. We empower organizations with cutting-edge AI technologies that elevate data-driven insights, streamline complex processes, and ignite strategic growth.
                        </p>
                        <div className="mt-2" data-aos="fade-up" data-aos-duration="1000">
                            <Buttons content={'Learn more'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transform;
