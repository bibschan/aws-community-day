"use client"
import { useState } from 'react'
import { scheduleEvents, stages, allDayActivities } from '@/lib/scheduleConstants'

export default function Schedule({ selectedStageFromMap = null }) {
    const [activeStage, setActiveStage] = useState(1)

    const timeToMinutes = (time) => {
        const [timeStr, period] = time.split(' ')
        const [hours, minutes] = timeStr.split(':').map(Number)
        let adjustedHours = hours

        if (period === 'PM' && hours !== 12) {
            adjustedHours = hours + 12
        } else if (period === 'AM' && hours === 12) {
            adjustedHours = 0
        }

        return adjustedHours * 60 + minutes
    }

    const getStageEvents = (stageId) => {
        return scheduleEvents
            .filter(event => event.stage === stageId)
            .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))
    }

    const isBreak = (title) => {
        return title.toLowerCase().includes('break') || title.toLowerCase().includes('lunch')
    }

    return (
        <section className="w-full py-16 md:py-24 bg-white text-[#333E48]" id="schedule">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Event Schedule
                    </h2>
                    <p className="text-xl ">
                        October 25, 2025 - Full Day Schedule
                    </p>
                </div>

                {/* Stage Selector */}
                <div className="mb-6">
                    <div className="flex overflow-x-auto gap-2 pb-2">
                        {stages.map((stage) => (
                            <button
                                key={stage.id}
                                onClick={() => setActiveStage(stage.id)}
                                className={`px-2 py-2 rounded-lg whitespace-nowrap transition-colors ${activeStage === stage.id
                                    ? 'bg-[#FF9900] text-white'
                                    : 'bg-gray-700 text-gray-300 '
                                    }`}
                            >
                                {stage.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Schedule Layout */}
                <div>
                    <div className="bg-white rounded-lg overflow-hidden">
                        <div className="bg-[#FF9900] text-white p-4 text-center">
                            <h3 className="font-bold text-lg">{stages.find(s => s.id === activeStage)?.name}</h3>
                        </div>
                        <div className="p-2 space-y-3">
                            {getStageEvents(activeStage).map((event) => (
                                <div
                                    key={event.id}
                                    className={`p-3 rounded-lg ${isBreak(event.title)
                                        ? 'bg-white text-[#333E48]'
                                        : 'bg-white text-[#333E48] border-l-4 border-[#BCDAFE]'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-sm">{event.title}</h4>
                                        <span className="text-xs text-[#333E48] ml-2 whitespace-nowrap">
                                            {event.startTime} - {event.endTime}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {event.location}
                                    </div>
                                    {event.talkTitle && (
                                        <div className="text-xs text-gray-500 mt-1">
                                            {event.talkTitle}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Day Activities */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-[#FF9900] mb-6 text-center">
                        All Day Activities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {allDayActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-400"
                            >
                                <h4 className="font-semibold text-[#333E48] mb-2">{activity.title}</h4>
                                <p className="text-sm text-gray-400 mb-1">{activity.location}</p>
                                <p className="text-xs text-gray-500">{activity.notes}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
