"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Activities from "@/components/layout/Activities";
import Speakers from "@/components/layout/Speakers";
import HackerRivals from "@/components/layout/HackerRivals";
import Sponsors from "@/components/layout/Sponsors";
import Footer from "@/components/layout/Footer";
import About from "@/components/layout/About";
import NonProfit from "@/components/layout/NonProfit";
import Charity from "@/components/layout/Charity";
import YoutubeVideo from "@/components/layout/YoutubeVideo";


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div className="">
      <Header />
      <Hero />
      <main className="flex-1 bg-white -z-10">
        <Activities />
        <Speakers/>
        <HackerRivals />
        <Charity />
        <YoutubeVideo/>
        <Sponsors />
        <NonProfit />
      </main>
      <Footer />
    </div>
  );
}
