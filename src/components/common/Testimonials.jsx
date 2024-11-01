import React, { useEffect } from 'react';
import Carousel from './Carousel';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Testimonials = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS on component mount
    }, []);

    return (
        <div className='flex flex-col items-center justify-center p-5 overflow-auto bg-inherit'>
            <div className='p-5 flex flex-col gap-3'>
                <div
                    data-aos="fade-up" // AOS animation for the subtitle
                    data-aos-duration="800" // Duration of the animation
                >
                    <h4 className='text-[#22AAD2] text-center text-sm md:text-2xl'>― Our Testimonials</h4>
                </div>
                <h5
                    className='flex flex-col text-xl md:text-2xl lg:text-4xl text-center'
                    data-aos="fade-up" // AOS animation for the title
                    data-aos-duration="800"
                    data-aos-delay="200" // Delay for this element
                >
                    What They Say About Us
                </h5>
            </div>
            <div>
                <div
                    data-aos="fade-up" // AOS animation for the carousel
                    data-aos-duration="800"
                    data-aos-delay="400" // Delay for this element
                >
                    <Carousel />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
