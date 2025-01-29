import vimg from "../image/vimg.jpeg";
import icon1 from "../image/Icon.png"
import icon2 from "../image/Icon2.png";

export const VideoIntroduction = () => {
  return (
    <>
      <div className="bg-[#1B3B5D] px-6 py-16 md:px-16 md:py-24">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Our Video Introductions</h2>
                <p className="text-gray-300">
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam
                  tincidunt apis dui.
                </p>
              </div>

              <div className="space-y-6">
                {/* First Feature */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500">
                    <img src={icon1} alt="light" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Explore ideas together</h3>
                    <p className="text-gray-300">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                  </div>
                </div>

                {/* Second Feature */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500">

                    <img src={icon2} alt="light" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Bring those ideas to life</h3>
                    <p className="text-gray-300">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div >
              <img
                src={vimg}
                alt="Video-img"
                className="lg:h-full lg:w-full md:h-full "
              />



            </div>
          </div>
        </div>



      </div>
    </>
  );
}