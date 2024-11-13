import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { MdNavigateNext } from "react-icons/md";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const company = [
    { name: 'Homepage', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Article & News', path: '/articles' },
];
const support = [
    { name: 'Help Center', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/contact' },
    { name: 'Terms and Condition', path: '/terms-and-conditions' },
];
const contact = [
    {
        icon: <IoLocationOutline />,
        content: '208, Shri Sannidhi Apartment, 2nd Cross, Chikkappanna Layout, Hennur, Bengaluru- 560043',
    },
    {
        icon: <IoMailOutline />,
        content: 'hello@domainsite.com',
    },
    {
        icon: <CiPhone />,
        content: '+91 9620655510 / +91 9845120432',
    },
];
const socialIcons = [<FaFacebookF />, <FaInstagram />, <FaYoutube />, <FaTwitter />];

const Footer = () => {
    const { pathname } = useLocation();
    const path = pathname.split('/').filter(Boolean).pop();
    console.log(path, '-----------path');

    // Initialize AOS
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <footer className='bg-inherit'>
            <div className='flex items-center justify-center'>
                <div
                    className="bg-[#060F1A] text-white p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:w-5/6"
                    data-aos="fade-up" // AOS animation for the whole footer
                    data-aos-duration="500" // Duration of the animation
                >
                    <div className='flex items-center justify-center p-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='flex text-center text-sm'>
                                {
                                    path === 'contact'
                                        ? 'Ready to embark on your AI journey? Reach out to us today!'
                                        : "Our innovative solutions are designed not just to meet the demands of today but to anticipate the challenges of tomorrow, ensuring that your business stays ahead of the curve."
                                }
                            </p>
                            <div className='flex items-center justify-center flex-wrap gap-2 md:gap-4'>
                                {
                                    socialIcons.map((item, i) => (
                                        <p key={i} className='w-10 h-10 bg-[#22AAD2] rounded-full text-black flex items-center justify-center'>{item}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-3 lg:gap-16'>
                        {/* Company Section */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                {company.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="mr-2 text-xl text-[#22AAD2]"><MdNavigateNext /></span>
                                        <Link to={item.path} className='text-[#B5B3B3] text-sm hover:text-[#22AAD2] transition duration-300'>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                {support.map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="mr-2 text-xl text-[#22AAD2]"><MdNavigateNext /></span>
                                        <Link to={item.path} className='text-[#B5B3B3] text-sm hover:text-[#22AAD2] transition duration-300'>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className='w-5/6' data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-4">
                            {contact.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2 text-xl text-[#22AAD2]">{item.icon}</span>
                                    <span className='text-[#B5B3B3] text-sm'>{item.content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center bg-[#0D151F] p-3'>
                <div>
                    <p className='text-sm md:text-sm text-[#E0E2E259] text-center'>Copyright © 2024 Haidezign. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
