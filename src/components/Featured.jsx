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
      <div className="w-full py-15">
        <div className="contant w-full px-15 border-b pb-10">
          <h1 className="text-5xl font-['font-1']">Featured projects</h1>
        </div>
        <div className="card px-15 py-10 flex justify-between items-center gap-10">
          <div className="card-1 w-[50%]">
            <div className="card-tx flex items-center gap-5 ">
              <div className="round w-[1vw] h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className=" uppercase text-xl">Salience Labs</h1>
              </div>
            </div>

            {/* {Card -1} */}
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardconatainer  w-full h-screen rounded-xl py-2"
            >
              <div className="card w-full h-full  rounded-xl relative">
                <h1 className=" absolute text-[#cdea68] text-9xl tracking-tight z-9 overflow-hidden flex  right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  {"FIDE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className=" inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/img-3.png"
                  alt=""
                  className="bg-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
          <div className="car-2 w-[50%]">
            <div className="card-tx flex items-center gap-5 ">
              <div className="round w-[1vw] h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className=" uppercase text-xl">Medallia Experience</h1>
              </div>
            </div>

            {/* crad -2  */}
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className=" cardcontainer w-full h-screen rounded-xl py-1 relative"
            >
              <div className=" card w-full h-full overflow-hidden rounded-xl">
                <h1 className=" absolute text-[#cdea68] text-9xl z-9 tracking-tight flex  overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className=" inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/img-4.png"
                  alt=""
                  className="bg-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* card -line-2  */}

        <div className="card px-15 py-10 flex justify-between items-center gap-10">
          <div className="card-1 w-[50%]">
            <div className="card-tx flex items-center gap-5 ">
              <div className="round w-[1vw] h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className=" uppercase text-xl">Soma Energy</h1>
              </div>
            </div>

            {/* {Card -3} */}
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="cardconatainer  w-full h-screen rounded-xl py-2"
            >
              <div className="card w-full h-full  rounded-xl relative">
                <h1 className=" absolute text-[#cdea68] text-9xl tracking-tight z-9 overflow-hidden flex  right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  {"Soma Energy".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[2]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className=" inline-block "
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/card-1.png"
                  alt=""
                  className="bg-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
          <div className="car-2 w-[50%]">
            <div className="card-tx flex items-center gap-5 ">
              <div className="round w-[1vw] h-[1vw] bg-black rounded-full"></div>
              <div className="txt">
                <h1 className=" uppercase text-xl">AH2 & Matt Horn</h1>
              </div>
            </div>

            {/* crad -4  */}
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className=" cardcontainer w-full h-screen rounded-xl py-1 relative"
            >
              <div className=" card w-full h-full overflow-hidden rounded-xl">
                <h1 className=" absolute text-[#cdea68] text-9xl z-9 tracking-tight flex  overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2">
                  {"AH2 & Matt Horn".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[3]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className=" inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  src="./public/card-2.png"
                  alt=""
                  className="bg-cover w-full h-full"
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
