import a1 from "../image/a1.png"
import i1 from "../image/i1.png"
import phone from "../image/phone.png"

export const MobileServices = () => {
    return (
        <>

            <div>
                <div className="bg-[#1B3B5D] px-6  mb-10 md:px-16 ">
                    <div className="max-w-[1300px] mx-auto">
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                            {/* Left Column */}

                           <div className="flex justify-center items-center py-10">
                           <div className="text-white">
                                <h1 className="text-3xl font-bold">Manage Your Services by your</h1>
                                <p className="text-base text-[#AAB5CD]">Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>
                                <p className="mt-10">Get the App</p>
                                <div className="lg:block hidden">
                                <div className="  flex mt-5">
                                    
                                    <img src={a1} alt="" />
                                    <img src={i1} alt="" />
                                </div>
                                </div>
                            </div>
                           </div>

                            <div >
                                <img
                                    img src={phone}
                                    alt="Video-img"

                                />



                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}