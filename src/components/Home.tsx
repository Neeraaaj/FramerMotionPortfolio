import { motion, useScroll, useTransform } from 'framer-motion'
import NavBar from './NavBar'
import WhatIDo from './WhatIDo'

const Home = () => {
  const { scrollY } = useScroll()

  const cloudY = useTransform(scrollY, [0, 500], ['70%', '0%'])
  const cloudOpacity = useTransform(scrollY, [0, 120, 450], [0, 0.5, 1])

  return (
    <div className="landing-page">
      <section className="relative h-screen overflow-hidden">
        <img
          src="/sky-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          className="cloud-layer pointer-events-none absolute inset-x-0 bottom-0 z-[4]"
          style={{ y: cloudY, opacity: cloudOpacity }}
        >
          <img
            src="/clouds-bottom.png"
            srcSet="/clouds-bottom.png 1x, /clouds-bottom@2x.png 2x"
            alt=""
            width={1280}
            height={852}
            className="cloud-layer-img"
          />
        </motion.div>

        <div className="relative z-10 flex h-full flex-col">
          <NavBar />

          <div className="flex flex-1 items-center">
            <div className="w-full px-8 pb-28 pt-24 lg:w-[65%] lg:px-12">
              <p className="text-5xl font-bold text-white">
                👋 Hey, I&apos;m <span className="font-bold">Neeraj</span>
              </p>
              <h1 className="mt-4 text-white">
                <span className="block text-[8rem] font-black lowercase leading-none">
                  Full-Stack
                </span>
                <span className="hero-script -mt-2 block text-5xl sm:text-7xl">Engineer</span>
              </h1>
              <p className="mt-6 text-lg text-white">
                Building AI-driven products for consumer &amp; enterprise teams
              </p>
            </div>
          </div>

          <img
            src="/hero-cutout.png"
            srcSet="/hero-cutout.png 1x, /hero-cutout@2x.png 2x"
            alt="Neeraj Patil"
            width={1280}
            height={714}
            className="
              pointer-events-none
              absolute bottom-0 right-0
              z-[5]
              h-[95vh] w-auto
              object-contain object-bottom
              max-lg:left-[50%] max-lg:-translate-x-[10%]
            "
          />

          <footer className="relative z-20 px-8 pb-5 text-[11px] font-semibold uppercase tracking-widest">
            <div className="flex justify-between">
              <span className="text-slate-600/90">
                Based in <span className="text-slate-800">Navi Mumbai, MH</span>
              </span>
              <span className="font-bold text-slate-700">Create &gt; Consume</span>
            </div>
          </footer>
        </div>
      </section>

      <WhatIDo />
    </div>
  )
}

export default Home
