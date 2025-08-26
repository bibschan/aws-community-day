import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/header-logo.svg" 
                            alt="AWS Community Day Vancouver" 
                            width={431} 
                            height={49}
                            className="h-10 md:h-12 w-auto"
                        />
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/recap" className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold">
                            2024 Recap
                        </Link>
                        <Link href="/activities" className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold">
                            Activities
                        </Link>
                        <Link href="/tickets" className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold">
                            Get Earlybird Tickets
                        </Link>
                        <Link href="/sponsors" className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold">
                            Our Sponsors
                        </Link>
                        <Link 
                            href="/apply-speaker" 
                            className="bg-[#FF9900] hover:bg-[#E88800] text-white text-sm font-heroDate font-extrabold py-2 px-4 rounded-lg transition-colors"
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
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 border-t border-gray-200`}>
                    <div className="flex flex-col space-y-4">
                        <Link 
                            href="/recap" 
                            className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            2024 Recap
                        </Link>
                        <Link 
                            href="/activities" 
                            className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Activities
                        </Link>
                        <Link 
                            href="/tickets" 
                            className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Earlybird Tickets
                        </Link>
                        <Link 
                            href="/sponsors" 
                            className="text-sm text-gray-700 hover:text-gray-900 font-heroDate font-extrabold px-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Sponsors
                        </Link>
                        <Link 
                            href="/apply-speaker" 
                            className="bg-[#FF9900] hover:bg-[#E88800] text-white text-sm font-heroDate font-extrabold py-2 px-4 mx-4 rounded-lg transition-colors text-center"
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