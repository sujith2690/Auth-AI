// import React from 'react'
// import { MdNavigateNext } from "react-icons/md";
// import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
// import { CiPhone } from "react-icons/ci";

// const Footer = () => {
//     const company = ['Homepage', 'About Us', 'Our Team', 'Portfolio', 'Article & News']
//     const support = ['Help Center', 'FAQ', 'Privacy Policy', 'Terms and Condition']

//     const contact = [
//         {
//             icon: <IoLocationOutline />,
//             content: '208,ShriSannidhiApartment,2nd Cross,ChikkappannaLayout,Hennur, Bengaluru- 560043'
//         },
//         {
//             icon: <IoMailOutline />,
//             content: 'hello@domainsite.com',
//         },
//         {
//             icon: <CiPhone />,
//             content: '+91 9620655510/+91 9845120432'
//         },
//     ]
//     return (
//         <>
//             <div className='flex items-center justify-center'>
//                 <div>
//                     <div className='flex '>
// <div className='w-2/6'>
//     <p>Our innovative solutions are designed not just to meet the demands of today but to anticipate
//         the challenges of tomorrow, ensuring that your business stays ahead of the curve.</p>
//     <div>
//     </div>
// </div>
// <div className='w-1/6'>
//     <p>Company</p>
//     <div>
//         {
//             company.map((item, i) => (
//                 <p className='flex items-center'>
//                     <MdNavigateNext /> <span>{item}</span>
//                 </p>
//             ))
//         }
//     </div>
// </div>
//                         <div className='w-1/6'>
//                             <p>Support</p>
//                             <div>
//                                 {
//                                     support.map((item, i) => (
//                                         <p className='flex items-center'>
//                                             <MdNavigateNext /> <span>{item}</span>
//                                         </p>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                         <div className='w-2/6'>
//                             <p>Contact</p>
//                             <div>
//                                 {
//                                     contact.map((item, i) => (
//                                         <p className='flex items-center'>
//                                             {item.icon} <span>{item.content}</span>
//                                         </p>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                         <div></div>
//                     </div>
//                 </div>
//             </div>


//             <footer className="p-6 dark:bg-gray-100 dark:text-gray-800">
//                 <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
//                     <div className="flex flex-col space-y-4">
//                         <h2 className="font-medium">Getting started</h2>
//                         <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
//                             <a rel="noopener noreferrer" href="#">Installation</a>
//                             <a rel="noopener noreferrer" href="#">Release Notes</a>
//                             <a rel="noopener noreferrer" href="#">Upgrade Guide</a>
//                             <a rel="noopener noreferrer" href="#">Using with Preprocessors</a>
//                             <a rel="noopener noreferrer" href="#">Optimizing for Production</a>
//                             <a rel="noopener noreferrer" href="#">Browser Support</a>
//                             <a rel="noopener noreferrer" href="#">IntelliSense</a>
//                         </div>
//                     </div>
//                     <div className="flex flex-col space-y-4">
//                         <h2 className="font-medium">Core Concepts</h2>
//                         <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
//                             <a rel="noopener noreferrer" href="#">Utility-First</a>
//                             <a rel="noopener noreferrer" href="#">Responsive Design</a>
//                             <a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
//                             <a rel="noopener noreferrer" href="#">Dark Mode</a>
//                             <a rel="noopener noreferrer" href="#">Adding Base Styles</a>
//                             <a rel="noopener noreferrer" href="#">Extracting Components</a>
//                             <a rel="noopener noreferrer" href="#">Adding New Utilities</a>
//                         </div>
//                     </div>
//                     <div className="flex flex-col space-y-4">
//                         <h2 className="font-medium">Customization</h2>
//                         <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
//                             <a rel="noopener noreferrer" href="#">Configuration</a>
//                             <a rel="noopener noreferrer" href="#">Theme Configuration</a>
//                             <a rel="noopener noreferrer" href="#">Breakpoints</a>
//                             <a rel="noopener noreferrer" href="#">Customizing Colors</a>
//                             <a rel="noopener noreferrer" href="#">Customizing Spacing</a>
//                             <a rel="noopener noreferrer" href="#">Configuring Variants</a>
//                             <a rel="noopener noreferrer" href="#">Plugins</a>
//                         </div>
//                     </div>
//                     <div className="flex flex-col space-y-4">
//                         <h2 className="font-medium">Community</h2>
//                         <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
//                             <a rel="noopener noreferrer" href="#">GitHub</a>
//                             <a rel="noopener noreferrer" href="#">Discord</a>
//                             <a rel="noopener noreferrer" href="#">Twitter</a>
//                             <a rel="noopener noreferrer" href="#">YouTube</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center px-6 pt-12 text-sm">
//                     <span className="dark:text-gray-600">© Copyright 1986. All Rights Reserved.</span>
//                 </div>
//             </footer>

//         </>
//     )
// }

// export default Footer


import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

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
    return (
        <footer className="bg-gray-900 text-white p-6 grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className='flex items-center justify-center'>
                <div className=' flex flex-col gap-2'>
                    <p className='flex text-center text-sm'>
                        Our innovative solutions are designed not just to meet the demands of today but to anticipate
                        the challenges of tomorrow, ensuring that your business stays ahead of the curve.
                    </p>
                    <div className='flex  justify-center gap-2'>
                        {
                            socialIcons.map((item, i) => (
                                <p  key={i} className='w-10 h-10 bg-[#22AAD2] rounded-full text-black flex items-center justify-center'>{item}</p>
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
        </footer>
    );
};

export default Footer;
