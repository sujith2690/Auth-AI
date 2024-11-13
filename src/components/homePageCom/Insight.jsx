import React, { useEffect } from 'react';
import image1 from '../../assets/images/homePage/explore1.png';
import image2 from '../../assets/images/homePage/explore2.png';
import image3 from '../../assets/images/homePage/explore3.png';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Insight = () => {
    const content = [
        {
            title: 'Data Analytics',
            image: image1,
            date: 'Oct 12, 2024',
            heading: 'Unleashing Data Analytics: Driving Business Growth',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus...',
        },
        {
            title: 'E-Commerce',
            image: image2,
            date: 'Oct 15, 2024',
            heading: 'E-commerce Trends: Adapting to Digital Consumers',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus...',
        },
        {
            title: 'Cyber Security',
            image: image3,
            date: 'Oct 16, 2024',
            heading: 'Cybersecurity Challenges: Strategies for Protection',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus...',
        },
    ];

    useEffect(() => {
        // Initialize AOS
        AOS.init();
    }, []);

    return (
        <div className='bg-[#132030] flex flex-col items-center justify-center'>
            <div>
                <div className='p-5 flex flex-col gap-2'>
                    <h4 className='text-[#22AAD2] text-sm md:text-2xl'>― Our Insight</h4>
                    <h2 className='text-lg md:text-4xl'>Explore the Edge of Innovation</h2>
                </div>
                <div>
                    {/* <div className='grid place-items-center grid-cols-2 md:grid-cols-3 gap-5 p-5'> */}
                    <div className='flex flex-wrap items-center justify-center gap-5 p-4 lg:p-5'>
                        {content.map((item, i) => (
                            <div
                                key={i}
                                className="md:w-2/3 lg:max-w-sm overflow-hidden shadow-lg bg-[#0A1828] rounded-3xl relative"
                                data-aos="fade-up" // AOS animation
                                data-aos-duration="1000" // Duration of the animation
                                data-aos-delay={i * 100} // Delay based on index
                            >
                                <img className="w-full" src={item.image} alt={item.heading} loading='lazy' />
                                <div className="absolute top-2 left-2 p-2">
                                    <span className="text-black text-sm bg-[#22AAD2] px-2 py-1 rounded-full">{item.title}</span>
                                </div>
                                <div className="px-6 py-2">
                                    <span className="text-sm text-[#22AAD2]">{item.date}</span>
                                    <div className="font-bold sm md:text-lg mb-2">{item.heading}</div>
                                    <p className="text-gray-700 text-base">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insight;
