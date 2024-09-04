import React from "react";

const Speaker = ({ name, imgSrc, alt, title }) => (
  <div className="rounded-lg bg-transparent -mx-6">
    <div className="overflow-hidden rounded-lg">
      <img
        src={imgSrc}
        width="300"
        height="300"
        alt={alt}
        className="object-cover"
      />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-2 text-muted-foreground">{title}</p>
    </div>
  </div>
);

export default Speaker;
