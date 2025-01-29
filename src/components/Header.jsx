import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import React, { useState } from 'react';

import logo from "../image/logo_register.png"
import logo_top from "../image/centa.png"
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
export const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>


            {/* navbar top section start*/}
            <div className="max-[1440px] mx-auto   bg-primary">
                <div className="max-w-[1300px] mx-auto md:block hidden">
                    <div className=" text-white h-[44px] flex justify-end items-center  space-x-10 px-6">

                        <span className="flex  items-center justify-center ">
                            <MdEmail />
                            <a className="text-sm font-normal  border-r-2 px-3" href="#">www.registerkaro.in</a>
                        </span>

                        <span className="flex items-center justify-center ">
                            <MdPhone />
                            <a className="text-sm font-normal  border-r-2 px-3" href="#">+918447746183</a>
                        </span>


                        <div className="flex space-x-2">
                            <FaInstagram />
                            <FaFacebook />
                            <FaTwitter />
                            <FaYoutube />

                        </div>

                    </div>

                </div>

            </div>
            {/* navbar top section end*/}


            {/* navbar start */}
            <nav className="bg-white ">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 w-full " />

                        </div>

                        {/* Right Section: Navigation + Icons */}
                        <div className="flex items-center ">
                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center lg:space-x-10 space-x-2">
                                <a href="#" className="text-heading hover:text-[#FFA229] font-medium">
                                    Home
                                </a>
                                <a href="#" className="text-heading hover:text-[#FFA229] font-medium">
                                   Our Services
                                </a>
                                <a href="#" className="text-heading hover:text-[#FFA229] font-medium">
                                    Blog
                                </a>
                                <a href="#" className="text-heading hover:text-[#FFA229] font-medium">
                                    Contact us
                                </a>
                                <a href="#" className="text-heading hover:text-[#FFA229]  font-medium">
                                    About us
                                </a>
                            </div>

                            {/* Search Icon */}
                            <FiSearch className="hidden md:block text-gray-700 w-5 h-5 cursor-pointer ml-6" />

                            {/* Talk to Expert Button */}
                            <button className="hidden md:block bg-[#FFA229] text-white px-4 py-2 rounded-lg hover:bg-[#ff9b1a] ml-6">
                                Talk to Expert
                            </button>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-gray-700 hover:text-blue-600 focus:outline-none"
                                >
                                    {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-4 pt-4 pb-3 space-y-1">
                            <a href="#" className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                Home
                            </a>
                            <a href="#" className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                Services
                            </a>
                            <a href="#" className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                Blog
                            </a>
                            <a href="#" className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                Contact
                            </a>
                            <a href="#" className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                                About
                            </a>
                        </div>
                        <div className="px-4 py-3 border-t border-gray-200">
                            <button className="bg-orange-500 w-full text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                                Talk to Expert
                            </button>
                        </div>
                    </div>
                )}
            </nav>
            {/* navbar end */}

        </>
    );
}