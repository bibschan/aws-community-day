import React from 'react'
import Menu from '../ui/menu'
import LottiePaint from '../ui/lottie-paint'
import { Button } from '../ui/cloud-button'
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-orange-500 to-yellow-500 pt-8 md:py-4">
            <Menu />
            <div className="container py-8 pb-0 md:py-12 px-4 md:px-6 m-auto">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col items-center md:items-start justify-center space-y-6 z-10">
                        <div className="inline-block rounded-lg bg-[#CD0364] px-3 py-1 text-sm text-white relative">
                            <div className="absolute -z-10 top-0">
                                <LottiePaint />
                            </div>
                            2025 Event
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                            { AWS_EVENT_CONFIG.title } 2025 in { AWS_EVENT_CONFIG.location.city }
                        </h1>
                        <p className="max-w-[600px] text-black md:text-xl z-20 text-center md:text-left">
                            AWS Community Day is held every year across the globe, and we
                            are excited to be part of it. Join us as we bring together the
                            local community around AWS, while donating any profits to local
                            charity.
                        </p>
                        <div className="inline-flex sm:flex-row relative gap-x-4">
                            <div className="flex flex-col items-center">
                                <Button
                                    className="bg-blue-700 z-10 text-lg text-center font-bold items-center justify-center text-black rounded-md border border-input bg-background px-5 py-2 shadow-sm transition-colors"
                                    href="https://lu.ma/kw8u2byz"
                                    variant="outline"
                                >
                                    Get Your Ticket
                                </Button>
                                <span className="text-xs text-center mt-1">
                                    Early Bird Tickets
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative -top-10 md:top-auto">
                        <img src="/main-banner.svg" alt="Conference" className="" />
                        <div className="absolute bottom-0 left-0 flex w-full justify-between">
                            <div className="rounded-lg bg-background/50 mr-2 px-4 py-2 backdrop-blur-md flex flex-col items-center text-center">
                                <div className="text-sm md:text-2xl font-bold">
                                    October 25, 2025
                                </div>
                                <div className="text-sm text-muted-foreground">2025</div>
                            </div>
                            <div className="rounded-lg bg-background/50 px-4 py-2 backdrop-blur-md flex flex-col items-center text-center">
                                <div className="text-sm md:text-2xl  font-bold">
                                    BCIT Tech Collider
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Downtown, Vancouver
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
