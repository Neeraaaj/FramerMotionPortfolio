import { useState } from 'react'
import { PiArrowElbowDownRightFill } from "react-icons/pi";
import {motion} from "framer-motion"
import { animationStart } from '../utils/animation';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate = {{opacity: 1}}
        transition={{duration: 0.5, delay: animationStart}}
      className="border-1 relative z-20 w-full border-b border-slate-200 bg-white/20 shadow-xl rounded-xl w-[80vw]
      mx-auto mt-5">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <h1 className='font-bold text-4xl text-shadow-md '>Neeraj</h1>
            </a>

            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[fit-content]  rounded-xl w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100
               ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm rounded-xl shadow-xl"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch cursor-pointer">
              <Link to={"/"}
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                    Home
                </Link>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer ">
              <Link to={"/about"}
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                    About
                </Link>
              </li>
              <li role="none" className="flex items-stretch cursor-pointer">
                <Link to={"/contact"}
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                >
                    Contact
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              <a
                href="#"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-lg text-gray-400"
              >
                <PiArrowElbowDownRightFill className='w-[50px] h-[50px]'/>
              </a>
            </div>
          </nav>
        </div>
      </motion.div>
    </>
  )
}

export default NavBar
