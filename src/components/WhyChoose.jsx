export const WhyChoosejsx = () => {

  
    return (

        <>
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        <p className="text-orange-500 font-medium">WHY REGISTERKARO.IN</p>
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Register Karo</h2>
                        <p className="text-gray-600 max-w-3xl">
                            It is with consistent services and results that build trust with the people and that in turn help us to
                            serve the business better.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className={`${feature.bgColor} p-6 rounded-lg space-y-4 text-center`}>
                                

                                <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-lg  text-2xl ">
                                <img src={feature.img} />
                                    
                                </div>
                                <h3 className="font-semibold text-xl">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}




const features = [
    {
        img:"/img/Symbol1.png",
        title: "Confidential & Safe",
        description: "All your private information is safe with us",
        bgColor: "bg-red-50",
    },
    {
        img:"/img/Symbol2.png",
        title: "No Hidden Fee",
        description: "Everything is put before you with no hidden charges or conditions",
        bgColor: "bg-green-50",
    },
    {
        img:"/img/Symbol3.png",
        title: "Guaranteed Satisfaction",
        description: "We ensure that you stay 100% satisfied with our offered services",
        bgColor: "bg-blue-50",
    },
    {
        img:"/img/Symbol4.png",
        title: "Expert CA/CS Assistance",
        description: "Prompt support from our in-house expert professionals",
        bgColor: "bg-pink-50",
    },
    {
        img:"/img/Symbol5.png",
        title: "Expert CA/CS Assistance",
        description: "Prompt support from our in-house expert professionals",
        bgColor: "bg-pink-50",
    },
]