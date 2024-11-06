import React, { useEffect } from 'react';
import image from '../../assets/images/Background Image3.png';
import image1 from '../../assets/images/Background Image 1.png';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useNavigate } from 'react-router-dom';

const Something = () => {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init(); // Initialize AOS on component mount
    }, []);

    const handleNavigate = () => {
        navigate(`/contact`);
    }
    return (
        <div className='bg-inherit py-24 md:mt-0 md:p-8 lg:p-12'>
            <div className='relative flex items-center justify-center'>
                <img className='md:w-5/6 md:max-h-[500px] object-cover' src={image} alt="Background" loading='lazy' />
                <div className='absolute inset-0 bg-[#060F1AE5] opacity-90'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <div
                        className='rounded-3xl bg-gradient-to-r from-[#0788AEE5] to-[#22AAD2E5] gap-2 md:gap-6 flex flex-col items-center justify-center relative p-1 w-5/6 md:p-5'
                        data-aos="fade-up" // AOS animation for the container
                        data-aos-duration="1000" // Duration of the animation
                    >
                        <img
                            className='absolute inset-0 md:w-full md:h-full object-cover opacity-10'
                            loading='lazy'
                            src={image1}
                            alt="Overlay Image"
                        />
                        <h1
                            className='text-lg md:text-2xl text-white font-extrabold lg:text-6xl flex flex-col text-center items-center justify-center p-2 z-40'
                            data-aos="zoom-in" // AOS animation for the heading
                            data-aos-duration="800"
                        >
                            Let's Build Something Amazing <span>Together! Connect with Us Today!</span>
                        </h1>
                        <p
                            className='text-[#E3E3E3] text-sm text-center flex flex-col md:flex-row mb-2 md:w-1/2 z-40'
                            data-aos="fade-up" // AOS animation for the paragraph
                            data-aos-duration="800"
                            data-aos-delay="200" // Delay for this element
                        >
                            Join us on a journey into the future of business—where innovation meets responsibility and success is built on a foundation of trust. Together, let’s unlock the potential of AI and transform your vision into reality.
                        </p>
                        <button
                            className='cursor-pointer bg-black rounded-full text-white px-8 py-1 text-sm border-0 border-[#A0EAFF] z-40'
                            data-aos="fade-up" // AOS animation for the button
                            data-aos-duration="800"
                            data-aos-delay="400" // Delay for this element
                            onClick={handleNavigate}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Something;
