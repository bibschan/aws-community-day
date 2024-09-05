import React from "react";

const Clouds = () => {
  return (
    <div className="relative w-full mb-4 flex justify-center z-10">
      <img
        src="/background/cloud-2.svg"
        className="absolute -z-10 w-[300px] md:bottom-10 bottom-[40rem] left-[14rem]"
      />
      <img
        src="/background/cloud-3.svg"
        className="absolute -z-10 w-[300px] md:right-18 md:bottom-[15rem] bottom-[30rem] -left-[4rem] animate-slide-2"
      />
      <img
        src="/background/cloud-4.svg"
        className="absolute -z-10 w-[300px] md:left-12 md:bottom-20 bottom-[26rem] hidden md:block animate-slide-1"
      />
      <img
        src="/background/cloud-3.svg"
        className="absolute -z-10 w-[300px] md:left-[11rem] md:bottom-[22rem] bottom-[13rem] left-[10rem]"
      />
      <img
        src="/background/cloud-4.svg"
        className="absolute -z-10 w-[300px] md:right-20 md:bottom-[40rem] bottom-[6rem] right-[16rem]"
      />
      <img
        src="/background/cloud-2.svg"
        className="absolute -z-10 w-[300px] md:bottom-10 md:left-10 animate-slide-1 bottom-[1rem]"
      />
      <img
        src="/background/cloud-2.svg"
        className="absolute -z-10 w-[300px] md:bottom-[44rem] md:left-[9rem] bottom-[42rem] -left-1/4"
      />
      <img
        src="/background/cloud-3.svg"
        className="absolute -z-10 w-[300px] md:left-12 md:bottom-[30rem] hidden md:block"
      />
      <img
        src="/background/cloud-4.svg"
        className="absolute -z-10 w-[300px] md:right-0 md:bottom-36 bottom-[46rem] -right-6 animate-slide-1"
      />
      <img
        src="/background/cloud-2.svg"
        className="absolute -z-10 w-[300px] md:bottom-[23rem] md:right-1/4 animate-slide-2 hidden md:block "
      />
      <img
        src="/background/cloud-3.svg"
        className="absolute -z-10 w-[300px] md:bottom-[32rem] md:right-[10rem] hidden md:block "
      />
    </div>
  );
};

export default Clouds;
