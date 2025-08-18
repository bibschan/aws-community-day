"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaSearchPlus } from "react-icons/fa"; // Import a zoom icon from react-icons

const ModalImage = dynamic(() => import("react-modal-image"), {
  ssr: false,
});

export default function ZoomableImage({ url }) {
  return (
    <div className="relative group">
      <ModalImage
        small={url}
        medium={url}
        large={url}
        alt="Level"
        className="object-cover w-full transition-all"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 hover:cursor-pointer pointer-events-none">
        <FaSearchPlus className="text-white text-3xl" />
      </div>
    </div>
  );
}
