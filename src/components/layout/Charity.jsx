import React from 'react'
import { Heart } from "lucide-react";

function Charity() {

    return (
        <div className="w-full mx-auto p-6 md:p-8 lg:p-12 bg-white">
            {/* Dashed border container */}
            <div className="container flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed py-10 px-6 mx-auto px-auto ">

                {/* Heart with hands icon */}
                <div className="flex justify-center mb-6">
                    <img
                        src='/charity/handWithHearth.svg'
                        alt='hand outlined in red with heart in it'
                    />
                </div>

                {/* Main heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6 md:mb-8">
                    All Profits Donated to Local Charity
                </h2>

                {/* Description paragraph */}
                <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
                    Union Gospel Mission is a charitable organization providing meals, education,
                    shelter, safe and affordable housing, drug and alcohol recovery programs, and
                    support services to those struggling with homelessness and addiction in Canada,
                    with locations in the Metro Vancouver area and the city of Mission.
                </p>

                {/* UGM Logo */}
                <div className="mb-8 md:mb-10">
                    <img
                        className="max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto"
                        src='/charity/unionGospelMission.svg'
                        alt='Union Gospel Mission Logo'
                    />

                </div>

                {/* CTA Button */}
                <a
                    href='https://ugm.ca/'
                    className="bg-[#DD344C] hover:bg-red-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 lg:py-4 lg:px-10 rounded-lg text-base md:text-lg max-w-72 ">
                    Learn More About UGM
                </a>
            </div>
        </div>
    )
}

export default Charity
