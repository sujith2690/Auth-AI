import React from 'react';
import image1 from '../../assets/images/mobile/mobile1.png';

const Future = () => {
    const heading = 'The Future of Mobile Applications';
    const content = 'The integration of advanced technology into mobile applications has paved the way for highly personalized and efficient user experiences. Mobile health apps, for instance, now leverage real-time data and predictive analysis to help users monitor and improve their well-being more effectively than ever before.';

    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A] p-4" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl relative">
                <div className='p-5'>
                    <div className="flex flex-col md:flex-row w-full gap-8 md:p-6">
                        <div data-aos="zoom-in" data-aos-delay="200">
                            <img
                                src={image1} 
                                className='w-full h-full object-cover rounded-lg'
                                alt="A futuristic mobile application interface" 
                                loading='lazy'
                            />
                        </div>
                        <div className="flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left">
                            <h3 className="text-[#22AAD2] text-lg md:text-2xl font-bold mb-2" data-aos="fade-right">{heading}</h3>
                            <p className="text-[#E3E3E3] text-sm md:text-base font-thin" data-aos="fade-left" data-aos-delay="100">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;
