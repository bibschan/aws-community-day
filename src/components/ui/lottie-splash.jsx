"use client";

import { useRef, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieSplash from "/public/splash-lottie";
import pinkSplash from "/public/pink-splash-lottie";
import purpleSplash from "/public/purple-splash-lottie";

export default function LottieSplash({ color }) {
  const playerRef = useRef(null); // Create a reference to the Player component

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playerRef.current.play(); // Play animation when in view
          } else {
            playerRef.current.pause(); // Pause animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (playerRef.current) {
      observer.observe(playerRef.current.container); // Observe the container element
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current.container);
      }
    };
  }, []);

  return (
    <Player
      ref={playerRef}
      keepLastFrame
      autoplay={false}
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
