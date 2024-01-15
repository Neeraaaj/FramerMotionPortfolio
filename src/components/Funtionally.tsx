import File from "../assets/Links.png"

function Funtionally() {
    return (
    <div className="bg-blue-500 w-[100vw] flex flex-col h-[45vh]
    md:h-[40vh] lg:h-[95vh]
     justify-center mx-auto sm:p-15 md:p-20 lg:p-50 border-2 border-gray-200 shadow-sm" style={{borderRadius: "90px 90px 0px 0px", background: `url(${File})`,backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-pink-200 mb-4 text-[12vw] text-center font-extrabold md:text-8xl lg:text-9xl">Funtionally Aesthetic!</h1>
        <p className="hidden sm:block md:hidden lg:block text-4xl font-normal text-white mx-auto lg:text-5xl mt-8 md:text-6xl w-[70vw] lg:w-[80vw] md:[85vw] bg-white rounded-xl p-3 shadow-xl">
          create stunning digital solutions that elevate your brand's presence and deliver incredible user experiences.
        </p>
    </div>
  );
}

export default Funtionally;
