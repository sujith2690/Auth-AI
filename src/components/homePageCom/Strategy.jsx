import React from 'react';
import image1 from '../../assets/images/homePage/Vector1.png';
import image2 from '../../assets/images/homePage/Vector2.png';
import image3 from '../../assets/images/homePage/Vector3.png';

const Strategy = () => {
    const strategies = [
        {
            image: image1,
            subHead: 'Mobile Application Development',
            content: 'Achieve Mobile Supremacy through Custom App Development Solutions'
        },
        {
            image: image2,
            subHead: 'IT Consulting & Strategy',
            content: 'Connect IT and Business for Unparalleled Success with Our Expert Consulting, Aligning IT and Growth'
        },
        {
            image: image3,
            subHead: 'Website Application Development',
            content: 'Our full-stack development services provide end-to-end solutions'
        },
    ];

    return (
        <div className='bg-[#060F1A] flex items-center px-2 overflow-hidden'>
            <div className='max-w-[1640px] mx-auto p-4 py-4 flex flex-wrap items-center justify-center gap-4 lg:gap-10 mt-12 md:mt-0'>
                {strategies.map((item, i) => (
                    <div 
                        key={i} 
                        className='bg-[#0A1828] w-full h-full md:w-72 md:h-[150px] p-5 px-5 py-3 text-white rounded-xl flex flex-col justify-between' 
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="1000" // Duration of the animation
                        data-aos-delay={i * 100} // Delay based on index
                    >
                        <div className='flex items-center gap-2'>
                            <div>
                                <img 
                                    src={item.image} 
                                    alt={item.subHead} // Changed alt attribute to subHead for better accessibility
                                    className='object-contain w-12 h-12' 
                                    loading='lazy' 
                                />
                            </div>
                            <p className='text-lg md:text-xl'>{item.subHead}</p>
                        </div>
                        <p className='text-sm p-2 text-[#E3E3E3] font-thin text-start overflow-hidden'>
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Strategy;
