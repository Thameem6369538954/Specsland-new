import React from 'react'
import Men from "../Cate/Images/Men.jpg"
import Kids from "../Cate/Images/Kids.jpg"
import Women from "../Cate/Images/Women.jpg"

const Cate = () => {
  return (
    <div className="w-full min-h-[auto]  ">
      <div className="w-full min-h-[auto] py-[1em] flex flex-col items-center justify-center">
        <div className="">
          <h1 className="text-4xl font-heading text-center mb-8">Categories</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10   place-items-center">
            <div
              className="lg:w-[300px] lg:min-h-[300px]  md:w-[300px] md:min-h-[300px] sm:w-[300px] sm:min-h-[300px] w-[200px]  min-h-[200px] bg-red-500 hover:shadow-xl cursor-pointer"
              style={{
                backgroundImage: `url(${Men})`,
                repeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>hello</h1>
            </div>
            <div
              className="lg:w-[300px] lg:min-h-[300px]  md:w-[300px] md:min-h-[300px] sm:w-[300px] sm:min-h-[300px] w-[200px]  min-h-[200px] bg-red-500 hover:shadow-xl cursor-pointer"
              style={{
                backgroundImage: `url(${Women})`,
                repeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>hello</h1>
            </div>
            <div
              className="lg:w-[300px] lg:min-h-[300px]  md:w-[300px] md:min-h-[300px] sm:w-[300px] sm:min-h-[300px] w-[200px]  min-h-[200px] bg-red-500 hover:shadow-xl cursor-pointer"
              style={{
                backgroundImage: `url(${Kids})`,
                repeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cate