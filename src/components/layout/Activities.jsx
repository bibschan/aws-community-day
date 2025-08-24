import React from 'react'
import Image from 'next/image'

export default function Activities() {
    const activities = [
        {
            icon: "/activities/activity-icon-1.svg",
            title: "Main Stage Speaker",
            description: "Hear from top AWS experts and industry leaders"
        },
        {
            icon: "/activities/activity-icon-2.svg",
            title: "Panel Talks",
            description: "Explore real-world cloud stories and insights"
        },
        {
            icon: "/activities/activity-icon-3.svg",
            title: "Builder Workshops",
            description: "Get hands-on with AWS tools and services"
        },
        {
            icon: "/activities/activity-icon-4.svg",
            title: "Breakout Tracks",
            description: "Explore real-world cloud stories and insights"
        },
        {
            icon: "/activities/activity-icon-5.svg",
            title: "E-Sports Hackathon",
            description: "Witness high-energy coding competitions"
        },
        {
            icon: "/activities/activity-icon-6.svg",
            title: "Chill & Connect Zone",
            description: "Unwind and network with fellow builders"
        }
    ];

    return (
        <section
            className="w-full py-16 md:py-24 relative overflow-hidden bg-gray-50"
            id="activities"
        >
            <div className="container px-4 md:px-6 m-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        2025 AWS COMMUNITY DAY
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                        EVENT ACTIVITIES
                    </h3>
                </div>

                <div className="relative">
                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        {activities.map((activity, index) => (
                        <div key={index} className="relative">
                                <div className="grid grid-cols-[1fr_160px_1fr] gap-8 items-center mb-12">
                                    {/* Left content for even indexes */}
                                    {index % 2 === 0 ? (
                                        <div className="text-right pr-12">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {activity.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {activity.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    
                                    {/* Icon - Always in center column */}
                                    <div className="flex justify-center">
                                        <div className="relative">
                                            <Image
                                                src={activity.icon}
                                                alt={activity.title}
                                                width={160}
                                                height={160}
                                                className="w-40 h-40"
                                            />
                                            {/* Dotted line */}
                                            {index < activities.length - 1 && (
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 border-l-2 border-dotted border-gray-400"></div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Right content for odd indexes */}
                                    {index % 2 !== 0 ? (
                                        <div className="text-left pl-12">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {activity.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {activity.description}
                                            </p>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <Image
                                            src={activity.icon}
                                            alt={activity.title}
                                            width={100}
                                            height={100}
                                            className="w-20 h-20"
                                        />
                                        {/* Dotted line for mobile */}
                                        {index < activities.length - 1 && (
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 border-l-2 border-dotted border-gray-400"></div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}