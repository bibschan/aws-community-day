import React from "react";

const Speaker = ({ name, imgSrc, alt, title }) => (
  <div className="rounded-lg bg-transparent -mx-6">
    <div className="overflow-hidden rounded-lg">
      <img
        src={imgSrc}
        width="200"
        height="200"
        alt={alt}
        className="object-cover"
      />
    </div>
    <div className="mt-4 text-center">
      <h3 className="md:text-lg text-xs font-bold">{name}</h3>
    </div>
  </div>
);

export default Speaker;
