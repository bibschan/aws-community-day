"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
import lottieSplash from "/public/splash-lottie";
import pinkSplash from "/public/pink-splash-lottie";
import purpleSplash from "/public/purple-splash-lottie";

export default function LottieSplash({ color }) {
  const playerRef = useRef(null); // Create a reference to the Player component

  return (
    <Player
      ref={playerRef}
      keepLastFrame
      autoplay={true}
      loop={false}
      src={
        color === "pink"
          ? pinkSplash
          : color === "purple"
          ? purpleSplash
          : lottieSplash
      }
      speed={1}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
