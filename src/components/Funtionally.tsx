import File from "../assets/Links.png"
import '../index.css'


function Funtionally() {
    return (
   <div className="bg-blue-500 w-[100vw] flex flex-col h-[270px]
    md:h-[45vh] lg:h-[80vh] text-center
     justify-center mx-auto sm:p-15 md:p-20 lg:p-10 border-2 border-gray-200 shadow-sm" style={{borderRadius: "90px 90px 0px 0px", background: `url(${File})`,backgroundSize: "100%", backgroundRepeat: "no-repeat"}} >
        <h1 className="text-white mb-4 text-[12vw]  w-[fit-content]text-center font-extrabold md:text-8xl lg:text-9xl mt-[-100px] sm:mt-[-100px] 
        " id="head">Funtionally Aesthetic!</h1>
        <p className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:block text-4xl font-normal text-white mx-auto lg:text-5xl mt-8 md:text-6xl w-[70vw] lg:w-[80vw] md:[85vw] bg-white rounded-xl p-3 shadow-xl" >
          create stunning digital solutions that elevate your brand's presence and deliver incredible user experiences.
        </p>
    </div>
  );
}

export default Funtionally;
