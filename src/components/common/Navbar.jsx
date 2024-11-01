import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
    import { Link, useLocation } from 'react-router-dom';
import Buttons from "./Buttons";
import logo from '../../assets/images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About Us', href: '/about', current: false },
        { name: 'Services', href: '/services', current: false, dropDown: true },
        { name: 'Contact Us', href: '/contact', current: false },
        { name: 'Faq', href: '/faq', current: false },
    ];

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <section className="bg-transparent shadow-sm">
            <div className="flex items-center justify-between w-full p-2 md:p-4 lg:px-10">
                <div>
                    <img src={logo} loading="lazy" alt="Logo" />
                </div>
                <div className="hidden lg:flex items-center justify-end gap-1 md:gap-6 md:w-1/2 whitespace-nowrap">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative">
                            <Link
                                onClick={() => {
                                    if (item.dropDown) {
                                        handleDropdownToggle();
                                    } else {
                                        setIsDropdownOpen(false);
                                    }
                                }}
                                to={item.dropDown ? "#" : item.href}
                                className={classNames(
                                    item.href === location.pathname
                                        ? 'text-white cursor-pointer'
                                        : 'text-[#B5B3B3] cursor-pointer hover:text-white transition',
                                    'rounded-md px-3 py-2 text-sm font-medium flex gap-1'
                                )}
                            >
                                {item.name} {item.dropDown && <FaAngleDown />}
                            </Link>
                            {item.dropDown && isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-gradient-to-r from-[#0788AE] to-[#22AAD2] rounded-md shadow-lg z-50">
                                    <Link onClick={() => setIsDropdownOpen(false)} to="/mobile_application" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-200 hover:rounded">
                                        Mobile Application
                                    </Link>
                                    <Link onClick={() => setIsDropdownOpen(false)} to="/web_application" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-200 hover:rounded">
                                        Web Application
                                    </Link>
                                    <Link onClick={() => setIsDropdownOpen(false)} to="/services" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-200 hover:rounded">
                                        Service Details
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="hidden lg:flex lg:pr-24">
                        <Buttons content={'Get Started'} />
                    </div>
                </div>

                <div className="lg:hidden flex items-center md:mr-16 p-5">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none text-white"
                    >
                        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="flex flex-col items-center mb-2 md:mb-0 text-white w-full p-2 md:py-4 md:px-6 space-y-2 lg:hidden">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative w-full text-center">
                            <Link
                                onClick={() => {
                                    if (item.dropDown) {
                                        setIsDropdownOpen(!isDropdownOpen);
                                    } else {
                                        setIsMenuOpen(false);
                                        setIsDropdownOpen(false);
                                    }
                                }}
                                to={item.dropDown ? "#" : item.href}
                                className={classNames(
                                    item.href === location.pathname
                                        ? 'text-white cursor-pointer'
                                        : 'text-[#B5B3B3] cursor-pointer hover:text-white transition',
                                    'rounded-md px-3 py-2 text-sm font-medium flex gap-1 justify-center'
                                )}
                            >
                                {item.name} {item.dropDown && <FaAngleDown />}
                            </Link>
                            {item.dropDown && isDropdownOpen && (
                                <div className="mt-1 w-full bg-gradient-to-r from-[#0788AE] to-[#22AAD2] rounded-md shadow-lg">
                                    <Link onClick={() => setIsMenuOpen(false)} to="/mobile_application" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-200">
                                        Mobile Application
                                    </Link>
                                    <Link onClick={() => setIsMenuOpen(false)} to="/web_application" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-200">
                                        Web Application
                                    </Link>
                                    <Link onClick={() => setIsMenuOpen(false)} to="/services" className="block px-4 py-2 text-sm text-white hover:text-black hover:bg-gray-200">
                                        Service Details
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <Buttons content={'Get Started'} />
                </div>
            )}
        </section>
    );
};

export default Navbar;
