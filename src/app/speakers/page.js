"use client"
import { useEffect, useState } from "react"
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Speakers from '@/components/layout/Speakers'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function SpeakersPage() {
  const { width } = useWindowSize();

  return (
    <div className="h-svh">
      <Header />
      <main className="flex-1 bg-white h-1/2">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heroDate font-extrabold leading-none text-text-primary text-center mb-8">
              {AWS_EVENT_CONFIG.sections.speakers.title}
            </h1>
            <div className="prose prose-lg mx-auto text-center mb-12">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {AWS_EVENT_CONFIG.sections.speakers.content}
              </p>
              <p className="text-lg text-gray-500">
                More details coming soon
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
