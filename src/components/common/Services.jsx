import React from 'react';
import Buttons from './Buttons';
import web from '../../assets/images/services/serviceItems/web.png';
import mobile from '../../assets/images/services/serviceItems/mobile.png';
import cloud from '../../assets/images/services/serviceItems/cloud.png';
import ai from '../../assets/images/services/serviceItems/ai.png';
import data from '../../assets/images/services/serviceItems/data.png';
import it from '../../assets/images/services/serviceItems/it.png';
import chat from '../../assets/images/services/serviceItems/chat.png';
import analysis from '../../assets/images/services/serviceItems/analysis.png';
import brain from '../../assets/images/services/serviceItems/brain.png';

const Services = () => {
    const serviceItems = [
        { image: web, heading: 'Website Application Development', content: 'Our full-stack development services provide end-to-end solutions, combining front-end and back-end expertise for a future-proof digital presence.', data: 'Website' },
        { image: mobile, heading: 'Mobile Application Development', content: 'Achieve Mobile Supremacy through Custom App Development Solutions that Combine User-Centric Design, Seamless Functionality, and Sustainable Business Growth', data: 'Mobile Application' },
        { image: cloud, heading: 'Cloud Migration Services', content: 'Seamlessly transition your business to the cloud with expert migration strategies that minimize risk and maximize performance.', data: 'Cloud Migration' },
        { image: ai, heading: 'AI Development', content: 'Unlock Next-Gen Customer Experience with Expertly Crafted Conversational AI', data: 'AI Development' },
        { image: data, heading: 'Data Science Services', content: 'Accelerate Business Growth and Unlock New Revenue Streams with Our Expert Data Science Solutions', data: 'Data Science' },
        { image: it, heading: 'IT Consulting & Strategy', content: 'Connect IT and Business for Unparalleled Success with Our Expert Consulting, Aligning IT Infrastructure with Business Goals', data: 'IT Consulting' },
        { image: chat, heading: 'Chatbot Development', content: 'Chatbots to Re-define Customer Interaction, Drive Revenue, and Future-Proof Your Business', data: 'Chatbot Development' },
        { image: analysis, heading: 'Data Analytics & Business Intelligence', content: 'Our cutting-edge analytics and Business Intelligence capabilities distil complex data into clear, actionable insights', data: 'Data Analysis' },
        { image: brain, heading: 'Natural Language Processing (NLP)', content: 'Our advanced NLP capabilities empower applications to decipher, analyze, and respond to human language', data: 'Natural Language' },
    ];

    return (
        <div className='flex flex-col items-center justify-center p-4 bg-[#050E17]'>
            <div className='flex flex-col gap-4 p-4'>
                <p className="text-[#22AAD2] text-center text-sm md:text-lg">― Our Services</p>
                <h3 className='flex flex-col text-center text-2xl md:text-4xl'>
                    From Concept to Reality: Building <span>Tomorrow's Solutions Today</span>
                </h3>
            </div>

            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                {
                    serviceItems.map((item, i) => (
                        <div
                            key={i}
                            className='flex flex-col items-center justify-between bg-[#0A1828] rounded-xl p-5 w-full h-full max-w-[280px] text-center gap-3'
                            data-aos="fade-up" // AOS animation
                            data-aos-duration="1000" // Duration of the animation
                            data-aos-delay={i * 100} // Staggering effect for delay
                        >
                            <div>
                                <img src={item.image} className='object-contain w-10 h-10' alt={`${item.heading} icon`} loading='lazy' />
                            </div>
                            <h4 className='text-lg'>{item.heading}</h4>
                            <p className='text-sm tracking-tighter font-extralight'>{item.content}</p>
                            <Buttons content={'Learn more'} data={item.data} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
