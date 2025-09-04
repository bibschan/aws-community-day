import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setHasScrolled(window.scrollY > 0);
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        // Load Tally script once
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);


    return (
        <header className={`bg-white sticky top-0 z-50 flex justify-center transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''}`}>
            <div className="w-[95%]">
                <nav className={`flex items-center justify-between transition-all duration-300 ${hasScrolled ? 'h-16 sm:h-18 md:h-20 lg:h-[80px]' : 'h-20 sm:h-24 md:h-28 lg:h-[115px]'}`}>
                    <Link href="/" className="flex items-center justify-start flex-1 md:flex-none">
                        <Image
                            src="/header-logo.svg"
                            alt="AWS Community Day Vancouver"
                            width={431}
                            height={49}
                            className={`w-auto transition-all duration-300 ${hasScrolled ? 'h-6 sm:h-8 md:h-9 lg:h-10' : 'h-8 sm:h-10 md:h-11 lg:h-12'}`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden nav:flex items-center gap-2 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-12">
                        <a href="/past-events/2024/"
                            className="text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            2024 Recap
                        </a>
                        <a href="#activities" className="text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            Activities
                        </a>
                        <a href={AWS_EVENT_CONFIG.links.tickets} target='_blank' className="text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            Get Earlybird Tickets
                        </a>
                        <a href="#sponsors" className="text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            Our Sponsors
                        </a>
                        <button
                            data-tally-open={AWS_EVENT_CONFIG.links.speakersApplicationCode}
                            data-tally-width="800"
                            data-tally-layout="modal"
                            className="bg-[#FF9900] hover:bg-[#E88800] text-white text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] font-heroDate font-extrabold px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3 rounded-lg transition-colors whitespace-nowrap"
                        >
                            Apply to be a Speaker
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="nav:hidden flex flex-col space-y-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-text-primary ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>

            </div>

            {/* Mobile Menu Overlay */}
            <div className={`nav:hidden fixed left-0 right-0 bottom-0 z-40 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} ${hasScrolled ? 'top-16 sm:top-18' : 'top-20 sm:top-24'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Content */}
                <div className="absolute top-0 left-0 right-0 bg-white">
                    <div className="flex flex-col space-y-4 py-4">
                        <a
                            href="#speakers"
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Speakers
                        </a>
                        <a
                            href="#activities"
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Activities
                        </a>
                        <a
                            href="#about"
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#sponsors"
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Sponsors
                        </a>
                        <button
                            data-tally-open={AWS_EVENT_CONFIG.links.speakersApplicationCode}
                            data-tally-width="800"
                            data-tally-layout="modal"
                            className="bg-[#FF9900] hover:bg-[#E88800] text-white text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] font-heroDate font-extrabold px-4 sm:mx-4 md:mx-0 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3 rounded-lg transition-colors whitespace-nowrap"
                        >
                            Apply to be a Speaker
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
