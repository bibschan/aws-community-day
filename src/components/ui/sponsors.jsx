"use client";

import React from "react";
import sponsors from "/public/sponsors/sponsors.json";

export default function SponsorSection() {
  // Filter sponsors by type
  const mainSponsor = sponsors.find((sponsor) => sponsor.type === "Main");
  const goldSponsors = sponsors.filter((sponsor) => sponsor.type === "Gold");
  const silverSponsors = sponsors.filter(
    (sponsor) => sponsor.type === "Silver"
  );

  return (
    <div className="mx-auto max-w-5xl pt-12" id="media">
      {/* Main Sponsor */}
      <div className="grid grid-cols-1 justify-items-center gap-6 mb-6">
        <div className="rounded-lg p-4 col-span-1">
          <div className="overflow-hidden rounded-lg">
            <a
              href={mainSponsor.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mainSponsor.imgSrc}
                alt={mainSponsor.alt}
                className="mx-auto object-contain"
                style={{
                  objectFit: "contain",
                  height: "200px",
                  paddingBottom: "20px",
                }}
              />
            </a>
            <div className="mt-4 text-center">
              <span className="text-muted-foreground text-sm">
                {mainSponsor.type} Partner
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Sponsors */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-2 mb-6 w-fit mx-auto">
        {goldSponsors.map((sponsor, index) => (
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
                      height: "80px",
                      maxWidth: "200px",
                    }}
                  />
                </span>
              </a>
              <div className="mt-1 text-center">
                <span className="text-muted-foreground text-sm">
                  {sponsor.type} Partner
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Silver Sponsors */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-0">
        {silverSponsors.map((sponsor, index) => (
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
                    height: "60px",
                    maxWidth: "150px",
                  }}
                />
              </a>
              <div className="mt-1 text-center">
                <span className="text-muted-foreground text-xs">
                  {sponsor.type} Partner
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
