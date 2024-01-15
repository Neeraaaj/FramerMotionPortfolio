import '../index.css'
import '../App.css'
import { motion } from "framer-motion"

const About = () => {

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 }
    }}
    >
        <section className='flex justify-center'>
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-5xl md:text-8xl drop-shadow-lg font-bold sm:text-4xl animate-bounce">About me</h2>

                <p className="mt-4 text-gray-800">
                I'm a passionate web developer and designer with proficiency in HTML, CSS, JavaScript, React, and various backend technologies. Over the course of my career, I've had the privilege of working on diverse projects, ranging from e-commerce websites to interactive web applications, consistently delivering high-quality results.
                </p>

                  
              </div>

              <div className="bg-gray-200">
                <div className="rounded-lg shadow-xl bg-gray-700 text-white w-[100%] h-[300px] shadow-slate-500 shadow-xl ">
                    <div className="border-b border-gray-800 px-8 py-3 flex flex-end">
                        <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                    </div>
                     <div className="px-8 py-6 flex-end">
                        <p><em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() {'{'}</p>
                        <p>&nbsp;&nbsp;<span className="text-pink-500">return</span></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">'Neeraj Patil'</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;position: <span className="text-yellow-300">'fullstack-developer'</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Degree: <span className="text-yellow-300">'<a href="https://scottwindon.com" target="_blank" className="text-yellow-300 hover:underline focus:border-none">BTech Engineering (Comps)</a>'</span>,</p>
                        <p>&nbsp;&nbsp;</p>
                        <p>{'}'}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </motion.div>
  )
}

export default About
