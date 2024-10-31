import React, { useState, useEffect } from 'react';
import './Carousal.css'
import image1 from '../../assets/images/carousel/Image1.png'
import image2 from '../../assets/images/carousel/Image2.png'
import image3 from '../../assets/images/carousel/Image3.png'
import image4 from '../../assets/images/carousel/Image4.png'
import image5 from '../../assets/images/carousel/Image5.png'
import image6 from '../../assets/images/carousel/Image6.png'

import prev from '../../assets/images/carousel/previous.png'

const data = [
    {
        image: image1,
        quote: '“Partnering with AUTH AI SOLUTIONS has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”',
        name: 'John Doe',
        position: 'CEO of Innovative Tech Corp',
    },
    {
        image: image4,
        quote: '“Partnering with AUTH AI SOLUTIONS has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”',
        name: 'John Doe',
        position: 'CEO of Innovative Tech Corp',
    },
    {
        image: image2,
        quote: '“The exceptional team at AUTH AI SOLUTIONS took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”',
        name: 'Sarah Jardin',
        position: 'Director of Operations at Green Future Ltd',
    },
    {
        image: image3,
        quote: '“AUTH AI SOLUTIONS stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”',
        name: 'Velicia Jamez',
        position: 'CTO of Health Innovations Group',
    },

    {
        image: image5,
        quote: '“The exceptional team at AUTH AI SOLUTIONS took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”',
        name: 'Sarah Jardin',
        position: 'Director of Operations at Green Future Ltd',
    },
    {
        image: image6,
        quote: '“AUTH AI SOLUTIONS stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”',
        name: 'Velicia Jamez',
        position: 'CTO of Health Innovations Group',
    },
];

const Carousel = () => {
    const [visibleData, setVisibleData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Initialize the first three items
        setVisibleData(data.slice(0, 3));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false); // Remove animation after 300ms
        }, 300); // Match this duration with your animation duration

        return () => clearTimeout(timer);
    }, [currentIndex]);
    const handlePrevious = () => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + data.length) % data.length;
            const newData = [
                ...data.slice(newIndex, newIndex + 3),
                ...data.slice(0, Math.max(0, newIndex + 3 - data.length))
            ];
            setVisibleData(newData.slice(0, 3));
            return newIndex;
        });
        setIsAnimating(false)
    };

    const handleNext = () => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % data.length;
            const newData = [
                ...data.slice(newIndex, newIndex + 3),
                ...data.slice(0, Math.max(0, newIndex + 3 - data.length))
            ];
            setVisibleData(newData.slice(0, 3));
            return newIndex;
        });
    };

    return (
        <div>
            <div className='flex items-center justify-between gap-10 p-2'>
                <button onClick={handlePrevious} className='hidden lg:flex items-center justify-center bg-[#179CC4] w-5 h-5 p-1 lg:w-12 lg:h-12 rounded-full border-2 border-white'>
                    <img src={prev} alt="Previous" loading='lazy' />
                </button>
                <div className='grid place-items-center grid-cols-3 gap-10 md:gap-5'>
                    {visibleData.map((item, i) => (
                        <div key={i} className={`bg-[#0A1828] h-50 md:w-80 md:h-80 text-center flex flex-col gap-3 md:gap-2 items-center justify-center p-3 rounded-2xl ${isAnimating ? 'fade' : 'fade-active'}`}>
                            <p className='italic text-[#B5B3B3] hidden md:flex text-sm md:text-base'>{item.quote}</p>
                            <img src={item.image} alt={item.name} loading='lazy' />
                            <p className='text-white text-sm lg:text-lg'>{item.name}</p>
                            <p className='text-[#22AAD2] text-sm lg:text-base'>{item.position}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className='hidden lg:flex items-center justify-center bg-[#179CC4] w-5 h-5 p-1 lg:w-12 lg:h-12 rotate-180 rounded-full border-2 border-white'>
                    <img src={prev} alt="Next" loading='lazy' />
                </button>
            </div>
            <div className='flex items-center justify-center gap-5 p-5 mt-5'>
                <button onClick={handlePrevious} className='flex lg:hidden items-center justify-center bg-[#179CC4] w-5 h-5 p-1 lg:w-14 lg:h-14 rounded-full border-2 border-white'>
                    <img src={prev} alt="Previous" loading='lazy' />
                </button>
                {data.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i >= currentIndex && i < currentIndex + 1 ? 'bg-[#179CC4]' : 'bg-slate-400'}`}></div>
                ))}
                <button onClick={handleNext} className='flex lg:hidden  items-center justify-center bg-[#179CC4] w-5 h-5 p-1 lg:w-16 lg:h-16 rotate-180 rounded-full border-2 border-white'>
                    <img src={prev} alt="Next" loading='lazy'/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;