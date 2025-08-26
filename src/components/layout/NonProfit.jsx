"use client";

import React, { useEffect, useRef } from "react";
import { AWS_EVENT_CONFIG } from "@/lib/eventConstants";

export default function NonProfit() {
  const cpcaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cpcaRef.current) observer.observe(cpcaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white pt-12 md:pt-20 relative">
      <div className="container px-4 md:px-6 m-auto relative z-20">
        {/* CPCA Section */}
        <div 
          ref={cpcaRef}
          className="mt-12 flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="flex items-center gap-6 mb-6">
            <img
              src="/sponsors/cpca.svg"
              alt="CPCA"
              className="w-18 h-18"
            />
            <p className="text-gray-700 text-lg max-w-3xl">
              As a non-profit organization, our purpose is to bring together & educate the local tech community about the cloud and support our local community through charity.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom cloud cut horizontally in half */}
      <div className="absolute rotate-180 -bottom-24 left-1/2 -translate-x-1/2 z-0 w-screen h-24 overflow-hidden">
        <img 
          src="/hero/bottom-cloud.svg" 
          alt="Bottom cloud" 
          className="w-full h-48 object-cover" 
        />
      </div>
    </section>
  );
}
