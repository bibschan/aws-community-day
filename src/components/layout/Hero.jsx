export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Content */}
      <div className="h-[95vh] lg:min-h-[900px] w-[95%] bg-blue-200 rounded-3xl pt-[10vh] relative">
        {/* Moving clouds */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[60%] left-[5%] h-[100px] w-auto animate-slide-1" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[55%] left-[25%] h-[100px] w-auto animate-slide-2" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[75%] left-[45%] h-[100px] w-auto animate-slide-1" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[50%] left-[50%] h-[100px] w-auto animate-slide-1" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[65%] left-[65%] h-[100px] w-auto animate-slide-2" />
        </div>

        {/* City background (behind cloud) */}
        <img src="/hero/hero-city.png" alt="City skyline" className="absolute bottom-0 translate-y-4 z-10 left-1/2 -translate-x-1/2 w-[60%]" />
        
        {/* Bottom cloud */}
        <img src="/hero/bottom-cloud.svg" alt="Bottom cloud" className="absolute bottom-0 translate-y-1/2 z-10 w-[80%] left-1/2 -translate-x-1/2" />

        <div className="relative z-20 px-1 max-w-8xl mx-auto pt-8 pb-6">
          {/* Save The Date */}
          <p className="text-lg md:text-2xl lg:text-[32px] font-heroDate font-extrabold mb-2 tracking-normal text-[#333E48] leading-tight">
            SAVE THE DATE
          </p>

          {/* Main Date */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[128px] font-heroDate font-extrabold mb-3 leading-none text-[#333E48]">
            OCTOBER 25, 2025
          </h1>

          {/* Location */}
          <p className="text-base md:text-xl lg:text-2xl xl:text-[32px] mb-4 font-heroRegular font-normal text-[#333E48] max-w-4xl mx-auto leading-relaxed lg:leading-[64px]">
            @ BCIT DOWNTOWN CAMPUS TECH COLLIDER
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <button className="bg-[#FF9900] hover:bg-[#E88800] text-white p-3 md:p-4 rounded-md font-heroDate font-extrabold text-sm md:text-[16px] leading-tight transition-colors">
              Apply to be a Speaker
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 p-3 md:p-4 rounded-md font-heroDate font-extrabold text-sm md:text-[16px] leading-tight border border-gray-300 transition-colors">
              Get Earlybird Tickets
            </button>
          </div>

        </div>

        {/* More Details */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
          <p className="text-[#333E48] text-base md:text-xl lg:text-[24px] font-heroRegular font-normal leading-tight tracking-normal">MORE DETAILS BELOW</p>
        </div>
      </div>
    </section>
  );
}
