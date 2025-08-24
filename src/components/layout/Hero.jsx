export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Content */}
      <div className="h-[95vh] min-h-[600px] w-[95%] bg-blue-200 rounded-3xl relative">
        {/* City background (behind cloud) */}
        <img src="/hero/hero-city.svg" alt="City skyline" className="absolute bottom-0 translate-y-6 z-10 left-1/2 -translate-x-1/2 w-[60%]" />
        
        {/* Bottom cloud */}
        <img src="/hero/bottom-cloud.svg" alt="Bottom cloud" className="absolute bottom-0 translate-y-1/2 z-10 w-[80%] left-1/2 -translate-x-1/2" />

        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          {/* Save The Date */}
          <p className="text-lg md:text-xl font-medium mb-4 tracking-wide text-gray-700">
            SAVE THE DATE
          </p>

          {/* Main Date */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight text-gray-800">
            OCTOBER 25, 2025
          </h1>

          {/* Location */}
          <p className="text-xl md:text-2xl mb-8 font-medium text-gray-700">
            @ BCIT DOWNTOWN CAMPUS TECH COLLIDER
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Apply to be a Speaker
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg border border-gray-300 transition-colors">
              Get Earlybird Tickets
            </button>
          </div>

          {/* More Details */}
          <div className="mt-12">
            <p className="text-gray-600 text-lg">MORE DETAILS BELOW</p>
          </div>
        </div>
      </div>
    </section>
  );
}
