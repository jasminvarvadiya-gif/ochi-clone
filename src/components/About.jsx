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
      <div className="conteiner py-8 md:py-10 w-full rounded-tl-2xl md:rounded-tl-3xl rounded-tr-2xl md:rounded-tr-3xl bg-[#cdea68]">
        <div className="content">
          <div className="txt py-4 px-4 md:px-15 border-b pb-8 md:pb-10">
            <h1 className='text-lg md:text-[4vw] font-["font-1"] leading-relaxed md:leading-[10vh]'>
              We craft category-defining presentations, brand identities, and
              digital experiences that{" "}
              <span className="underline">drive funding, sales,</span> and{" "}
              <span>market leadership.</span>
            </h1>
          </div>
          <div className="txt-2 px-4 md:px-15 flex flex-col md:flex-row justify-between py-5 pb-8 md:pb-10 gap-8 md:gap-0">
            <div className="qun w-full md:w-[50%]">
              <h1 className="text-base md:text-xl">What you can expect:</h1>
            </div>
            <div className="paregaf w-full md:w-[25%] font-['font-1']">
              <p className="pb-8 md:pb-10 text-sm md:text-base">
                We don't just make slides. We shape strategy, storytelling,
                design scalable brand systems, and build presentations that make
                people say: "I want in!"
              </p>
              <p className="pb-8 md:pb-10 text-sm md:text-base">
                Our clients make the world go round – from deep tech, aerospace
                and robotics to music festivals and Michelin-starred
                restaurants.
              </p>
              <p className="text-sm md:text-base">
                Since 2019, we've been the go-to partner for Yahoo, Medallia,
                Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
              </p>
            </div>
            <div className="txt-three relative w-full md:w-[25%]">
              <div className="abous">
                <h1 className="text-base md:text-xl">S:</h1>
                {["Instagram", "Behance", "Facebook", "Linkedin"].map(
                  (item, index) => (
                    <a key={index} className="block underline font-['font-1'] text-sm md:text-base">
                      {item}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="img-txt border-t border-zinc-900 py-8 md:py-15 px-4 md:px-15 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
            <div className="txt w-full md:w-[50%]">
              <h1 className="text-2xl md:text-3xl py-4 md:py-5">How we can help:</h1>
              <motion.button
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
                className="bg-black rounded-full text-gray-200 px-4 md:px-5 flex gap-6 md:gap-10 items-center py-2 md:py-3 text-sm md:text-xl uppercase hover:bg-zinc-800 transition"
              >
                Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
              </motion.button>
            </div>
            <div
              animate={imgscntrol}
              initial={{ scale: 1 }}
              className="img w-full md:w-[50%]"
            >
              <motion.img
                animate={imgscntrol}
                initial={{ scale: 1 }}
                src="./public/img.png"
                alt="about"
                className="rounded-lg md:rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
