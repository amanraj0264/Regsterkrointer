import { FaArrowCircleRight } from "react-icons/fa";
export const Services = () => {
    const services = [
        {
            img: "/img/1.png",
            title: "Company Formation",
            description: "Build web-based solutions that enhance customer experience.",
            link: "#",
        },
        {
            img: "/img/2.png",
            title: "Company Secretarial Services",
            description: "Make data-driven decisions and utilize technology to reach business goals.",
            link: "#",
        },
        {
            img: "/img/3.png",
            title: "Virtual Office Address",
            description: "Foster customer relationships by effectively serving your market.",
            link: "#",
        },
        {
            img: "/img/4.png",
            title: "Annual Compliance Services",
            description: "Turn your ideas into modern products with our design experts.",
            link: "#",
        },
        {
            img: "/img/5.png",
            title: "Payroll Services",
            description: "Expand your business across the globe with minimal effort.",
            link: "#",
        },
        {
            img: "/img/6.png",
            title: "Bookkeeping Services",
            description: "Steering user behaviours with creative design, data insights & technology.",
            link: "#",
        },
    ]

    return (
        <>
            <section className="w-full bg-[#FAFAFA] py-16 px-4 md:px-6 lg:px-8">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-[#EB8D15] font-medium mb-2">WELCOME TO REGISTERKARO.IN</p>
                        <h2 className="text-3xl font-bold text-heading">Explore Our Services</h2>
                    </div>

                    {/* Services Grid */}
                    <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
                            >
                                {/* img container - centered */}
                                <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-lg  text-2xl">
                                    <img src={service.img} />
                                    
                                </div>

                                {/* Content - already inherits text-center */}
                                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                                <p className="text-para text-base mb-4">{service.description}</p>

                                {/* Learn More Link - centered */}
                                <a
                                    href={service.link}
                                    className="inline-flex items-center justify-center text-[#001038] hover:text-[#001039] font-medium"
                                >
                                    Learn more
                                    <FaArrowCircleRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* See All Services Button */}
                    <div className="text-center mt-12">
                        {/* <Button variant="default" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                            See All Services
                        </Button> */}
                    </div>
                </div>
            </section>
        </>
    )
}