// import React, {  } from "react";
import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
const Featured = () => {
  let cards = [useAnimation(), useAnimation(),useAnimation(),useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  motion;
  return (
    <>
      <div className="w-full py-8 md:py-15">
        <div className="contant w-full px-4 md:px-15 border-b pb-8 md:pb-10">
          <h1 className="text-3xl md:text-5xl font-['font-1']">Featured projects</h1>
        </div>
        
        {/* Mobile: Single column, Desktop: Two columns */}
        <div className="card px-4 md:px-15 py-8 md:py-10 flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-10">
          <div className="card-1 w-full md:w-[50%]">
            <div className="card-tx flex items-center gap-5 mb-4">
              <div className="round w-2 md:w-[1vw] h-2 md:h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className="uppercase text-base md:text-xl">Salience Labs</h1>
              </div>
            </div>

            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardconatainer w-full h-64 md:h-screen rounded-lg md:rounded-xl py-2"
            >
              <div className="card w-full h-full rounded-lg md:rounded-xl relative overflow-hidden">
                <h1 className="hidden md:flex absolute text-[#cdea68] text-9xl tracking-tight z-9 overflow-hidden right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  {"FIDE".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/img-3.png"
                  alt="Salience Labs"
                  className="bg-cover w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <div className="car-2 w-full md:w-[50%]">
            <div className="card-tx flex items-center gap-5 mb-4">
              <div className="round w-2 md:w-[1vw] h-2 md:h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className="uppercase text-base md:text-xl">Medallia Experience</h1>
              </div>
            </div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer w-full h-64 md:h-screen rounded-lg md:rounded-xl py-1 relative"
            >
              <div className="card w-full h-full overflow-hidden rounded-lg md:rounded-xl">
                <h1 className="hidden md:flex absolute text-[#cdea68] text-9xl z-9 tracking-tight overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/img-4.png"
                  alt="Medallia"
                  className="bg-cover w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second row of cards */}
        <div className="card px-4 md:px-15 py-8 md:py-10 flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-10">
          <div className="card-1 w-full md:w-[50%]">
            <div className="card-tx flex items-center gap-5 mb-4">
              <div className="round w-2 md:w-[1vw] h-2 md:h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className="uppercase text-base md:text-xl">Soma Energy</h1>
              </div>
            </div>

            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="cardconatainer w-full h-64 md:h-screen rounded-lg md:rounded-xl py-2"
            >
              <div className="card w-full h-full rounded-lg md:rounded-xl relative overflow-hidden">
                <h1 className="hidden md:flex absolute text-[#cdea68] text-9xl tracking-tight z-9 overflow-hidden right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  {"Soma Energy".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={cards[2]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/card-1.png"
                  alt="Soma Energy"
                  className="bg-cover w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <div className="car-2 w-full md:w-[50%]">
            <div className="card-tx flex items-center gap-5 mb-4">
              <div className="round w-2 md:w-[1vw] h-2 md:h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className="uppercase text-base md:text-xl">AH2 & Matt Horn</h1>
              </div>
            </div>

            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="cardcontainer w-full h-64 md:h-screen rounded-lg md:rounded-xl py-1 relative"
            >
              <div className="card w-full h-full overflow-hidden rounded-lg md:rounded-xl">
                <h1 className="hidden md:flex absolute text-[#cdea68] text-9xl z-9 tracking-tight overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {"AH2 & Matt Horn".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={cards[3]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/card-2.png"
                  alt="AH2 & Matt Horn"
                  className="bg-cover w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
