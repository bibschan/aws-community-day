"use client"
import { useState } from 'react'
import { scheduleEvents, stages, allDayActivities } from '@/lib/scheduleConstants'

export default function MapAndSchedule() {
    const [selectedFloor, setSelectedFloor] = useState(2) // 2 for 2nd floor, 5 for 5th floor
    const [selectedStage, setSelectedStage] = useState(null) // For highlighting individual stages

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
        // Map hackathon workspace buttons (ids 4 & 5) to stage 3 (Hackathon Work Time)
        const mappedStageId = (stageId === 4 || stageId === 5) ? 3 : stageId
        return scheduleEvents
            .filter(event => event.stage === mappedStageId)
            .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))
    }

    const isBreak = (title) => {
        return title.toLowerCase().includes('break') || title.toLowerCase().includes('lunch')
    }

    // Define which stages are on which floor
    const stageButtons = [
        { id: 1, name: "Main Stage", position: "top-[50%] left-[69%]", floor: 2 },
        { id: 2, name: "2nd Stage", position: "top-[60%] left-[80%]", floor: 5 },
        { id: 4, name: "Hackathon Workspace 1", position: "top-[70%] right-[20%]", floor: 5 },
        { id: 5, name: "Hackathon Workspace 2", position: "top-[60%] right-[30%]", floor: 5 }
    ]

    // Map image based on selected floor
    const mapImage = selectedFloor === 5
        ? '/venue/2025_AWSDay_Map_5TH_FLOOR.webp'
        : '/venue/2025_AWSDay_Map_2ND_FLOOR.webp'

    // Filter stages and buttons by floor
    const stagesOnFloor = stageButtons.filter(stage => stage.floor === selectedFloor)

    // Create stage data for display, mapping hackathon workspaces to their button names
    const getStageForDisplay = (stageId) => {
        const button = stageButtons.find(b => b.id === stageId)
        if (button) {
            return { id: stageId, name: button.name }
        }
        return stages.find(s => s.id === stageId)
    }

    return (
        <section className="w-full pb-16 md:pb-24 md:pt-4 bg-white text-[#333E48]" id="schedule">
            <style jsx>{`
                @keyframes pulseShadow {
                    0%, 100% {
                        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                    }
                    50% {
                        box-shadow: 0 10px 25px -3px rgba(255, 193, 7, 0.6), 0 8px 10px -4px rgba(255, 193, 7, 0.4);
                    }
                }
                .pulse-shadow-animation {
                    animation: pulseShadow 3.5s ease-in-out infinite;
                }
            `}</style>
            <div className="container mx-auto px-4 md:px-6 max-w-[1800px]">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Event Schedule
                    </h2>
                    <p className="text-xl">
                        October 25, 2025 - Full Day Schedule
                    </p>
                    <p className="text-xl">
                        Click on a room in the map or select a floor to view its full schedule.
                    </p>
                </div>

                {/* Floor Toggle - Visible on all screen sizes */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-lg border-2 border-[#FF9900] overflow-hidden">
                        <button
                            onClick={() => {
                                setSelectedFloor(2)
                                setSelectedStage(null)
                            }}
                            className={`px-6 py-3 font-semibold transition-colors ${selectedFloor === 2
                                    ? 'bg-[#FF9900] text-white'
                                    : 'bg-white text-[#333E48] hover:bg-[#FFF3E0]'
                                }`}
                        >
                            2nd Floor
                        </button>
                        <button
                            onClick={() => {
                                setSelectedFloor(5)
                                setSelectedStage(null)
                            }}
                            className={`px-6 py-3 font-semibold transition-colors ${selectedFloor === 5
                                    ? 'bg-[#FF9900] text-white'
                                    : 'bg-white text-[#333E48] hover:bg-[#FFF3E0]'
                                }`}
                        >
                            5th Floor
                        </button>
                    </div>
                </div>

                {/* Desktop Layout - Map and Schedule Side by Side */}
                <div className="container hidden md:grid md:grid-cols-3 md:gap-8 mb-12 mx-auto">
                    {/* Map Section - Takes 2 columns */}
                    <div className="flex flex-col md:col-span-2">
                        <h3 className="text-2xl font-bold text-[#FF9900] mb-4 text-center">Venue Map</h3>
                        <div className="relative">
                            <img src={mapImage} alt='Venue Map' className='w-full h-auto' />
                            {stagesOnFloor.map((stage) => (
                                <button
                                    key={stage.id}
                                    onClick={() => setSelectedStage(stage.id === selectedStage ? null : stage.id)}
                                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-lg font-semibold text-sm transition-all shadow-lg hover:scale-110 ${stage.id === selectedStage
                                            ? 'bg-[#FF9900] text-white ring-4 ring-[#FF9900] ring-opacity-50'
                                            : 'bg-white text-[#333E48] hover:bg-[#FF9900] hover:text-white'
                                        } ${selectedFloor === 5 && stage.id !== selectedStage ? 'pulse-shadow-animation' : ''}`}
                                    style={{
                                        top: stage.position.split(' ')[0].replace('top-[', '').replace(']', ''),
                                        left: stage.position.includes('left')
                                            ? stage.position.split(' ')[1].replace('left-[', '').replace(']', '')
                                            : 'auto',
                                        right: stage.position.includes('right')
                                            ? stage.position.split(' ')[1].replace('right-[', '').replace(']', '')
                                            : 'auto'
                                    }}
                                >
                                    {stage.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Schedule Section - Takes 1 column */}
                    <div className="flex flex-col md:col-span-1">
                        <h3 className="text-2xl font-bold text-[#FF9900] mb-4 text-center">Schedule</h3>
                        <div className="overflow-y-auto max-h-[800px]">
                            {selectedStage ? (
                                <div className="bg-white rounded-lg overflow-hidden">
                                    <div className="p-2 space-y-3">
                                        {getStageEvents(selectedStage).map((event) => (
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
                            ) : (
                                <div className="space-y-6">
                                    {stagesOnFloor.map((stageButton) => (
                                        <div key={stageButton.id} className="bg-white rounded-lg overflow-hidden border-2 border-gray-200">
                                            <div className="p-2 space-y-2">
                                                {getStageEvents(stageButton.id).map((event) => (
                                                    <div
                                                        key={event.id}
                                                        className={`p-2 rounded-lg ${isBreak(event.title)
                                                            ? 'bg-white text-[#333E48]'
                                                            : 'bg-white text-[#333E48] border-l-4 border-[#BCDAFE]'
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-start mb-1">
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
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Stacked */}
                <div className="md:hidden">
                    {/* Map Section - Mobile */}
                    <div className='w-full h-full flex justify-center py-7'>
                        <img src={mapImage} alt='Venue Map' className='w-full h-auto' />
                    </div>

                    {/* Mobile Stage Selector - Only show stages on current floor */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {stagesOnFloor.map((stage) => (
                                <button
                                    key={stage.id}
                                    onClick={() => setSelectedStage(stage.id === selectedStage ? null : stage.id)}
                                    className={`px-2 py-2 rounded-lg whitespace-nowrap transition-colors ${selectedStage === stage.id
                                        ? 'bg-[#FF9900] text-white'
                                        : 'bg-gray-700 text-gray-300'
                                        }`}
                                >
                                    {stage.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Schedule - Show all stages on floor or selected stage */}
                    {selectedStage ? (
                        <div className="bg-white rounded-lg overflow-hidden">
                            <div className="bg-[#FF9900] text-white p-4 text-center">
                                <h3 className="font-bold text-lg">{getStageForDisplay(selectedStage)?.name}</h3>
                            </div>
                            <div className="p-2 space-y-3">
                                {getStageEvents(selectedStage).map((event) => (
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
                    ) : (
                        <div className="space-y-6">
                            {stagesOnFloor.map((stageButton) => (
                                <div key={stageButton.id} className="bg-white rounded-lg overflow-hidden border-2 border-gray-200">
                                    <div className="bg-[#FF9900] text-white p-3 text-center">
                                        <h3 className="font-bold text-base">{stageButton.name}</h3>
                                    </div>
                                    <div className="p-2 space-y-2">
                                        {getStageEvents(stageButton.id).map((event) => (
                                            <div
                                                key={event.id}
                                                className={`p-2 rounded-lg ${isBreak(event.title)
                                                    ? 'bg-white text-[#333E48]'
                                                    : 'bg-white text-[#333E48] border-l-4 border-[#BCDAFE]'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start mb-1">
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
                            ))}
                        </div>
                    )}
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
