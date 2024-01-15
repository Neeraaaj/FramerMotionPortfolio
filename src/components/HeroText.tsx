import SVG from './SVG'
import {motion} from "framer-motion"
import { animationStart, reveal } from '../utils/animation'

const HeroText = () => {
  return (
    <motion.div 
        layout
        initial={{height: 0}}
        animate={{height: "unset"}}
        transition={{delay: animationStart, duration: 0.5}}
    className='flex flex-col items-center text-center'>
        <motion.div 
            variants={reveal}
            initial="hiddenVariant"
            animate="revealedVariant"
            transition={{delay: animationStart + 1, duration: 0.6}}
        className='flex flex-col text-2xl lg:text-6xl sm:text-3xl <md:text-1xl font-bold mb-30px pt-100px '>
            <span className='flex 
            text-[7vw] sm:text-4xl 
            md:text-7xl lg:text-8xl items-center gap-10px'>Delivering <SVG /> Industry's</span>
            <span>Top Talents Work</span>
        </motion.div>
        <motion.div 
            variants={reveal}
            initial="hiddenVariant"
            animate="revealedVariant"
            id='sub-head'
            transition={{delay: animationStart + 1.2, duration: 0.6}} className='mb-30px w-[100%]
            sm:w-[100%] <lg:w-[100%] <md:w-[100%] text-1xl 
            lg:text-4xl leading-tight text-gray-700'>
            Revolutionizing the Digital Landscape: Elevate Your Experience with Our Freelance Maestros in Crafting Cutting-Edge Web Apps and Mobile Solutions
        </motion.div>
    </motion.div>
  )
}

export default HeroText
