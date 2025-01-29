import About_img from "../image/About_img.png"
import { FaArrowCircleRight } from "react-icons/fa";
export const About = () => {
    return (
        <>





            <div >
                <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-10 px-4 py-20">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-[#EB8D15] font-medium tracking-wider">WELCOME TO REGISTERKARO.IN</p>
                        <h2 className="lg:text-3xl text-2xl font-bold text-gray-900">
                            About <span className="text-[#FFA229]">Register Karo</span>
                        </h2>
                        <div className="space-y-4 text-para">
                            <p className="text-base">
                                We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                                their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                                customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.

                                I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                            <p className="text-base ">
                                I would strongly recommend their services to any organization that is looking for solid, reliable, and
                                predictable outcomes.
                            </p>
                        </div>
                        <button className="flex items-center bg-primary py-2 px-4 text-white gap-4 rounded"> Learn More <FaArrowCircleRight /></button>

                    </div>

                    {/* Image */}
                    <div className="flex md:justify-start justify-center">
                        <img className="lg:w-full h-full" src={About_img} alt="About_img" />
                    </div>
                </div>
            </div>


        </>
    );
}