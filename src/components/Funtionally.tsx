import React from "react";
import { useScroll, useTransform } from "framer-motion";

function Funtionally() {
    const {scrollYProgress} = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -600])
    return (
    <div className="bg-black w-[100%] flex flex-col  justify-center mx-auto p-20" style={{borderRadius: "100px 100px 0px 0px", background: "url('https://w0.peakpx.com/wallpaper/487/602/HD-wallpaper-black-dots.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
       <h1 className="text-white font-extrabold text-5xl lg:text-9xl md:text-8xl sm:text-3xl m-22 mx-auto" >FUNTIONALLY AESTHETIC!</h1>
       <div className="bg-white w-[90%] relative h-[5px] rounded-xl justify-center mx-auto"></div>
       <div className="flex flex-col sm:flex-col lg:flex-row w-[100%] md:flex-row">
            <h1 className="text-white m-5 w-[100%] sm:w-[100%] lg:w-[50%] p-5 text-4xl">I create stunning digital solutions
                that elevate your brand's presence
                and deliver incredible user experiences.
            </h1>
            <h4 className="text-white text-1xl p-[50px]">FUNTIONALLY AESTHETIC</h4>
       </div>
    </div>
  );
}

export default Funtionally;