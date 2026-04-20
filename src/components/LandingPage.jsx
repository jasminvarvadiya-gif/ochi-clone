import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


const LandingPage = () => {
  motion;

  return (
    <>
      <div className="container z-10 relative pb-15" data-scroll data-scroll-section='-.3'  data-scroll-speed="-.8" >
        <div className="content w-full h-screen pt-1">
          <div className="txtstructure mt-32 px-15">
            {["we creact", "EYE-opening", "presentations"].map(
              (item, index) => {
                return (
                  <div key={index} className="masker ">
                    <div className="flex">
                      {index === 1 && (
                        <motion.div
                          initial={{ width: "0" }}
                          animate={{ width: "9vw" }}
                          transition={{ease:[0.76,0,0.24,1],duration:"1"}}
                          className="w-[9vw] h-[5vw] bg-cover rounded mr-[0.5vw]  bg-[url('/taxt-img.png')] relative top-4"
                        >
                        </motion.div>
                      )}
                      <h1 className=" text-[9vw] uppercase leading-[6.2vw] tracking-tight font-blod font-['font-2'] ">
                        {item}
                      </h1>
                    </div>
                  </div>
                );
              },
            )}
          </div>
          <div className="border-t-2 border-zinc-700 mt-30 flex uppercase justify-between items-center py-5 px-15">
            {[
              "For public and private companies",
              " From the first pitch to IPO",
            ].map((item,index) => (
              <p key={index} className="text-md font-light tracking-tight leading-none">
                {item}
              </p>
            ))}
            <div className="start flex gap-2 items-center">
              <div className="txt  uppercase border  px-3 py-1 rounded-full hover:bg-zinc-800 flex   hover:text-white">
                start the project
              </div>
              <div className="icon  rounded-full">
                <span className=" rotate-45deg">
                  {" "}
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
