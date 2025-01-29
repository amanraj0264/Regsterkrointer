export const Num=()=>{
return(
    <>
      <section className="py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium mb-2">WHY REGISTER KARO</p>
        <h2 className="text-3xl font-bold text-[#2D2D2D]">Some Numbers are important</h2>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center w-[160px] text-center">
              <span className={`text-4xl md:text-5xl font-bold `}>
                {stat.number}
                <sup className="text-2xl">+</sup>
              </span>
              <span className="mt-2 text-sm font-medium text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
)
}



const stats = [
    {
      number: "1M",
      label: "CUSTOMERS",
      color: "text-gray-600",
    },
    {
      number: "12",
      label: "YEARS OF EXCELLENCE",
      color: "text-pink-600",
    },
    {
      number: "41",
      label: "R&D ENGINEERS",
      color: "text-amber-700",
    },
    {
      number: "78",
      label: "COUNTRIES",
      color: "text-gray-700",
    },
    {
      number: "3287",
      label: "PARTNERS",
      color: "text-orange-500",
    },
    {
      number: "41",
      label: "AWARDS RECEIVED",
      color: "text-amber-800",
    },
  ]