import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


const LandingPage = () => {
  motion;

  return (
    <>
      <div className="container z-10 relative pb-8 md:pb-15" data-scroll data-scroll-section='-.3'  data-scroll-speed="-.8" >
        <div className="content w-full min-h-screen pt-20 md:pt-1 md:h-screen">
          <div className="txtstructure mt-16 md:mt-32 px-4 md:px-15">
            {["we creact", "EYE-opening", "presentations"].map(
              (item, index) => {
                return (
                  <div key={index} className="masker ">
                    <div className="flex flex-wrap">
                      {index === 1 && (
                        <motion.div
                          initial={{ width: "0" }}
                          animate={{ width: "10vw" }}
                          transition={{ease:[0.76,0,0.24,1],duration:"1"}}
                          className="w-40 md:w-[9vw] h-24 md:h-[5vw] bg-cover rounded mr-2 md:mr-[0.5vw]  bg-[url('./public/taxt-img.png')] relative top-2 md:top-4"
                        >
                        </motion.div>
                      )}
                      <h1 className="text-5xl md:text-[9vw] uppercase leading-tight md:leading-[6.2vw] tracking-tight font-bold font-['font-2']">
                        {item}
                      </h1>
                    </div>
                  </div>
                );
              },
            )}
          </div>
          <div className="border-t-2 border-zinc-700 mt-8 md:mt-30 flex flex-col md:flex-row uppercase justify-between items-start md:items-center gap-4 md:gap-0 py-5 px-4 md:px-15">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full md:w-auto">
              {[
                "For public and private companies",
                " From the first pitch to IPO",
              ].map((item,index) => (
                <p key={index} className="text-xs md:text-md font-light tracking-tight leading-none md:pr-8">
                  {item}
                </p>
              ))}
            </div>
            <div className="start flex gap-2 items-center w-full md:w-auto justify-start md:justify-end">
              <div className="txt uppercase border border-white px-3 py-1 rounded-full hover:bg-zinc-800 flex hover:text-white transition text-xs md:text-sm cursor-pointer">
                start the project
              </div>
              <div className="icon rounded-full">
                <span className="rotate-45">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
