"use client";
import { cn } from "../utils/cn";
import { BentoGridItem } from "../ui/bento-grid";
import BentoGrid from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const BentoGridThirdDemo = () => {
  return (
    <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[20rem] rounded-e-2xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

export default BentoGridThirdDemo

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 rounded-3xl"
    >
      <img src="https://cdn.dribbble.com/userupload/15106304/file/original-ef174615f009078b266887c6e338b658.png?resize=1024x469" className="max-h-[60vh] rounded-xl"/>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
    >
      <motion.div
        className="h-full w-full rounded-2xl bg-white p-1 dark:bg-black dark:border-white/[0.1] flex flex-col items-center justify-center cursor-pointer"
      >
        <img
          src="https://cdn.dribbble.com/userupload/10314602/file/original-c3df7316ad3caece7cfab6fe434fd3f2.png?resize=1024x768"
          alt="avatar"
          className="w-full h-fullz rounded-xl"
        />
        
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row shadow-xl"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-1 dark:bg-black dark:border-white/[0.1] flex flex-col items-center justify-center cursor-pointer"
      >
        <img
          src="https://cdn.dribbble.com/userupload/14130294/file/original-a73585504741360dec4cdcbddb4bf13d.png?resize=1024x485"
          alt="avatar"
          className="w-full h-full rounded-xl"
        />
        
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border p-1 flex flex-col items-center justify-center">
        <img
          src="https://cdn.dribbble.com/userupload/14131117/file/original-857d9db20d641cf54cc70535378a694b.png?resize=1024x492"
          alt="avatar"
          className="rounded-xl w-full h-full"
        />
       
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border  flex flex-col items-center p-1 justify-center"
      >
        <img
          src="https://cdn.dribbble.com/userupload/15106869/file/original-378b6ed97f32de44732903c11ae1e470.png?resize=1024x465"
          alt="avatar"
          className="rounded-xl h-full w-[fit-content]"
        />
        
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border  flex flex-col items-center p-1 justify-center"
      >
        <img
          src="https://cdn.dribbble.com/userupload/15107090/file/original-a6ac579ba3a4293f979b999d56e64d2a.png?resize=1024x464"
          alt="avatar"
          className="rounded-xl h-full w-[fit-content]"
        />
        
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 mt-10"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        {/* <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        /> */}
        
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "saaS platform",
    description: (
      <span className="text-4xl text-white">
        A Ai Twitter Bot facilitating a service of generating captions based on various tone like passionate, funny, sarcastic, professional.
        Utilizing the full stack compatibility of NextJS-14, vercel-ai-sdk, groq, and shadcn.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-4xl text-white">
        COMING SOON...
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "NLP (Natural Language Processing)",
    description: (
      <span className="text-2xl text-white">
        A review system created using pure natural language processing information retrieval approach (Bag Of Words)
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FrontEnd Projects",
    description: (
      <span className="text-2xl text-white">
        Delve into some amazing frontend creations.
        <br />
        These projects are build on React, Next, Three, GSAP, Framer motion, TailwindCSS
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-4xl text-white">
        COMING SOON...
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
