import React from "react";
import { motion } from "motion/react";
// import { div } from "motion/react-client"

import "locomotive-scroll/dist/locomotive-scroll.css";

function Marquee() {
  return (
    <>
      <div data-scroll data-scroll-section='.2'  className="container z-100  sm:z-100 md:z-100 relative pt-2 md:pt-5 w-full ">
        <div className="content w-full">
          <div className="w-full rounded-tl-2xl md:rounded-tl-3xl rounded-tr-2xl md:rounded-tr-3xl py-8 md:py-15 bg-[#004d43] overflow-hidden">
            <div className="flex border-t-2 border-b-2 border-white">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
                className="flex gap-4 md:gap-10 whitespace-nowrap font-['font-2']"
              >
                <h1 className="text-3xl md:text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-3xl md:text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-3xl md:text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>

                <h1 className="text-3xl md:text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-3xl md:text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-3xl md:text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
