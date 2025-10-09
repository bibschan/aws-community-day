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

    const calculateEventHeight = (startTime, endTime) => {
        const startMinutes = timeToMinutes(startTime)
        const endMinutes = timeToMinutes(endTime)
        const duration = endMinutes - startMinutes
        return Math.max(duration / 15 * 20, 40) // 20px per 15 minutes, minimum 40px
    }

    const calculateEventTop = (startTime) => {
        const firstEventTime = timeToMinutes("11:00 AM")
        const currentEventTime = timeToMinutes(startTime)
        const minutesSinceStart = currentEventTime - firstEventTime
        return (minutesSinceStart / 15) * 20 + 60 // 20px per 15 minutes, 60px offset for header
    }

    const getStageEvents = (stageId) => {
        return scheduleEvents
            .filter(event => event.stage === stageId)
            .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))
    }

    const isBreak = (title) => {
        return title.toLowerCase().includes('break') || title.toLowerCase().includes('lunch')
    }
    const isLiveStream = (title) => {
        return title.toLowerCase().includes('live')
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

                {/* Mobile Stage Selector */}
                <div className="md:hidden mb-6">
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

                {/* Desktop Grid Layout */}
                <div className="hidden md:block">
                    <div className={`grid gap-4 ${selectedStageFromMap ? 'grid-cols-2' : 'grid-cols-6'}`}>
                        {/* Time Column */}
                        <div className="col-span-1">
                            <div className="h-16 flex items-center justify-center font-bold text-[#FF9900] border-b-2 border-gray-700">
                                Time
                            </div>
                            <div className="relative" style={{ height: '800px' }}>
                                {Array.from({ length: 13 }, (_, i) => {
                                    const hour = i + 11
                                    const displayHour = hour > 12 ? hour - 12 : hour
                                    const period = hour >= 12 ? 'PM' : 'AM'
                                    return (
                                        <div
                                            key={i}
                                            className="absolute text-sm text-gray-400 font-medium"
                                            style={{ top: `${i * 60}px` }}
                                        >
                                            {displayHour}:00 {period}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Stage Columns */}
                        {stages
                            .filter(stage => selectedStageFromMap === null || stage.id === selectedStageFromMap)
                            .map((stage) => (
                            <div key={stage.id} className="col-span-1">
                                <div className="h-16 flex items-center justify-center font-bold text-[#FF9900] border-b-2 border-gray-700 text-center px-2">
                                    {stage.name}
                                </div>
                                <div className="relative" style={{ height: '800px' }}>
                                    {getStageEvents(stage.id).map((event) => (
                                        <div
                                            key={event.id}
                                            className={`absolute left-1 right-1 py-1 px-2 rounded text-xs transition-colors  ${isBreak(event.title)
                                                    ? 'bg-gray-600 text-gray-300'
                                                    : isLiveStream(event.title)
                                                        ? 'bg-[#01A88D] text-white'
                                                        : 'bg-[#BCDAFE] text-black '
                                                }
                                                `}
                                            style={{
                                                top: `${calculateEventTop(event.startTime)}px`,
                                                height: `${calculateEventHeight(event.startTime, event.endTime)}px`,
                                            }}
                                            title={`${event.startTime} - ${event.endTime}\n${event.location}\n${event.notes}`}
                                        >
                                            <div className="font-semibold  text-xs leading-tight">
                                                {event.title}
                                            </div>
                                            <div className="text-xs opacity-90">
                                                {event.startTime} - {event.endTime}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
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
                                    {event.notes && (
                                        <div className="text-xs text-gray-500 mt-1">
                                            {event.notes}
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
