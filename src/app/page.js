"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Clouds from "@/components/ui/clouds";
import Footer from "@/components/Footer";
import SponsorSection from "@/components/ui/sponsors";

const LottiePaint = dynamic(() => import("@/components/ui/lottie-paint"), {
  ssr: false,
});
import Menu from "@/components/ui/menu";
import { Button } from "@/components/ui/cloud-button";
import Speaker from "@/components/ui/speakers";
import speakers from "/public/speakers/speakers.json";

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

const InstagramCarousel = dynamic(
  () =>
    import("@/components/ui/instagram-carousel").then(
      (mod) => mod.InstagramCarousel
    ),
  { ssr: false }
);

export default function Home() {
  const { width } = useWindowSize();
  const getVisibleSpeakers = () => {
    if (!width) return speakers.slice(0, 4);
    if (width < 640) return speakers.slice(0, 4);
    if (width < 768) return speakers.slice(0, 5);
    return speakers;
  };

  const visibleSpeakers = getVisibleSpeakers();
  return (
    <div className="">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 pt-8 md:py-4">
        <Menu />
        <div className="container py-8 pb-0 md:py-12 px-4 md:px-6 m-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center md:items-start justify-center space-y-6 z-10">
              <div className="inline-block rounded-lg bg-[#CD0364] px-3 py-1 text-sm text-white relative">
                <div className="absolute -z-10 top-0">
                  <LottiePaint />
                </div>
                2025 Event
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                AWS Community Day 2025 in Vancouver
              </h1>
              <p className="max-w-[600px] text-black md:text-xl z-20 text-center md:text-left">
                AWS Community Day is held every year across the globe, and we
                are excited to be part of it. Join us as we bring together the
                local community around AWS, while donating any profits to local
                charity.
              </p>
              <div className="inline-flex sm:flex-row relative gap-x-4">
                <div className="flex flex-col items-center">
                  <Button
                    className="bg-blue-700 z-10 text-lg text-center font-bold items-center justify-center text-black rounded-md border border-input bg-background px-5 py-2 shadow-sm transition-colors"
                    href="https://lu.ma/kw8u2byz"
                    variant="outline"
                  >
                    Get Your Ticket
                  </Button>
                  <span className="text-xs text-center mt-1">
                    Early Bird Tickets
                  </span>
                </div>
              </div>
            </div>
            <div className="relative -top-10 md:top-auto">
              <img src="/main-banner.svg" alt="Conference" className="" />
              <div className="absolute bottom-0 left-0 flex w-full justify-between">
                <div className="rounded-lg bg-background/50 mr-2 px-4 py-2 backdrop-blur-md flex flex-col items-center text-center">
                  <div className="text-sm md:text-2xl font-bold">
                    October 25, 2025
                  </div>
                  <div className="text-sm text-muted-foreground">2025</div>
                </div>
                <div className="rounded-lg bg-background/50 px-4 py-2 backdrop-blur-md flex flex-col items-center text-center">
                  <div className="text-sm md:text-2xl  font-bold">
                    BCIT Tech Collider
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Downtown, Vancouver
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className="w-full bg-muted p-8 md:py-20 "
        style={{
          backgroundImage: "url('/background/blue-paint-bg.png')",
        }}
      >
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center ">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#EA4129] text-white px-3 py-1 text-sm">
                Recap
              </div>
              <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-2">
                  2024 Was a Huge Success!
                </h2>
                <p className="max-w-[900px]  align-center text-center text-black text-lg mb-12">
                  Catch up on the highlights from AWS Day 2024, where tech
                  enthusiasts and industry experts gathered to explore the
                  latest in cloud innovation!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-[#FF9900]">
                      780+
                    </div>
                    <div className="text-lg text-gray-700">Attendees</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-[#FF9900]">13</div>
                    <div className="text-lg text-gray-700">Sponsors</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-[#FF9900]">7</div>
                    <div className="text-lg text-gray-700">Inspiring Talks</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-[#FF9900]">20+</div>
                    <div className="text-lg text-gray-700">
                      Community Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            <h3 className="text-2xl font-bold mb-2">Video Highlights</h3>
            <video
              src="/videos/highlight-video.mp4"
              controls
              muted
              autoPlay
              className="w-full max-w-[900px] mb-6"
            />

            <h3 className="text-2xl font-bold mt-2">Event Pictures</h3>
            <InstagramCarousel />
          </div>
        </div>
      </section>
      <main className="flex-1 bg-[#87CEEB] -z-10" id="speakers">
        <section className="w-full p-8 md:p-24 relative overflow-hidden">
          <div className="container px-4 md:px-6 m-auto h-full relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 rounded-lg p-2">
                <div className="relative w-full mb-4 flex justify-center">
                  {/* big cloud */}
                  <img
                    src="/background/cloud.svg"
                    className="absolute w-[1200px] md:w-[1400px] max-w-screen-2xl -top-10 md:-top-28"
                  />
                </div>

                <div className="inline-block rounded-lg bg-[#4E1479] text-white px-3 py-1 text-sm z-20 relative">
                  CFP is open!
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)] z-20 relative">
                  Want to speak?
                </h2>
                <div className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed z-20 relative space-y-4">
                  <p className="mb-2">
                    We're excited to announce that our Call for Speakers is now
                    open! AWS Community Day is looking for passionate speakers
                    to share their knowledge and experiences with our community.
                    We'd love to hear your story!
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-8 z-50 relative">
              <h3 className="text-md mb-3 z-50">Previous Speakers</h3>
              <div className="flex justify-center max-w-6xl mx-auto">
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-0">
                  {visibleSpeakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center -mx-1 z-50"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm transform hover:scale-110 transition-transform duration-200">
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={speaker.image}
                            alt={speaker.alt || speaker.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      </div>
                      <h4 className="font-semibold text-center text-sm">
                        {speaker.name}
                      </h4>
                      {speaker.title && (
                        <p className="text-xs text-gray-600 text-center">
                          {speaker.title}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full mt-6">
              <a
                href="https://tally.so/r/mVBZYy"
                target="_blank"
                rel="AWS Day website"
                className="inline-block px-6 py-3 bg-[#FF9900] text-white font-medium rounded-md hover:bg-[#e68a00] transition-colors text-center"
              >
                Apply to Speak
              </a>
            </div>
          </div>
          <Clouds />
        </section>
        <section
          className="w-full py-12 relative overflow-hidden bg-[#bd9df8]"
          id="schedule"
          style={{
            backgroundImage: "url('/background/yellow-paint-bg.png')",
          }}
        >
          {/* <div className="absolute -z-20 bottom-0 w-full">
            <LottieSplash color="purple" />
          </div>
          <div className="absolute -z-20 top-0 w-full">
            <LottieSplash color="purple" />
          </div> */}
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 rounded-lg p-2">
                <div className="inline-block rounded-lg bg-[#136493] text-white px-3 py-1 text-sm ">
                  COMING SOON
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                  Explore the Activities
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover a diverse lineup of activities, workshops, and
                  networking opportunities that will inspire and empower you.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
                {[
                  {
                    emoji: "🎤",
                    title: "Main Stage Speakers",
                    description:
                      "Hear from top AWS experts and industry leaders",
                  },
                  {
                    emoji: "🎙️",
                    title: "Panel Talks",
                    description:
                      "Explore real-world cloud stories and insights",
                  },
                  {
                    emoji: "🛠️",
                    title: "Builder Workshops",
                    description: "Get hands-on with AWS tools and services",
                  },
                  {
                    emoji: "🗂️",
                    title: "Breakout Tracks",
                    description: "Dive deep into specific cloud topics",
                  },
                  {
                    emoji: "🎮",
                    title: "Esport Hackathon",
                    description: "Witness high-energy coding competitions",
                  },
                  {
                    emoji: "🤝",
                    title: "Chill & Connect Zone",
                    description: "Unwind and network with fellow builders",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-4xl mb-3">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">1 PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Doors Open</h3>
                  <p className="mt-2 text-muted-foreground">
                    Networking time, 1-on-1 meetings, and more
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2 PM ~ 6 PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Community Hall</h3>
                  <p className="mt-2 text-muted-foreground">
                    Join our sponsors and community booths on the second level
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2 PM ~ 6 PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Media Lounge</h3>
                  <p className="mt-2 text-muted-foreground">
                    Kris Krug will lead live interviews with our AWS experts
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2:00 PM</div>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Keynote: Anthropics on AWS
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Gabriel Velazquez
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2:30 PM</div>
                    <Badge variant="secondary">Couchbase</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    The Right Stuff For Really Remote Edge Computing
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Mark Gamble
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">3 PM</div>
                    <Badge variant="secondary">Atono</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Startup Velocity at Enterprise Scale
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Tobias Dunn-Krahn
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">3:30 PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Coffee Break</h3>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">3:45 PM</div>
                    <Badge variant="secondary"></Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Leverage AWS Gen AI to Build & Simplify Gen BI
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Amit Bajaj
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">4:15 PM</div>
                    <Badge variant="secondary">Autimo</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    From AWS Alerts to Actionable Insights with Generative AI
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Warren Uniewski
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">4:45 PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Coffee Break</h3>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">5 PM</div>
                    <Badge variant="secondary">Fortinet</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Cloud Security Trends: How Do You Stack Up?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Tyler Germer
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">5:30 PM</div>
                    <Badge variant="secondary">Randoli</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Considerations & Best Practices for Building EKS Clusters
                    for Production
                  </h3>
                  <p className="mt-2 text-muted-foreground">Rajith Attapattu</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">6:15 PM</div>
                    <Badge variant="secondary">Networking</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    VIP After Party (Invite-only)
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    A private party to connect with other VIP attendees and
                    speakers.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* <section className="w-full bg-muted pt-8 md:py-20">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#EA4129] text-white px-3 py-1 text-sm">
                  Media Lounge
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore the Media Lounge
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join{" "}
                  <Link
                    className="font-semibold text-blue-800"
                    href="https://kriskrug.co/about/"
                    target="_blank"
                  >
                    Kris Krüg &nbsp;
                  </Link>
                  as he interviews guest speakers and local AWS professionals
                  live at the event. You might recognize Kris from his monthly
                  CBC segment on AI with Stephen Quinn.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl gap-6 py-6 md:py-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
              id="media"
            >
              <div className="rounded-lg bg-muted p-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Link
                    href="https://www.youtube.com/watch?v=rLWbdKg_q0k&t=129s"
                    target="_blank"
                    className="relative flex h-full w-full items-center justify-center"
                  >
                    <img
                      src="/kris-krug/play.png"
                      width="60"
                      height="60"
                      alt="play"
                      className="absolute z-20"
                    />
                    <img
                      src="/kris-krug/1.png"
                      width="600"
                      height="400"
                      alt="Video Thumbnail"
                      className="object-cover relative opacity-80"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </Link>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">The Future of Music </h3>
                  <p className="mt-2 text-muted-foreground">
                    CBC Early Edition: AI Sandbox with Kris Krüg, founder of
                    Future Proof Creatives.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4 hidden md:block">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Link
                    href="https://www.cbc.ca/player/play/video/9.4228529"
                    target="_blank"
                    className="relative flex h-full w-full items-center justify-center"
                  >
                    <img
                      src="/kris-krug/play.png"
                      width="60"
                      height="60"
                      alt="play"
                      className="absolute z-20"
                    />
                    <img
                      src="/kris-krug/2.png"
                      width="600"
                      height="400"
                      alt="Video Thumbnail"
                      className="object-cover relative opacity-80"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </Link>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">AI Companions</h3>
                  <p className="mt-2 text-muted-foreground">
                    AI chatbots and companionship tools are becoming more
                    sophisticated.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4 hidden lg:block">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Link
                    href="https://www.cbc.ca/player/play/video/9.4228529"
                    target="_blank"
                    className="relative flex h-full w-full items-center justify-center"
                  >
                    <img
                      src="/kris-krug/play.png"
                      width="60"
                      height="60"
                      alt="play"
                      className="absolute z-20"
                    />
                    <img
                      src="/kris-krug/3.png"
                      width="600"
                      height="400"
                      alt="Video Thumbnail"
                      className="object-cover relative opacity-80"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </Link>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Web Summit in 2025</h3>
                  <p className="mt-2 text-muted-foreground">
                    One of the bigger tech events in the world is coming to
                    Vancouver.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section
          className="w-full py-12 md:py-20 relative bg-white"
          id="community"
        >
          <img
            src="/kris-krug/drip.png"
            alt="logo"
            className="absolute top-0 max-h-[1266px] left-1/2 transform -translate-x-1/2 overflow-visible"
          />
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 m-auto z-10 bg-[#ffffff89] rounded-lg p-2">
                <div className="inline-block rounded-lg bg-[#6e136f] text-white px-3 py-1 text-sm">
                  Community Hall
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)]">
                  Join us in the Community Hall
                </h2>
                <p className="max-w-[900px]  text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Live Music by Scott Jacobs, booths and demos run by local
                  companies and usergroups! You can find Scott{" "}
                  <a
                    href="https://open.spotify.com/album/38cEtZ8n4le3X9J5qxQndC?si=DlHa8nulR-m3BDvEGWh1Xg&nd=1&dlsi=bf16889aed4746b4"
                    target="_blank"
                  >
                    here on Spotify.
                  </a>
                </p>
                <a href="https://scottjacobsmusic.com/" target="_blank">
                  <img
                    src="/scottjacobs.jpg"
                    width={800}
                    height={500}
                    alt="Scott Jacobs"
                    className="rounded-lg mt-4 m-auto"
                    style={{ aspectRatio: "800/500", objectFit: "cover" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="w-full bg-muted py-12 md:py-20" id="location">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 z-10">
                <div className="inline-block rounded-lg bg-[#0E6A65] text-white px-3 py-1 text-sm">
                  Location
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Venue Information
                </h2>
                <p className="max-w-[900px] px-4 m-auto pb-10 drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Playhouse is a polished, cozy and intimate venue, located
                  directly across the road from Amazon AWS's new amazing office
                  at "The Post". It can accommodate up to 700 guests for talks
                  on the main stage, as well as 2 levels of demo's, workshops
                  and sponsor booths in the lobby area.
                </p>

                <div className="flex md:flex-row w-screen flex-col justify-center px-6 ">
                  <img
                    src="/location/venue.png"
                    alt="Venue"
                    className="rounded-lg shadow-lg md:max-w-[70%] object-cover md:mb-0 mb-6"
                  />
                  <div className="flex flex-row md:flex-col justify-center md:justify-between items-center md:ml-5 md:max-w-[30%] md:w-fit w-full">
                    <div className="relative overflow-hidden rounded-lg shadow-lg h-fit max-w-[200px] mx-3 md:my-1">
                      <ZoomableImage url="/maps/level-1.png" />
                      <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-primary-foreground font-medium">
                        Level 1
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg h-fit max-w-[200px] mx-3 md:my-1">
                      <ZoomableImage url="/maps/level-2.png" />
                      <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-primary-foreground font-medium">
                        Level 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section
          className="w-full py-12 md:py-20 relative overflow-hidden bg-blue"
          id="team"
          style={{
            backgroundImage: "url('/background/yellow-paint-bg.png')",
          }}
        >
          <div className="absolute -z-20 bottom-0 w-full">
            <LottieSplash color="pink" />
          </div>
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                <div className="inline-block rounded-lg bg-[#3d43fe] text-white px-3 py-1 text-sm relative">
                  <div className="absolute -z-10 -top-52 -left-36">
                    <LottieDownSplash />
                  </div>
                  Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Who's Behind the Event
                </h2>
                <p className="max-w-[900px] m-auto px-4 pb-10  text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Putting an event together can be a daunting task, but with the
                  right people, anything is possible! The 2024 team is excited
                  to welcome you to AWS Day!
                </p>
                <div className="w-full hidden relative md:flex flex-row flex-wrap justify-center z-20">
                  <div className="w-screen h-[50%] bg-black absolute z-10"></div>
                  <div className="w-screen h-[50%] bg-white absolute z-10 bottom-0"></div>
                  {teamMap}
                </div>
                <div className="w-screen md:hidden z-30">{teamMobileMap}</div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full bg-muted py-12 md:py-20 " id="sponsors">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative">
                <div className="relative space-y-2 z-10">
                  <div className="inline-block rounded-lg bg-[#D30A4F] text-white px-3 py-1 text-sm">
                    Sponsors
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    AWS Day 2025 Sponsors
                  </h2>
                  <p className="max-w-[900px] m-auto text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    2025 AWS Day is proudly sponsored by the following
                    organizations.
                  </p>
                  <SponsorSection />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
