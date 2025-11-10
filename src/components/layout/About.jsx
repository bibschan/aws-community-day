import React from 'react'

import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import { Button } from '../ui/button'

export default function About() {
  return (
    <section
      className="w-full bg-muted p-8 md:py-20 bg-white"
      id="about"
    >
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ">
          <div className="space-y-2">
            <div className="container px-4 md:px-6">
              <h2 className="text-gray-700 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-2 uppercase">
                {AWS_EVENT_CONFIG.sections.about.title}
              </h2>
              <p className="max-w-[900px] text-gray-700 align-center text-center  text-lg mb-4 md:mb-12">
                {AWS_EVENT_CONFIG.sections.about.description}
              </p>

            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-0">
          <video
            src="/videos/highlight-video.mp4"
            controls
            muted
            autoPlay
            className="w-full max-w-[900px] mb-6"
          />

        </div>
      </div>
    </section >
  )
}
