import React from 'react'
import {motion} from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'

interface LinkProps {
    heading: string;
    subHeading: string;
    imgSrc: string;
    href: string;
    TechStacks: string;
}
  

const Projects: React.FC = () => {
  return (
    <section className='bg-white min-h-screen md:p-8 
    p-12 sm:p-5 
    overflow-hidden
    mt-[5vw]' style={{borderRadius: "100px 100px 0 0"}} >
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-violet-900 font-normal text-[10vw]
        m-2 w-[100vw] sm:w-[100vw] lg:text-10xl'>
            Featured  Work
        </h1>
        <div className='mx-auto max-w-5xl bg-black rounded-lg p-15 mt-12' style={{boxShadow: "7px 8px 6px 2px gray"}}>
            <Link 
            heading={"Washoo"}
            subHeading={`Washoo, a forward-thinking car detailing service, now brings the luxury of professional car cleaning to your doorstep. With a user-friendly website designed for seamless navigation, Washoo ensures a convenient booking experience for customers seeking top-notch car detailing services.`}
            TechStacks={'Tech Stacks:- NextJS, TailwindCSS, TypeScript, EmailJS, AnimeJS'}
            imgSrc={"https://cdn.dribbble.com/userupload/10422383/file/original-b41bd60af19c6b30706adb1241f91f5c.png?resize=1600x960"}
            href="https://www.washoo.in"
            />
            <Link 
            heading={"Marketing Agency"}
            subHeading={"DSB Media is a Thane-based marketing agency that helps businesses solve problems and thrive online. We offer social media engagement strategies, graphic design, and technical expertise to take your brand to the next level."}
            imgSrc={"https://cdn.dribbble.com/userupload/10422715/file/original-f2b88f01153b46961818bf5421d494c1.png?resize=1024x577&vertical=center"}
            TechStacks={'Tech Stacks:- ReactJS, TailwindCSS, JSX, ThreeJS, EmailService - EmailJS'}
            href={"https://dsb-media-website2.vercel.app/"}
            />
            <Link 
            heading={"React Dashboard"}
            subHeading={"Built a dynamic React dashboard empowered by Node.js and MongoDB. Leveraging Chart.js, I crafted interactive data visualizations, including histograms, pie charts, and line graphs, to enhance risk assessment, analytics, and exploration across diverse data categories."}
            imgSrc={"https://cdn.dribbble.com/userupload/2993282/file/original-468f4d35081e2378d9171a3fe347086a.jpg?resize=1024x768"}
            TechStacks={'Tech Stacks:- ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS'}
            href={"https://github.com/Neeraaaj/ReactDashboard"}
            />
            <Link 
            heading={"Candy Crush Desktop Version"}
            subHeading={"Crafted a sweet and satisfying Candy Crush experience using ReactJS. Harnessing React's immersive features like onDrag and useEffect, I created a dynamic game board where players can seamlessly swap candies, trigger satisfying cascades, and conquer challenging levels — all within the desktop environment."}
            imgSrc={"https://cdn.dribbble.com/users/1420551/screenshots/4961862/media/cf1be19f1270ef5634bc1e9dced46cd4.png"}
            TechStacks={'Tech Stacks:- ReactJS, HTML, CSS, JS'}
            href={"https://candycrushdesktopgame.vercel.app/"}
            />
            <Link 
            heading={"Zomato Review Analysis"}
            subHeading={'I harnessed the power of Python and NLP to unearth hidden insights from Zomato restaurant reviews. My project meticulously cleans and processes text data, trains a machine learning model to classify reviews as positive or negative, and visualizes key findings to unlock valuable customer sentiment insights.'}
            imgSrc={"https://cdn.dribbble.com/userupload/10314602/file/original-c3df7316ad3caece7cfab6fe434fd3f2.png?resize=1200x900"}
            TechStacks={"Python, Pandas, NLTK ToolKit, Scikit-Learn, Matplotlib, Git"}
            href={"https://github.com/Neeraaaj/Zomato-Review-Analysis"}
            />
        </div>
    </section>
  )
}

const Link: React.FC<LinkProps> = ({heading, subHeading, imgSrc, href, TechStacks}) => {
    return (
        <motion.a 
        initial="initial"
        whileHover="whileHover"
        target='_blank'
        href={href} className='group relative flex items-center justify-between border-b-2  border-neutral-700 py-4 transition-colors duration-500 md:py-8 hover:border-neutral-50 flex flex-col lg:flex-row' >
            <div className='m-15'>
                <motion.span 
                variants={{
                    initial:{
                        x: 0,
                    },
                    whileHover:{
                        x: -16,
                    },
                }}
                transition={{
                    type: "spring"
                }}
                className='relative z-10 block text-3xl
                sm:text-3xl lg:text-7xl md:text-6xl font-extrabold text-neutral-50
                lg:text-neutral-500 md:text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50'>
                    {heading.split("").map((l, i) => {
                        return <span key={i}>{l}</span>
                    })}
                </motion.span>
                <h5 className='relative mt-4 z-10 block text-neutral-50 lg:text-neutral-500 md:text-neutral-500 sm:text-neutral-50
                sm:flex-end transition-colors duration:500 group-hover:text-neutral-50'>{subHeading}</h5>
                <h5 className='relative mt-4 z-10 block text-neutral-50 lg:text-neutral-500 md:text-neutral-500 sm:text-neutral-50
                sm:flex-end transition-colors duration:500 group-hover:text-neutral-50'>{TechStacks}</h5>
            </div>
            
            <motion.img 
                variants={{
                    initial: {
                        scale: 0,
                        rotate: "-12.5deg",
                    },
                    whileHover:{
                        scale: 1,
                        rotate: "12.5deg",
                    },
                }}
                transition={{type: "spring"}}
                style={{
                    top: "50%",
                    left: "70%",
                    transform: 'translate(-50%, -50%)'
                }}
                src={imgSrc}
                className='absolute z-0 h-34 w-42 rounded-lg object-cover md:h-48 md:w-64 lg:w-[30vw] lg:h-[40vh]'
                alt={`{heading}`}
            />
            <motion.div 
            initial={{rotate: "0deg"}}
            whileHover={{rotate: "90deg"}}
            className='relative z-10 p-4'>
                <FiArrowRight className='text-7xl text-neutral-50'/>
            </motion.div>
        </motion.a>
    )
}

export default Projects
