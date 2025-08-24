import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src="/header-logo.svg" 
                                alt="AWS Community Day Vancouver" 
                                width={431} 
                                height={49}
                                className="h-12 w-auto"
                            />
                        </Link>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/recap" className="text-gray-700 hover:text-gray-900 font-medium">
                                2024 Recap
                            </Link>
                            <Link href="/activities" className="text-gray-700 hover:text-gray-900 font-medium">
                                Activities
                            </Link>
                            <Link href="/tickets" className="text-gray-700 hover:text-gray-900 font-medium">
                                Get Earlybird Tickets
                            </Link>
                            <Link href="/sponsors" className="text-gray-700 hover:text-gray-900 font-medium">
                                Our Sponsors
                            </Link>
                        </div>
                    </div>
                    
                    <Link 
                        href="/apply-speaker" 
                        className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                        Apply to be a Speaker
                    </Link>
                </nav>
            </div>
        </header>
    )
}