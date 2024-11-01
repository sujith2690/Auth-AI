import React from 'react';
import Buttons from '../common/Buttons';
import image from '../../assets/images/homePage/home2.png'

const Transform = () => {
    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                <div className="relative flex w-full md:w-auto gap-8 p-6">
                    <img
                        src={image}
                        className="w-full h-auto object-cover md:h-full md:w-full"
                        alt="home2.png"
                        loading='lazy'
                    />
                    <div className="absolute bottom-0 left-0 flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] p-4 md:static md:bg-transparent text-left">
                        <p className="text-[#22AAD2] text-[12px] md:text-lg">― About Us</p>
                        <h3 className="text-lg md:text-3xl font-bold text-white">Transforming Visions into Reality</h3>
                        <p className="mt-4 text-[10px] md:text-sm text-[#E3E3E3] font-thin">
                            At AUTH AI SOLUTIONS, we leverage the transformative power of artificial intelligence to catalyze remarkable change across industries. Our unwavering commitment to transparency and reliability is what truly sets us apart in a crowded marketplace. We empower organizations with cutting-edge AI technologies that elevate data-driven insights, streamline complex processes, and ignite strategic growth.
                        </p>
                        <div className="mt-2">
                            <Buttons content={'Learn more'} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Transform;
