export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Content */}
      <div className="h-[95vh] min-h-[600px] w-[95%] bg-blue-200 rounded-3xl relative">
        {/* Moving clouds */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[60%] left-[5%] h-[80px] w-auto opacity-80 animate-slide-1" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[55%] left-[25%] h-[70px] w-auto opacity-70 animate-slide-2" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[45%] left-[45%] h-[60px] w-auto opacity-85 animate-slide-1" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[50%] left-[85%] h-[70px] w-auto opacity-65 animate-slide-1" />
          <img src="/background/cloud-3.svg" alt="Cloud" className="absolute top-[65%] left-[65%] h-[80px] w-auto opacity-75 animate-slide-2" />
        </div>

        {/* City background (behind cloud) */}
        <img src="/hero/hero-city.png" alt="City skyline" className="absolute bottom-0 translate-y-4 z-10 left-1/2 -translate-x-1/2 w-[60%]" />
        
        {/* Bottom cloud */}
        <img src="/hero/bottom-cloud.svg" alt="Bottom cloud" className="absolute bottom-0 translate-y-1/2 z-10 w-[80%] left-1/2 -translate-x-1/2" />

        <div className="relative z-20 px-6 max-w-4xl mx-auto pt-8 pb-6">
          {/* Save The Date */}
          <p className="text-lg md:text-xl font-medium mb-2 tracking-wide text-gray-700">
            SAVE THE DATE
          </p>

          {/* Main Date */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 leading-tight text-gray-800">
            OCTOBER 25, 2025
          </h1>

          {/* Location */}
          <p className="text-base md:text-lg mb-4 font-medium text-gray-700 max-w-2xl mx-auto">
            @ BCIT DOWNTOWN CAMPUS TECH COLLIDER
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
              Apply to be a Speaker
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-medium text-sm border border-gray-300 transition-colors">
              Get Earlybird Tickets
            </button>
          </div>

        </div>

        {/* More Details */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
          <p className="text-gray-600 text-lg font-medium tracking-wide">MORE DETAILS BELOW</p>
        </div>
      </div>
    </section>
  );
}
