"use client"
import Image from 'next/image'

export default function SpeakerCard({ speaker }) {
  return (
    <div className="flex flex-col items-center text-center p-6 max-w-xs">
      {/* Circular Avatar with Green Border */}
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-full border-4 border-[#01A88D] p-1 bg-white">
          <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
            {speaker.image && speaker.image !== "/speakers/" ? (
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-xs">No Image</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Speaker Name */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        {speaker.name}
      </h3>

      {/* Title */}
      <p className="text-sm text-gray-600 mb-1">
        {speaker.title}
      </p>

      {/* Community Speaker Label */}
      <p className="text-sm font-medium italic text-gray-700">
        Community Speaker
      </p>
    </div>
  )
}
