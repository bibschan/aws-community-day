import React, { useEffect } from 'react'
import speakers from "/public/speakers/speakers.json";
import Clouds from '../ui/clouds';
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants';
import { SPEAKERS } from '@/lib/speakersConstants';
import SpeakerCard from '../ui/SpeakerCard';
import Image from 'next/image';
import Link from 'next/link';

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
            <div className="container px-4 md:px-6 m-auto h-full relative space-y-10">

                <div className="flex flex-col items-center gap-2 place-content-evenly text-center w-full">
                    <h2 className="text-left text-3xl md:text-4xl font-bold tracking-tighter  text-[#01A88D]">
                        {AWS_EVENT_CONFIG.sections.speakers.title}
                    </h2>
                    <p className="mb-2 text-left text-[#666E76]">
                        {AWS_EVENT_CONFIG.sections.speakers.content}
                    </p>

                </div>

                <div className='max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20'>
                    <img src='/speakers/jeffBarr.svg' alt='image of Jeff Barr with blue outline' />
                    <div className='text-center'>
                        <h3 className='text-4xl '>Jeff Bar</h3>
                        <p className='italic text-lg font-thin'>VP & Chief Evangelist at AWS</p>
                        <p className='text-sm font-semibold italic'>Keynote Speaker</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {SPEAKERS.filter(speaker => speaker.tag === 'featured' || speaker.tag === 'speaker').slice(0, 3).map((speaker, index) => (
                        <SpeakerCard key={speaker.id || index} speaker={speaker} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Link
                        href="/speakers"
                        className="mx-auto md:mx-0 inline-block px-6 py-3 bg-[#01A88D] text-white font-medium rounded-md hover:bg-[#e68a00] transition-colors text-center"
                    >
                        {AWS_EVENT_CONFIG.sections.speakers.cta.button}
                    </Link>
                </div>
            </div>

        </section>
    )
}
