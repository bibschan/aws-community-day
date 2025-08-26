"use client";

import React from "react";
import { SPONSORS } from "@/lib/sponsorsConstants";
import { AWS_EVENT_CONFIG } from "@/lib/eventConstants";

export default function Sponsors() {
  // Filter sponsors by type
  const mainSponsor = SPONSORS.find((sponsor) => sponsor.type === "Primary");
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
              <h3 className="text-[48px] font-heroDate font-extrabold leading-none text-text-primary">
                {AWS_EVENT_CONFIG?.sections?.sponsors?.title?.toUpperCase() ?? "SPONSORS"}
              </h3>

              {/* Sponsor Content */}
              <div className="mx-auto max-w-5xl pt-12">
                {/* Main Sponsor */}
                <div className="grid grid-cols-1 justify-items-center gap-6 mb-6">
                  <div className="rounded-lg p-4 col-span-1">
                    <div className="overflow-hidden rounded-lg">
                      <a
                        href={mainSponsor?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={mainSponsor?.imgSrc}
                          alt={mainSponsor?.alt}
                          className="mx-auto object-contain"
                          style={{
                            objectFit: "contain",
                            height: "250px",
                            paddingBottom: "20px",
                          }}
                        />
                      </a>
                      <div className="mt-4 text-center">
                        <span className="text-muted-foreground text-lg">
                          {mainSponsor?.type} Partner
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Silver Sponsors */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 justify-items-center gap-2 mb-6 w-fit mx-auto">
                  {silverSponsors?.map((sponsor, index) => (
                    <div key={index} className="rounded-lg p-4 col-span-1 w-min">
                      <div className="overflow-hidden rounded-lg w-min">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className={sponsor.span}>
                            <img
                              src={sponsor.imgSrc}
                              alt={sponsor.alt}
                              className={`mx-auto object-contain ${
                                sponsor.name === "Atono" ? "p-5" : ""
                              }`}
                              style={{
                                objectFit: "contain",
                                height: "200px",
                                maxWidth: "500px",
                              }}
                            />
                          </span>
                        </a>
                        <div className="mt-1 text-center">
                          <span className="text-muted-foreground text-lg">
                            {sponsor.type} Partner
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bronze Sponsors */}
                <div className="grid grid-cols-2 justify-items-center gap-0">
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
                            className={`mx-auto object-contain ${
                              sponsor.name === "SUSE" ? "p-5" : ""
                            }`}
                            style={{
                              objectFit: "contain",
                              height: "80px",
                              maxWidth: "200px",
                            }}
                          />
                        </a>
                        <div className="mt-1 text-center">
                          <span className="text-muted-foreground text-lg">
                            {sponsor.type} Partner
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CPCA Section */}
                <div className="mt-12 flex flex-col items-center text-center">
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
            </div>
          </div>
        </div>
      </div>
      {/* Bottom cloud cut horizontally in half */}
      <div className="absolute rotate-180 -bottom-12 left-1/2 -translate-x-1/2 z-0 w-screen h-24 overflow-hidden">
        <img 
          src="/hero/bottom-cloud.svg" 
          alt="Bottom cloud" 
          className="w-full h-48 object-cover" 
        />
      </div>
    </section>
  );
}
