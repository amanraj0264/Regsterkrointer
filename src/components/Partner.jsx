import patner1 from "../image/p1.png"
import patner2 from "../image/p2.png"
import patner3 from "../image/p3.png"
import patner4 from "../image/p4.png"
import patner5 from "../image/p5.png"
import patner6 from "../image/p6.png"
export const Partner=()=>{
    return(
        <>
        <div className="max-w-[1300px] mx-auto ">
                        
                        <div className="flex justify-center items-center gap-10  flex-wrap py-22">
                            <img src={patner1} alt="Startupimg1" />
                            <img src={patner2} alt="Startupimg1" />
                            <img src={patner3} alt="Startupimg1" />
                            <img src={patner4} alt="Startupimg1" />
                            <img src={patner5} alt="Startupimg1" />
                            <img src={patner6} alt="Startupimg1" />
                        </div>
                    </div>
        </>
    );
}