import React from "react";

import "locomotive-scroll/dist/locomotive-scroll.css";
function Card() {
  return (
    <>
      <div className="conatainer py-15 px-15" data-scroll data-scroll-section='-.5'>
        <div className="content">
            <div className="card-main w-full h-screen flex gap-8 items-center  ">
                <div className="cardcontainer w-2/2 h-[50%]">
                    <div className="card w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center relative">
                      <img src="/logo.png" alt="" className="w-32" />
                      <button className=" absolute left-5 bottom-5 text-yellow-600 border border-yellow-600 rounded-full px-3">&copy;2019-2025</button>
                    </div>
                </div>
                 <div className="cardcontainer w-1/2 h-[50%]">
                     <div className="card w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center relative">
                      <img src="/log0-2.png" alt="" className="w-32" />
                      <button className=" absolute left-5 bottom-5 text-white border border-white rounded-full px-3 uppercase">pating 5.0 0n cluntch</button>
                    </div>
                </div>
                 <div className="cardcontainer w-1/2 h-[50%]">
                      <div className="card w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center relative">
                      <img src="/logo-3.png" alt="" className="w-32" />
                      <button className=" absolute left-5 bottom-5 text-white border border-white rounded-full px-2 uppercase">business bootcamp alumni</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Card;
