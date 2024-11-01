import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import locationImage from '../../assets/images/location1.png';
import { CiBookmark } from "react-icons/ci";

const Location = () => {
    const address = "2JG5+MXP, Shampura, Kaval Bairasandra, Bengaluru, Karnataka 560032";

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="py-10 bg-inherit flex items-center justify-center">
            <div className="relative">
                {/* Image container with AOS animation */}
                <div data-aos="fade-up">
                    <img src={locationImage} alt="Location" className="w-full h-auto" />
                </div>

                {/* Overlay content with AOS animation */}
                <div className='flex items-center justify-center'>
                    <div
                        className="sm:absolute top-2 right-2 sm:top-5 mt-2 sm:right-5 bg-white rounded-lg p-2 sm:p-5 w-4/6 sm:w-[400px] md:w-2/6 h-auto sm:h-[100px] flex items-center justify-center shadow-lg"
                        data-aos="fade-up" // AOS animation for overlay
                    >
                        <div className="grid gap-2 text-center sm:text-left">
                            <p className="text-black text-sm">{address}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 ">
                                <p className="flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-[#0788AE] to-[#22AAD2] text-white p-2 rounded-md text-xs">
                                    <span><CiBookmark /></span> Save to project
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
