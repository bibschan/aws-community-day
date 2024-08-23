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
        <div className="rounded-lg  p-4 col-span-1">
          <div className="overflow-hidden rounded-lg">
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
            <div className="mt-4 text-center">
              <span className="text-muted-foreground text-sm">
                {mainSponsor.type} Partner
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-1 mb-6 w-fit mx-auto">
        {goldSponsors.map((sponsor, index) => (
          <div key={index} className="rounded-lg p-4 col-span-1 w-min">
            <div className="overflow-hidden rounded-lg w-min">
              <img
                src={sponsor.imgSrc}
                alt={sponsor.alt}
                className="mx-auto object-contain"
                style={{
                  objectFit: "contain",
                  height: "80px",
                  maxWidth: "200px",
                }}
              />
              <div className="mt-4 text-center">
                <span className="text-muted-foreground text-sm">
                  {sponsor.type} Partner
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Silver Sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-5 justify-items-center gap-6">
        {silverSponsors.map((sponsor, index) => (
          <div key={index} className="rounded-lg p-4 col-span-1 w-full">
            <div className="overflow-hidden rounded-lg">
              <img
                src={sponsor.imgSrc}
                alt={sponsor.alt}
                className="mx-auto object-contain"
                style={{
                  objectFit: "contain",
                  height: "70px",
                }}
              />
              <div className="mt-4 text-center">
                <span className="text-muted-foreground text-sm">
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
