"use client";

import React from "react";
import ModalImage from "react-modal-image";

export default function ZoomableImage({ url }) {
  return (
    <ModalImage
      small={url}
      medium={url}
      large={url}
      alt="Level"
      className="object-cover w-full transition-all"
    />
  );
}
