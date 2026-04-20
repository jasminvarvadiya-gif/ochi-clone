import React from "react";
import { motion, scale, transform, useAnimation } from "framer-motion";

const About = () => {
  const imgscntrol = useAnimation();
  const handleHover = () => {
    imgscntrol.start({
      scale: 1.06,
      y: -8,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  };
  const handleHoverEnd = () => {
    imgscntrol.start({
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    });
  };
  return (
    <>
     <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#cdea68]">
  <div className="w-full">

    <div className="py-4 px-4 sm:px-6 md:px-10 lg:px-20 border-b pb-10">
      <h1 className='text-[6vw] sm:text-[4vw] font-["font-1"] leading-tight'>
        We craft category-defining presentations, brand identities, and
        digital experiences that{" "}
        <span className="underline">drive funding, sales,</span> and{" "}
        <span>market leadership.</span>
      </h1>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl">What you can expect:</h1>
      </div>

      <div className="w-full lg:w-1/3 font-['font-1']">
        <p className="pb-6">
          We don't just make slides. We shape strategy...
        </p>
        <p className="pb-6">
          Our clients make the world go round...
        </p>
        <p>
          Since 2019, we've been the go-to partner...
        </p>
      </div>

      <div className="w-full lg:w-1/4">
        <h1 className="text-xl mb-3">S:</h1>
        {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item, index) => (
          <a key={index} className="block underline font-['font-1']">
            {item}
          </a>
        ))}
      </div>

    </div>

    <div className="border-t border-zinc-900 py-10 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-10">
      
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl py-5">How we can help:</h1>
        <motion.button
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          className="bg-black rounded-full text-gray-200 px-5 flex gap-5 items-center py-3 text-xl uppercase"
        >
          Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </motion.button>
      </div>

      <motion.div
        animate={imgscntrol}
        initial={{ scale: 1 }}
        className="w-full lg:w-1/2"
      >
        <motion.img
          animate={imgscntrol}
          initial={{ scale: 1 }}
          src="/img.png"
          alt=""
          className="rounded-xl w-full"
        />
      </motion.div>

    </div>

  </div>
</div>
    </>
  );
};

export default About;
