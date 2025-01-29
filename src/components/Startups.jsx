import Startupimg1 from "../image/oracle.png"
import Startupimg2 from "../image/Morpheus.png"
import Startupimg3 from "../image/Morpheus.png"
import Startupimg4 from "../image/Sumsung.png"
import Startupimg5 from "../image/monday.png"
import Startupimg6 from "../image/segment.png"
export const Startups = () => {
    return (
        <>
            <div className="max-w-[1300px] mx-auto py-10">
                <h1 className="text-center text-xl font-semibold py-10">Trusted By Over 100+ Startups and freelance business</h1>
                <div className="flex justify-center gap-10  flex-wrap">
                    <img src={Startupimg1} alt="Startupimg1" />
                    <img src={Startupimg2} alt="Startupimg1" />
                    <img src={Startupimg3} alt="Startupimg1" />
                    <img src={Startupimg4} alt="Startupimg1" />
                    <img src={Startupimg5} alt="Startupimg1" />
                    <img src={Startupimg6} alt="Startupimg1" />
                </div>
            </div>
        </>
    )
}
