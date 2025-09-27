"use client"
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import About from '@/components/layout/About'
import Charity from '@/components/layout/Charity'
import NonProfit from '@/components/layout/NonProfit'
import Schedule from '@/components/layout/Schedule'

export default function AboutPage() {
  return (
    <div className="">
      <Header />
      <main className="flex-1 bg-white">
        <div className="pt-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heroDate font-extrabold leading-none text-text-primary text-center mb-8">
              About AWS Community Day
            </h1>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                {AWS_EVENT_CONFIG.description}
              </p>
            </div>
          </div>
        </div>
        <About />
        <Schedule />
        <NonProfit />
      </main>
      <Footer />
    </div>
  )
}
