import React from "react";

import "locomotive-scroll/dist/locomotive-scroll.css";
function Card() {
  return (
    <>
      <div className="conatainer py-8 md:py-15 px-4 md:px-15" data-scroll data-scroll-section='-.5'>
        <div className="content">
            <div className="card-main w-full flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                <div className="cardcontainer w-full md:w-1/3  h-30">
                    <div className="card w-full h-full bg-[#004d43] rounded-lg md:rounded-xl flex flex-col items-center justify-center relative p-4">
                      <img src="./public/logo.png" alt="logo" className="w-24 md:w-32 mb-4" />
                      <button className="absolute left-3 md:left-5 bottom-3 md:bottom-5 text-yellow-600 border border-yellow-600 rounded-full px-2 md:px-3 text-xs md:text-sm">&copy;2019-2025</button>
                    </div>
                </div>
                 <div className="cardcontainer w-full md:w-1/3 h-37 ">
                     <div className="card w-full h-full bg-zinc-900 rounded-lg md:rounded-xl flex flex-col items-center justify-center relative p-4">
                      <img src="./public/log0-2.png" alt="logo-2" className="w-24 md:w-32 mb-4" />
                      <button className="absolute left-3 md:left-5 bottom-3 md:bottom-5 text-white border border-white rounded-full px-2 md:px-3 uppercase text-xs md:text-sm">Pating 5.0 on Cluntch</button>
                    </div>
                </div>
                 <div className="cardcontainer w-full md:w-1/3 h-48 md:h-[50%]">
                      <div className="card w-full h-full bg-zinc-900 rounded-lg md:rounded-xl flex flex-col items-center justify-center relative p-4">
                      <img src="./public/logo-3.png" alt="logo-3" className="w-24 md:w-32 mb-4" />
                      <button className="absolute left-3 md:left-5 bottom-3 md:bottom-5 text-white border border-white rounded-full px-2 md:px-3 uppercase text-xs md:text-sm">Business Bootcamp Alumni</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Card;
