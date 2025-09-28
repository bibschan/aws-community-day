"use client";

import React, { useEffect, useRef } from "react";
import { SPONSORS } from "@/lib/sponsorsConstants";
import { AWS_EVENT_CONFIG } from "@/lib/eventConstants";
import { Button } from "../ui/button";

export default function Sponsors() {
  const titleRef = useRef(null);
  const mainSponsorRef = useRef(null);
  const silverSponsorsRef = useRef(null);
  const bronzeSponsorsRef = useRef(null);

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

    const elements = [titleRef, mainSponsorRef, silverSponsorsRef, bronzeSponsorsRef];
    elements.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);
  // Filter sponsors by type
  const goldSponsors = SPONSORS.filter((sponsor) => sponsor.type === "Gold");
  const silverSponsors = SPONSORS.filter((sponsor) => sponsor.type === "Silver");
  const bronzeSponsors = SPONSORS.filter(
    (sponsor) => sponsor.type === "Bronze"
  );

  return (
    <section className="w-full bg-white pt-12 md:pt-20 relative" id="sponsors">
      <div className="container px-4 md:px-6 m-auto relative z-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative">
            <div className="relative space-y-2 z-10">
              <h3
                ref={titleRef}
                className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-heroDate font-extrabold leading-none text-text-primary opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                {AWS_EVENT_CONFIG?.sections?.sponsors?.title?.toUpperCase() ?? "SPONSORS"}
              </h3>

              {/* Sponsor Content */}
              <div className="mx-auto max-w-5xl pt-12 sm:px-0">
                {/* Main Sponsor */}
                <div
                  ref={mainSponsorRef}
                  className="grid grid-cols-1  justify-items-center gap-6 mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  {goldSponsors.map((sponsor, index) => (
                    <div key={sponsor.name || index} className="rounded-lg p-4 col-span-1">
                      <div className="overflow-hidden rounded-lg">
                        <a
                          href={sponsor?.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={sponsor?.imgSrc}
                            alt={sponsor?.alt}
                            className="mx-auto object-contain w-full h-auto max-w-[300px] sm:max-w-[500px]"
                            style={{
                              objectFit: "contain",
                              height: "200px",
                              width: "400px",
                              paddingBottom: "20px",
                            }}
                          />
                        </a>
                        <div className="mt-4 text-center">
                          <span className="text-muted-foreground text-xl">
                            {sponsor?.type} Partner
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Silver Sponsors */}
                <div
                  ref={silverSponsorsRef}
                  className="grid grid-cols-2 lg:grid-cols-2 justify-items-center gap-0 sm:gap-1 md:gap-4 mb-6 w-full sm:w-fit mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  {silverSponsors?.map((sponsor, index) => (
                    <div key={index} className="rounded-lg p-4 col-span-1 w-min">
                      <div className="overflow-hidden rounded-lg w-min">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-1/2 md:w-auto"
                        >
                          <span className={sponsor.span}>
                            <img
                              src={sponsor.imgSrc}
                              alt={sponsor.alt}
                              className={`mx-auto object-contain h-auto max-w-[320px] sm:max-w-[100px] w-1/2 md:w-full`}
                              style={{
                                objectFit: "contain",
                                height: "150px",
                                width: "300px",
                              }}
                            />
                          </span>
                        </a>
                        <div className="mt-4 text-center">
                          <span className="text-muted-foreground text-lg">
                            {sponsor.type} Partner
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bronze Sponsors */}
                <div
                  ref={bronzeSponsorsRef}
                  className="grid grid-cols-2 justify-items-center gap-0 opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  {bronzeSponsors.map((sponsor, index) => (
                    <div key={index} className={`rounded-lg py-2 col-span-1 w-full`}>
                      <div className="overflow-hidden rounded-lg">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={sponsor.imgSrc}
                            alt={sponsor.alt}
                            className={`mx-auto object-contain w-full h-auto max-w-[140px] sm:max-w-[200px] ${sponsor.name === "SUSE" ? "p-5" : ""
                              }`}
                            style={{
                              objectFit: "contain",
                              height: "80px",
                              width: "200px",
                            }}
                          />
                        </a>
                        <div className="mt-4 text-center">
                          <span className="text-muted-foreground text-xl">
                            {sponsor.type} Partner
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center">
                <h4 className="uppercase text-xl md:text-3xl text-[#333E48]">Interested in sponsoring this event<span className="block">& support our community?</span></h4>
                <a href="mailto:Info@awsday.ca" className="h-10 px-4 py-2 rounded text-primary-foreground text-white bg-[#333E48] hover:bg-[#FF9900] max-w-64" >Learn About Sponsoring</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
