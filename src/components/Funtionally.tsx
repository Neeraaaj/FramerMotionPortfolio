import File from "../assets/Image.png"

function Funtionally() {
    return (
    <div className="bg-blue-500 w-[100vw] flex flex-col h-[38vh]
    md:h-[40vh] lg:h-[130vh]
     justify-center mx-auto sm:p-10 md:p-20 lg:p-50 border-2 border-gray-200 shadow-sm" style={{borderRadius: "90px 90px 0px 0px", background: `url(${File})`,backgroundSize: "100%", backgroundRepeat: "no-repeat"}} >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-pink-100 mb-4 text-[12vw] text-center text-gray-500 font-extrabold leading-none tracking-tight md:text-8xl lg:text-9xl dark:text-white">Funtionally Aesthetic!</h1>
        <p className="hidden sm:block md:hidden lg:block text-4xl font-normal text-gray-700 mx-auto lg:text-5xl mt-8 md:text-6xl w-[70vw] lg:w-[80vw] md:[85vw] bg-gray-100 rounded-xl p-3 shadow-xl">
          create stunning digital solutions that elevate your brand's presence and deliver incredible user experiences.
        </p>
    </div>
  );
}

export default Funtionally;
