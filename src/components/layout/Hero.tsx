import React from 'react'
import { InstagramCarousel } from '../ui/instagram-carousel'

export default function Hero() {
    return (
        <section
            className="w-full bg-muted p-8 md:py-20 "
            style={{
                backgroundImage: "url('/background/blue-paint-bg.png')",
            }}
        >
            <div className="container px-4 md:px-6 m-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center ">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-[#EA4129] text-white px-3 py-1 text-sm">
                            Recap
                        </div>
                        <div className="container px-4 md:px-6">
                            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-2">
                                2024 Was a Huge Success!
                            </h2>
                            <p className="max-w-[900px]  align-center text-center text-black text-lg mb-12">
                                Catch up on the highlights from AWS Day 2024, where tech
                                enthusiasts and industry experts gathered to explore the
                                latest in cloud innovation!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-4xl font-bold text-[#FF9900]">
                                        780+
                                    </div>
                                    <div className="text-lg text-gray-700">Attendees</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-4xl font-bold text-[#FF9900]">13</div>
                                    <div className="text-lg text-gray-700">Sponsors</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-4xl font-bold text-[#FF9900]">7</div>
                                    <div className="text-lg text-gray-700">Inspiring Talks</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="text-4xl font-bold text-[#FF9900]">20+</div>
                                    <div className="text-lg text-gray-700">
                                        Community Partners
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mt-4">
                    <h3 className="text-2xl font-bold mb-2">Video Highlights</h3>
                    <video
                        src="/videos/highlight-video.mp4"
                        controls
                        muted
                        autoPlay
                        className="w-full max-w-[900px] mb-6"
                    />

                    <h3 className="text-2xl font-bold mt-2">Event Pictures</h3>
                    <InstagramCarousel />
                </div>
            </div>
        </section>

    )
}
