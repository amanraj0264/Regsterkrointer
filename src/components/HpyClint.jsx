
import patner from "../image/Pagination.png"
import form from "../image/form.png"

import { FaArrowRight } from "react-icons/fa";

export const HpyClint = () => {
    return (
        <>
            <div className="max-w-[1400px] mx-auto">

                <div className="text-center py-12">
                    <h1 className="text-3xl text-heading font-bold">Our Happy Clients</h1>
                    <div className="flex justify-center">
                        <p className="text-subpara  mt-5 w-2/4 text-base">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                    </div>
                </div>
                <img src={patner} alt="" />



                <div className="flex justify-center items-center gap-5 ">
                    <a className="text-primary" href="">See more</a>
                    <FaArrowRight className="text-primary" />
                </div>
            </div>


            <div className="py-14 bg-[#FFA229] mt-10">
                <div className="max-w-[1300px] mx-auto">


                    <div div className="flex justify-center gap-20 flex-wrap">
                        <div className="flex items-center gap-2">

                            <img className="flex item-center py-3 px-3 rounded-full bg-[#EB5757]" src={form} alt="" />
                            <h5 className="text-lg"> Fill up Application Form</h5>
                        </div>

                        <div className="flex items-center gap-2 ">

                            <img className="flex item-center py-3 px-3 rounded-full bg-[#27AE60]" src={form} alt="" />
                            <h5 className="text-lg"> Fill up Application Form</h5>
                        </div>


                        <div className="flex items-center gap-2">

                            <img className="flex item-center py-3 px-3 rounded-full bg-[#F2994A]" src={form} alt="" />
                            <h5 className="text-lg"> Fill up Application Form</h5>
                        </div>


                        <div className="flex items-center gap-2">

                            <img className="flex item-center py-3 px-3 rounded-full bg-[#828282]" src={form} alt="" />
                            <h5 className="text-lg"> Fill up Application Form</h5>
                        </div>
                    </div>




                </div>
            </div>
        </>

    )
}


