
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import Buttons from "./Buttons";
import logo from '../../assets/images/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About Us', href: '/about', current: false },
        { name: 'Services', href: '/services', current: false, dropDown: true },
        // { name: 'Pages', href: '/pages', current: false, dropDown: true },
        { name: 'Contact Us', href: '/contact', current: false },
        { name: 'Faq', href: '/faq', current: false },
    ]

    return (
        <section className="bg-transparent shadow-sm">
            <div className="flex items-center justify-between w-full p-2 md:p-4 lg:px-10">
                <div>
                    <img src={logo} loading="lazy" alt="" />
                </div>
                <div className="hidden lg:flex items-center justify-end gap-1 md:gap-6 md:w-1/2 whitespace-nowrap">
                    {navigation.map((item) => (
                        <Link key={item.name}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to={item.href}
                            className={classNames(
                                item.href === location.pathname
                                    ? 'text-white cursor-pointer'
                                    : ' text-[#B5B3B3] cursor-pointer hover:text-white transition',
                                'rounded-md px-3 py-2 text-sm font-medium flex gap-1'
                            )}
                        >
                            {item.name} {item.dropDown ? <span><FaAngleDown /></span> : ''}
                        </Link>
                    ))}
                    <div className="hidden lg:flex lg:pr-24">
                        <Buttons content={'Get Started'} />
                    </div>
                </div>

                <div className="lg:hidden flex items-center md:mr-16">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none text-white"
                    >
                        {/* ☰ */}
                        {isMenuOpen ?  <IoClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-center mb-2 md:mb-0 text-white w-full p-2 md:py-4 md:px-6 space-y-2 lg:hidden ">
                    {navigation.map((item) => (
                        <Link key={item.name}
                            onClick={() => {
                                console.log('Menu item clicked');
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            to={item.href}
                            className={classNames(
                                item.href === location.pathname
                                    ? 'text-white cursor-pointer'
                                    : ' text-[#B5B3B3] cursor-pointer hover:text-white transition',
                                'rounded-md px-3 py-2 text-sm font-medium flex gap-1'
                            )}
                        >
                            {item.name} {item.dropDown ? <span><FaAngleDown /></span> : ''}
                        </Link>
                    ))}
                    <Buttons content={'Get Started'} />
                </div>
            )}
        </section>
    );
};

export default Navbar;
