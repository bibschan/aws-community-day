import React from 'react'
import speakers from "/public/speakers/speakers.json";
import Clouds from '../ui/clouds';

export default function Speakers(width) {

    const getVisibleSpeakers = () => {
        if (!width) return speakers.slice(0, 4);
        if (width < 640) return speakers.slice(0, 4);
        if (width < 768) return speakers.slice(0, 5);
        return speakers;
    };

    const visibleSpeakers = getVisibleSpeakers();
    return (
        <section className="w-full p-8 md:p-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 m-auto h-full relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 rounded-lg p-2">
                        <div className="relative w-full mb-4 flex justify-center">
                            {/* big cloud */}
                            <img
                                src="/background/cloud.svg"
                                className="absolute w-[1200px] md:w-[1400px] max-w-screen-2xl -top-10 md:-top-28"
                            />
                        </div>

                        <div className="inline-block rounded-lg bg-[#4E1479] text-white px-3 py-1 text-sm z-20 relative">
                            CFP is open!
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)] z-20 relative">
                            Want to speak?
                        </h2>
                        <div className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed z-20 relative space-y-4">
                            <p className="mb-2">
                                We're excited to announce that our Call for Speakers is now
                                open! AWS Community Day is looking for passionate speakers
                                to share their knowledge and experiences with our community.
                                We'd love to hear your story!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center py-8 z-50 relative">
                    <h3 className="text-md mb-3 z-50">Previous Speakers</h3>
                    <div className="flex justify-center max-w-6xl mx-auto">
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-0">
                            {visibleSpeakers.map((speaker, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center -mx-1 z-50"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm transform hover:scale-110 transition-transform duration-200">
                                        <a
                                            href={speaker.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full h-full"
                                        >
                                            <img
                                                src={speaker.image}
                                                alt={speaker.alt || speaker.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </a>
                                    </div>
                                    <h4 className="font-semibold text-center text-sm">
                                        {speaker.name}
                                    </h4>
                                    {speaker.title && (
                                        <p className="text-xs text-gray-600 text-center">
                                            {speaker.title}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full mt-6">
                    <a
                        href="https://tally.so/r/mVBZYy"
                        target="_blank"
                        rel="AWS Day website"
                        className="inline-block px-6 py-3 bg-[#FF9900] text-white font-medium rounded-md hover:bg-[#e68a00] transition-colors text-center"
                    >
                        Apply to Speak
                    </a>
                </div>
            </div>
            <Clouds />
        </section>
    )
}
