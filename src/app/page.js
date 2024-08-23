import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TeamMap, TeamMobileMap } from "/public/team/team-svg-map";
import LottiePaint from "@/components/ui/lottie-paint";
import LottieSplash from "@/components/ui/lottie-splash";
import LottieDownSplash from "@/components/ui/lottie-down-splash";
import ZoomableImage from "@/components/ui/zoomable-image";
import SponsorSection from "@/components/ui/sponsors";

export default function Home() {
  const teamMap = TeamMap();
  const teamMobileMap = TeamMobileMap();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 py-12 md:py-4">
        <nav className="text-black bg-gradient-to-r from-orange-500 to-yellow-500 flex justify-between gap-4 sm:gap-6 fixed top-0 right-0 py-2 px-4 z-30 w-full background-blur backdrop-blur-lg">
          <Link
            href="https://www.meetup.com/vanawsug/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            <img src="/usergroup.png" alt="Logo" width={50} height="auto" />
          </Link>
          <div className="flex justify-between items-center gap-4 sm:gap-6">
            <Link
              href="#speakers"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Speakers
            </Link>
            <Link
              href="#schedule"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Schedule
            </Link>

            <Link
              href="#media"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Media
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Community
            </Link>

            <Link
              href="#location"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Location
            </Link>
          </div>
        </nav>
        <div className="container py-12 px-4 md:px-6 m-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start justify-center space-y-6 z-10">
              <div className="inline-block rounded-lg bg-[#CD0364] px-3 py-1 text-sm text-white relative">
                <div className="absolute -z-10 top-0">
                  <LottiePaint />
                </div>
                Conference Event
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl lg:text-6xl">
                First ever AWS Community Day in Vancouver
              </h1>
              <p className="max-w-[600px] text-black md:text-xl z-20">
                AWS Community Day is held every year across the globe and we are
                excited to be part of it. Join us as we bring together the local
                community around AWS, while donating any profits to local
                charity!
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="https://www.vtixonline.com/aws-community-day-2024-vancouver/4471/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="relative">
              <img src="/main-banner.svg" alt="Conference" className="" />
              <div className="absolute bottom-0 left-0 flex w-full justify-between px-6 pb-6">
                <div className="rounded-lg bg-background/50 px-4 py-2 backdrop-blur-md flex flex-col items-center">
                  <div className="text-2xl font-bold">September 17</div>
                  <div className="text-sm text-muted-foreground">2~6PM</div>
                </div>
                <div className="rounded-lg bg-background/50 px-4 py-2 backdrop-blur-md flex flex-col items-center">
                  <div className="text-2xl font-bold">Vancouver</div>
                  <div className="text-sm text-muted-foreground">
                    Vancouver Playhouse
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1" id="speakers">
        <section className="w-full pt-24 relative overflow-hidden">
          <div className="absolute -z-10 bottom-0 w-full">
            <LottieSplash />
          </div>
          <div className="absolute -z-10 top-0 w-full">
            <LottieSplash />
          </div>
          <div className="container px-4 md:px-6 m-auto h-full relative">
            <div className="absolute h-full w-full">
              <img
                src="/background/1.png"
                className="absolute -top-10 -left-[90px] -z-10"
              />
              <img
                src="/background/2.png"
                className="absolute top-20 right-0  -z-10"
              />
              <img
                src="/background/3.png"
                className="absolute -bottom-36 -left-10 -z-10"
              />
              <img
                src="/background/4.png"
                className="absolute bottom-0 -right-[58px] -z-10"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4E1479] text-white px-3 py-1 text-sm">
                  Featured Speakers
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)]">
                  Meet Our Speakers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from industry leaders and experts who will share their
                  insights and experiences. We have a full afternoon of speakers
                  lined up for you covering topics on AWS around AI, Costs,
                  Kubernetes, Data and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:gap-2 grid-cols-2">
              <div className="rounded-lg bg-transparent p-4 mx-auto">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/speakers/MichaelHeyd.png"
                    width="400"
                    height="400"
                    alt="Speaker"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Michael Heyd</h3>
                  <p className="mt-2 text-muted-foreground">
                    Principal Solutions Architect @ AWS
                  </p>
                  <p className="mt-2 text-muted-foreground">TBD</p>
                </div>
              </div>
              <div className="rounded-lg bg-transparent p-4 mx-auto">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/speakers/GabrielVelazquezLopez.png"
                    width="400"
                    height="400"
                    alt="Speaker"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">Gabriel Lopez</h3>
                  <p className="mt-2 text-muted-foreground">
                    Generative AI GTM & Strategy
                  </p>
                  <p className="mt-2 text-muted-foreground">TBD</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 relative overflow-hidden"
          id="schedule"
        >
          <div className="absolute -z-20 bottom-0 w-full">
            <LottieSplash color="purple" />
          </div>
          <div className="absolute -z-20 top-0 w-full">
            <LottieSplash color="purple" />
          </div>
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#136493] text-white px-3 py-1 text-sm ">
                  Conference Schedule
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)]">
                  Explore the Agenda
                </h2>
                <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover a diverse lineup of talks, workshops, and networking
                  opportunities that will inspire and empower you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">1PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Doors Open</h3>
                  <p className="mt-2 text-muted-foreground">
                    Networking time, 1-on-1 meetings, and more.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2 PM</div>
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
                    <div className="text-lg font-bold">2:30 PM</div>
                    <Badge variant="secondary"></Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Michael Heyd
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">3 PM</div>
                    <Badge variant="secondary">Atono</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Startup Velocity at Enterprise Scale
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Lex Vorona
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">3:30 PM</div>
                    <Badge variant="secondary"></Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Gabriel Velazquez
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">4 PM</div>
                    <Badge variant="secondary"></Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">
                    Leverage AWS Gen AI to build & simplify Gen BI
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Amit Bajaj
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">4:30 PM</div>
                    <Badge variant="secondary"></Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Warren Uniewski
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">5 PM</div>
                    <Badge variant="secondary">Fortinet</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">Speaker: TBD</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">5:30 PM</div>
                    <Badge variant="secondary">TBD</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">Speaker: TBD</p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">6:15 PM</div>
                    <Badge variant="secondary">Networking</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">VIP After Party</h3>
                  <p className="mt-2 text-muted-foreground">
                    Connect with fellow attendees and speakers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-20">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#EA4129] text-white px-3 py-1 text-sm">
                  Media Lounge
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore the Media Lounge
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join{" "}
                  <Link
                    className="font-semibold text-blue-800"
                    href="https://kriskrug.co/about/"
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
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
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
        </section>
        <section
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
              <div className="space-y-2 m-auto z-10">
                <div className="inline-block rounded-lg bg-[#6e136f] text-white px-3 py-1 text-sm">
                  Community Hall
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)]">
                  Join us in the Community Hall
                </h2>
                <p className="max-w-[900px] drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Live Music by Scott Jacobs, booths and demos run by local
                  companies and usergroups! You can find Scott{" "}
                  <a
                    href="https://open.spotify.com/album/38cEtZ8n4le3X9J5qxQndC?si=DlHa8nulR-m3BDvEGWh1Xg&nd=1&dlsi=bf16889aed4746b4"
                    target="_blank"
                  >
                    here on Spotify.
                  </a>
                </p>
                <img
                  src="/scottjacobs.jpg"
                  width={800}
                  height={500}
                  alt="Scott Jacobs"
                  className="rounded-lg mt-4 m-auto"
                  style={{ aspectRatio: "800/500", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-20" id="location">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 z-10">
                <div className="inline-block rounded-lg bg-[#0E6A65] text-white px-3 py-1 text-sm">
                  Location
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Venue Information
                </h2>
                <p className="max-w-[900px] m-auto pb-10 drop-shadow-[2px_3px_3px_rgba(255,255,255,0.75)] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Playhouse is a polished, cozy and intimate venue, located
                  directly across the road from Amazon AWS's new amazing office
                  at "The Post". It can accommodate up to 700 guests for talks
                  on the main stage, as well as 2 levels of demo's, workshops
                  and sponsor booths in the lobby area.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-fit max-w-[400px]">
                    <ZoomableImage url="/maps/level-1.png" />
                    <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-primary-foreground font-medium">
                      Level 1
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-fit max-w-[400px]">
                    <ZoomableImage url="/maps/level-2.png" />
                    <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-primary-foreground font-medium">
                      Level 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20 relative" id="team">
          <div className="absolute -z-20 bottom-0 w-full">
            <LottieSplash color="pink" />
          </div>
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#3d43fe] text-white px-3 py-1 text-sm relative">
                  <div className="absolute -z-10 -top-52 -left-48">
                    <LottieDownSplash />
                  </div>
                  Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Who's Behind the Event
                </h2>
                <p className="max-w-[900px] m-auto pb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Putting an event together can be a daunting task, but with the
                  right people, anything is possible! The 2024 team is excited
                  to welcome you to AWS Day!
                </p>
                <div className="w-full hidden relative md:flex flex-row flex-wrap justify-center">
                  <div className="w-screen h-[50%] bg-black absolute -z-10"></div>
                  <div className="w-screen h-[50%] bg-white absolute -z-10 bottom-0"></div>
                  {teamMap}
                </div>
                <div className="w-screen md:hidden">{teamMobileMap}</div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-muted py-12 md:py-20 bg-gradient-to-r from-orange-500 to-yellow-500"
          id="sponsors"
        >
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative">
                <div className="relative space-y-2 z-10">
                  <div className="inline-block rounded-lg bg-[#D30A4F] text-white px-3 py-1 text-sm">
                    Sponsors
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    AWS Day 2024 Sponsors
                  </h2>
                  <p className="max-w-[900px] m-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    2024 AWS Day is proudly sponsored by the following
                    organizations.
                  </p>
                  <SponsorSection />
                </div>
                <div className="absolute inset-0 flex justify-center items-center z-0">
                  <div className="w-1/2 h-2/4 bg-[#FFE177] opacity-50 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground m-auto">
            Celebrating 11 years of the{" "}
            <a href="http://www.awsusergroups.com/">Vancouver AWS Usergroup</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
