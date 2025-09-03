import React, { useEffect }from 'react'
import speakers from "/public/speakers/speakers.json";
import Clouds from '../ui/clouds';
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants';
import Image from 'next/image';

export default function Speakers(width) {
        useEffect(() => {
            // Load Tally script once
            const script = document.createElement("script");
            script.src = "https://tally.so/widgets/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }, []);


    return (
        <section className="w-full p-8 md:p-24 relative overflow-hidden bg-white" id='speakers'>
            <div className="container px-4 md:px-6 m-auto h-full relative">
                <div className='flex gap-4 rounded-2xl border-2 border-dashed py-10 px-6'>
                    <div>
                        <Image
                            src='./speakers/speakers-icon.svg'
                            width={500}
                            height={500}
                            alt='speaker section icon'
                        />
                    </div>
                    <div className="flex flex-col gap-2 place-content-evenly text-center">
                        <h2 className="text-left text-3xl md:text-4xl font-bold tracking-tighter uppercase text-[#DD344C]">
                            {AWS_EVENT_CONFIG.sections.speakers.title}
                        </h2>
                        <p className="mb-2 text-left text-[#DD344C]">
                            {AWS_EVENT_CONFIG.sections.speakers.content}
                        </p>
                        <div className="flex justify-start w-full">
                            <button
                                data-tally-open={AWS_EVENT_CONFIG.links.speakersApplicationCode}
                                data-tally-width="800"
                                data-tally-layout="modal"
                                rel="AWS Day website"
                                className="inline-block px-6 py-3 bg-[#DD344C] text-white font-medium rounded-md hover:bg-[#e68a00] transition-colors text-center"
                            >
                                {AWS_EVENT_CONFIG.sections.speakers.cta.button}
                            </button>

                        </div>
                    </div>

                </div>


            </div>
            {/* <Clouds /> */}
        </section>
    )
}
