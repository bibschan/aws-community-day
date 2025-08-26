export default function HeroClouds() {
  return (
    <>
      {/* Moving clouds */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Cloud 1 - Top left */}
        <img 
          src="/background/cloud-3.svg" 
          alt="Cloud" 
          className="absolute top-[60%] left-[5%] h-[60px] md:h-[80px] lg:h-[100px] w-auto opacity-80 animate-slide-1" 
        />
        {/* Cloud 2 - Mid left */}
        <img 
          src="/background/cloud-3.svg" 
          alt="Cloud" 
          className="absolute top-[55%] left-[25%] h-[50px] md:h-[70px] lg:h-[90px] w-auto opacity-70 animate-slide-2" 
        />
        {/* Cloud 3 - Bottom center */}
        <img 
          src="/background/cloud-3.svg" 
          alt="Cloud" 
          className="absolute top-[75%] left-[45%] h-[40px] md:h-[60px] lg:h-[80px] w-auto opacity-85 animate-slide-1" 
        />
        {/* Cloud 4 - Top right */}
        <img 
          src="/background/cloud-3.svg" 
          alt="Cloud" 
          className="absolute top-[50%] right-[15%] h-[55px] md:h-[75px] lg:h-[95px] w-auto opacity-75 animate-slide-1" 
        />
        {/* Cloud 5 - Mid right */}
        <img 
          src="/background/cloud-3.svg" 
          alt="Cloud" 
          className="absolute top-[65%] right-[25%] h-[65px] md:h-[85px] lg:h-[105px] w-auto opacity-65 animate-slide-2" 
        />
      </div>

      {/* City background */}
      <img 
        src="/hero/hero-city.png" 
        alt="City skyline" 
        className="absolute bottom-0 translate-y-4 z-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%]" 
      />
      
      {/* Bottom cloud */}
      <img 
        src="/hero/bottom-cloud.svg" 
        alt="Bottom cloud" 
        className="absolute bottom-0 translate-y-1/2 z-10 w-[100%] md:w-[90%] lg:w-[80%] left-1/2 -translate-x-1/2" 
      />
    </>
  );
}