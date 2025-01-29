import { CiCircleCheck } from "react-icons/ci";
export const Form=()=> {
   
  return (
    
    <>
    <div className="min-h-[330px] w-full bg-gradient-to-r from-orange-400 to-blue-900 px-4 py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        {/* Top text */}
        <p className="text-sm font-medium tracking-wider">1% OF THE INDUSTRY</p>

        {/* Heading */}
        <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold">Welcome to your new digital reality. Now.</h1>

        {/* Email form */}
        <form  className="max-w-xl mx-auto ">
          <div className="flex flex-col sm:flex-row gap-4 ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CiCircleCheck className="w-5 h-5 text-orange-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}



const features = ["Instant results", "User-friendly interface", "Personalized customization"]