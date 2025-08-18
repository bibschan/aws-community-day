"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
import lottiePaint from "/public/paint-lottie";

export default function LottiePaint() {
  const playerRef = useRef(null); // Create a reference to the Player component

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playerRef.current.play(); // Play animation when in view
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
      src={lottiePaint}
      style={{ height: "250px", width: "250px" }}
    />
  );
}
