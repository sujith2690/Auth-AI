
import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const company = ['Homepage', 'About Us', 'Our Team', 'Portfolio', 'Article & News'];
const support = ['Help Center', 'FAQ', 'Privacy Policy', 'Terms and Condition'];
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
const socialIcons = [<FaFacebookF />, <FaInstagram />, <FaYoutube />, <FaTwitter />]

const Footer = () => {
    const { pathname } = useLocation();
    const path = pathname.split('/').filter(Boolean).pop();
    console.log(path, '-----------path')

    return (
        <footer className='bg-inherit '>
            <div className='flex items-center justify-center'>
                <div className=" bg-[#060F1A] text-white p-2 md:p-6 grid grid-cols-1 sm:grid-cols-4 gap-2 w-5/6 ">
                    <div className='flex items-center justify-center w-5/6'>
                        <div className=' flex flex-col gap-2'>
                            <p className='flex text-center text-sm'>
                                {
                                    path == 'contact' ? 'Ready to embark on your AI journey? Reach out to us today!' : "Our innovative solutions are designed not just to meet the demands of today but to anticipate the challenges of tomorrow, ensuring that your business stays ahead of the curve."
                                }

                            </p>
                            <div className='flex  justify-center gap-2'>
                                {
                                    socialIcons.map((item, i) => (
                                        <p key={i} className='w-10 h-10 bg-[#22AAD2] rounded-full text-black flex items-center justify-center'>{item}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Company Section */}
                    <div className=''>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {company.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2 text-xl text-[#22AAD2] "><MdNavigateNext /></span>
                                    <span className='text-[#B5B3B3] text-sm'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className=''>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            {support.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2 text-xl text-[#22AAD2] "><MdNavigateNext /></span>
                                    <span className='text-[#B5B3B3] text-sm'>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
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
            <div className='flex items-center justify-center bg-[#0D151F] p-3 '>
                <div>
                    <p className='text-[10px] md:text-sm text-[#E0E2E259] text-center'>Copyright © 2024 Haidezign. All Right Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
