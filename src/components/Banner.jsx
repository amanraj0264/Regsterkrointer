import { MdStarRate } from "react-icons/md";

import banner from "../image/Group 3.png"
import banner2 from "../image/Group.png"

import { FaRegHandshake } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";

import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaPlayCircle } from "react-icons/fa";



export const Banner = () => {
    return (
        <>
            <div className="max-[1440px] mx-auto bg-gradient-to-r from-white-200 ">
                <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 px-4 ">

                    <div className="flex md:justify-start justify-center items-center h-[578px]">

                        <div className="space-y-5">
                            <div className="flex md:justify-start justify-center items-center gap-2">
                                <MdStarRate className=" text-[#F2C94C]" />
                                <span>Google Rating</span>
                                <div className="flex gap-2">
                                    <MdStarRate className=" text-sm bg-[#F2C94C] text-white" />
                                    <MdStarRate className="text-sm bg-[#F2C94C] text-white" />
                                    <MdStarRate className="text-sm bg-[#F2C94C] text-white" />
                                    <MdStarRate className="text-sm bg-[#F2C94C] text-white" />
                                    <MdStarRate className="text-sm bg-[#F2C94C] text-white" />
                                    <MdStarRate className="text-sm bg-[#F2C94C] text-white" />
                                </div>
                            </div>
                            <h1 className="lg:text-5xl md:text-3xl text-3xl md:text-start text-center">Your trusted partner for compliance business needs</h1>
                            <div className="flex justify-center md:justify-start">

                            </div>


                            <p className="text-subpara md:text-start text-center">An online business compliance platform that helps entrepreneurs and other individuals with various,<span className="font-semibold">registrations, tax filings,  </span> and other <span className="font-semibold">legal matters.</span></p>

                            <div className="flex lg:justify-start justify-center lg:gap-5 gap-3 mt-10">
                                <div className="flex gap-4">
                                   <HiOutlineSquares2X2 className="text-subpara text-2xl "/>
                                   <div>
                                   <p className="text-xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">4.5+</p>
                                   
                                   <p className="text-sm text-subpara">Customer Rating</p>
                                   </div>
                                </div>

                                <div className="flex gap-4">
                                   <FaUsers className="text-subpara text-2xl "/>
                                   
                                   <div>
                                   <p className="text-xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">20.000+</p>
                                   
                                   <p className="text-sm text-subpara">Clients</p>
                                   </div>
                                </div>

                                <div className="flex gap-4">
                                   <FaRegHandshake className="text-subpara text-2xl "/>
                                   
                                   <div>
                                   <p className=" font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent text-xl">99.8%</p>
                                   
                                   <p className="text-sm text-subpara">Financial Stability</p>
                                   </div>
                                </div>

                                

                            </div>

                            <div className="flex lg:justify-start justify-center  gap-5 mt-10">
                                <button className="font-bold text-base bg-primary py-2 px-6 text-white">Take An Expert</button>
                                <button className="flex items-center gap-3"><FaPlayCircle className="text-red-600 text-2xl"/>See how it works</button>
                            </div>

                            <div />
                        </div>
                    </div>

                    <div className="flex md:justify-start justify-center items-center">
                        <div className="relative">
                            <img className="w-full" src={banner} alt="" />


                            <div className=" lg:block hidden absolute top-0 right-0 z-30">
                                <div className=" space-y-4">
                                    <p className="py-2 px-4 bg-white rounded-xl">Annual Compliance</p>
                                    <p className="py-2 px-4 bg-white rounded-xl">Payroll Services</p>
                                    <p className="py-2 px-4 bg-white rounded-xl">Company Formation</p>
                                    <p className="py-2 px-4 bg-white rounded-xl">Annual Compliance</p>
                                </div>
                            </div>

                            <div className=" lg:block hidden absolute right-0 bottom-0 ">
                                <img className="w-full" src={banner2} alt="" />
                            </div>


                        </div>
                    </div>

                </div>
            </div>







        </>
    );
}