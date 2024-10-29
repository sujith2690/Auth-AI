
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

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
        { name: 'Pages', href: '/pages', current: false, dropDown: true },
        { name: 'Contact Us', href: '/contact', current: false },
    ]

    return (
        <section className="bg-transparent shadow-sm">
            <div className="flex items-center justify-between w-full p-4 px-6 md:px-10">
                <div>
                    <img src="images/logo.png" alt="" />
                </div>
                <div className="hidden md:flex items-center justify-end gap-6 md:w-1/2 whitespace-nowrap">
                    {navigation.map((item) => (
                        <Link key={item.name}
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
                    <div className="hidden md:flex lg:pr-40">
                        <button className=" bg-gradient-to-r from-[#0788AE] to-[#22AAD2] rounded-full text-white px-8 py-1 text-sm border-0 border-[#A0EAFF]">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex items-center mr-16">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl focus:outline-none text-white"
                    >
                        ☰
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-center text-white w-full py-4 px-6 space-y-4 md:hidden ">
                    {navigation.map((item) => (
                        <Link key={item.name}
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
                    <button className=" bg-gradient-to-r from-[#0788AE] to-[#22AAD2] rounded-full text-white px-8 py-1 text-sm border-0 border-[#A0EAFF]">
                        Get Started
                    </button>
                </div>
            )}
        </section>
    );
};

export default Navbar;
