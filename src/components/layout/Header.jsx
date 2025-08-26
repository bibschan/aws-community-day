import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`bg-white sticky top-0 z-50 flex justify-center transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : ''}`}>
            <div className="w-[95%]">
                <nav className={`flex items-center justify-between transition-all duration-300 ${hasScrolled ? 'h-16 sm:h-18 md:h-20 lg:h-[80px]' : 'h-20 sm:h-24 md:h-28 lg:h-[115px]'}`}>
                    {/* Spacer for mobile centering */}
                    <div className="md:hidden w-10"></div>
                    
                    <Link href="/" className="flex items-center md:justify-start justify-center flex-1 md:flex-none">
                        <Image 
                            src="/header-logo.svg" 
                            alt="AWS Community Day Vancouver" 
                            width={431} 
                            height={49}
                            className={`w-auto transition-all duration-300 ${hasScrolled ? 'h-6 sm:h-8 md:h-9 lg:h-10' : 'h-8 sm:h-10 md:h-11 lg:h-12'}`}
                        />
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2 md:gap-3 lg:gap-6 xl:gap-8 2xl:gap-12">
                        <a href="#recap" className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            2024 Recap
                        </a>
                        <a href="#activities" className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            Activities
                        </a>
                        <a href="#tickets" className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            Get Earlybird Tickets
                        </a>
                        <a href="#sponsors" className="text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold whitespace-nowrap">
                            Our Sponsors
                        </a>
                        <Link 
                            href="/apply-speaker" 
                            className="bg-[#FF9900] hover:bg-[#E88800] text-white text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-[16px] font-heroDate font-extrabold px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3 rounded-lg transition-colors whitespace-nowrap"
                        >
                            Apply to be a Speaker
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col space-y-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-text-primary ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>

            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed left-0 right-0 bottom-0 z-40 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} ${hasScrolled ? 'top-16 sm:top-18' : 'top-20 sm:top-24'}`}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black bg-opacity-50" 
                    onClick={() => setIsMenuOpen(false)}
                ></div>
                
                {/* Menu Content */}
                <div className="absolute top-0 left-0 right-0 bg-white">
                    <div className="flex flex-col space-y-4 py-4">
                        <a 
                            href="#recap" 
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            2024 Recap
                        </a>
                        <a 
                            href="#activities" 
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Activities
                        </a>
                        <a 
                            href="#tickets" 
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Earlybird Tickets
                        </a>
                        <a 
                            href="#sponsors" 
                            className="text-[16px] text-text-primary hover:text-text-primary font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Sponsors
                        </a>
                        <Link 
                            href="/apply-speaker" 
                            className="bg-[#FF9900] hover:bg-[#E88800] text-white text-[16px] font-heroDate font-extrabold py-2 px-4 mx-4 rounded-lg transition-colors text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Apply to be a Speaker
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}