import React from "react";

const SpeakerCard = ({ name, imgSrc, alt, company, linkedin }) => (
  <div className="rounded-lg bg-transparent -mx-6 z-20">
    <div className="overflow-hidden rounded-lg">
      <a href={linkedin} target="_blank" className="cursor-pointer">
        <img
          src={imgSrc}
          width="200"
          height="200"
          alt={alt}
          className="object-cover hover:opacity-70 transition-opacity"
        />
      </a>
    </div>
    <div className="mt-4 text-center">
      <h3 className="md:text-lg text-xs font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{company}</p>
    </div>
  </div>
);

export default SpeakerCard;
