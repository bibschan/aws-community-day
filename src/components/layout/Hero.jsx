import HeroClouds from './HeroClouds';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Content */}
      <div className="h-[95vh] lg:min-h-[900px] w-[95%] rounded-3xl pt-[10vh] relative overflow-hidden" style={{backgroundColor: '#BCDAFE'}}>
        
        <HeroClouds />

        <div className="relative z-20 px-1 max-w-8xl mx-auto pt-8 pb-6">
          {/* Save The Date */}
          <p className="text-lg md:text-2xl lg:text-[32px] font-heroDate font-extrabold mb-2 tracking-normal text-text-primary leading-tight">
            SAVE THE DATE
          </p>

          {/* Main Date */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[128px] font-heroDate font-extrabold mb-3 leading-none text-text-primary">
            OCTOBER 25, 2025
          </h1>

          {/* Location */}
          <p className="text-base md:text-xl lg:text-2xl xl:text-[32px] mb-4 font-heroRegular font-normal text-text-primary max-w-4xl mx-auto leading-relaxed lg:leading-[64px]">
            @ BCIT DOWNTOWN CAMPUS TECH COLLIDER
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <button className="bg-[#FF9900] hover:bg-[#E88800] text-white p-3 md:p-4 rounded-md font-heroDate font-extrabold text-sm md:text-[16px] leading-tight transition-colors">
              Apply to be a Speaker
            </button>
            <button className="bg-white hover:bg-gray-100 text-text-primary p-3 md:p-4 rounded-md font-heroDate font-extrabold text-sm md:text-[16px] leading-tight transition-colors">
              Get Earlybird Tickets
            </button>
          </div>

        </div>

        {/* More Details */}
        <div className="absolute bottom-1 md:bottom-2 lg:bottom-3 left-1/2 -translate-x-1/2 z-30">
          <p className="text-text-primary text-base md:text-xl lg:text-[24px] font-heroRegular font-normal leading-tight tracking-normal">
            MORE DETAILS BELOW <span className="inline-block animate-bounce-arrow -translate-y-0.5">↓</span>
          </p>
        </div>
      </div>
    </section>
  );
}
