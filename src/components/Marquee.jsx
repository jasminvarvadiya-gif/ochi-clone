import React from "react";
import { motion } from "framer-motion";


import "locomotive-scroll/dist/locomotive-scroll.css";

function Marquee() {
  return (
    <>
      <div data-scroll data-scroll-section='.2'  className="container z-100 relative pt-5 w-full ">
        <div className="content w-full">
          <div className="w-full rounded-tl-3xl rounded-tr-3xl   py-15 bg-[#004d43] overflow-hidden">
            <div className="flex border-t-2 border-b-2 border-white">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
                className="flex gap-10 whitespace-nowrap font-['font-2']"
              >
                <h1 className="text-[23vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>

                <h1 className="text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-[22vw] text-white font-bold leading-none">
                  WE ARE OCHI
                </h1>
                <h1 className="text-[22vw] text-white font-bold leading-none">
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
