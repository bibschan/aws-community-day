import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TeamMap, TeamMobileMap } from "../../public/team/team-svg-map";
import LottiePaint from "@/components/ui/lottie-paint";
import LottieSplash from "@/components/ui/lottie-splash";
import LottieDownSplash from "@/components/ui/lottie-down-splash";

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
        <section className="w-full pt-24 relative">
          <div className="absolute -z-10 bottom-0 w-full">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
              <div className="rounded-lg bg-muted p-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/speakers/MichaelHeyd.png"
                    width="400"
                    height="400"
                    alt="Speaker"
                    className="object-cover"
                    // style={{ aspectRatio: "300/300", objectFit: "cover" }}
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
              <div className="rounded-lg bg-muted p-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/speakers/GabrielVelazquezLopez.png"
                    width="400"
                    height="400"
                    alt="Speaker"
                    className="object-cover"
                    // style={{ aspectRatio: "300/300", objectFit: "cover" }}
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
        <section className="w-full py-12 relative" id="schedule">
          <div className="absolute -z-20 bottom-0 w-full">
            <LottieSplash />
          </div>
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#136493] text-white px-3 py-1 text-sm ">
                  Conference Schedule
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore the Agenda
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                    <div className="text-lg font-bold">2PM</div>
                    <Badge variant="secondary">Keynote</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Gabriel Lopez
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2:30 PM</div>
                    <Badge variant="secondary">Keynote</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Speaker: Michael Heyd
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">2PM ~ 6PM</div>
                    <Badge variant="secondary">Panel</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">Moderator: TBD</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">6PM</div>
                    <Badge variant="secondary">Event</Badge>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">Wrap Up</h3>
                  <p className="mt-2 text-muted-foreground">
                    Closing comments by Matt Carolan
                  </p>
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
                  Join Kris Krug as he interviews guest speakers and local AWS
                  professionals live at the event. You might recognize Kris from
                  his monthly CBC segment on AI with Stephen Quinn.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
              id="media"
            >
              <div className="rounded-lg bg-muted p-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="Video Thumbnail"
                    className="object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Watch the latest on AI by Kris Krug, Founder of Future Proof
                    Creatives.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4 hidden md:block">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="Video Thumbnail"
                    className="object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Watch the latest on AI by Kris Krug, Founder of Future Proof
                    Creatives.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-4 hidden lg:block">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="Video Thumbnail"
                    className="object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">TBD</h3>
                  <p className="mt-2 text-muted-foreground">
                    Watch the latest on AI by Kris Krug, Founder of Future Proof
                    Creatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-20"
          id="community"
          style={{
            backgroundImage: 'url("/background/yellow-paint-bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 m-auto">
                <div className="inline-block rounded-lg bg-[#EB8E06] text-white px-3 py-1 text-sm">
                  Community Hall
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join us in the Community Hall
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0E6A65] text-white px-3 py-1 text-sm">
                  Location
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Venue Information
                </h2>
                <p className="max-w-[900px] m-auto pb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Playhouse is a polished, cozy and intimate venue, located
                  directly across the road from Amazon AWS's new amazing office
                  at "The Post". It can accommodate up to 700 guests for talks
                  on the main stage, as well as 2 levels of demo's, workshops
                  and sponsor booths in the lobby area.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className="w-full max-w-2xl relative"
                    style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10411.11571062209!2d-123.1125296!3d49.2805861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671794dd5e7ad%3A0x4989c22727f0f00b!2sVancouver%20Playhouse!5e0!3m2!1sen!2sca!4v1723214446419!5m2!1sen!2sca"
                      style={{
                        border: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2">
                    <div>
                      <img
                        src="/location/transit.jpg"
                        width={90}
                        height={90}
                        alt="Transit"
                        className="rounded-lg m-auto"
                        style={{ aspectRatio: "90/90", objectFit: "cover" }}
                      />
                      <p className="mt-2 text-muted-foreground">
                        Public Transit: Stadium-Chinatown station and Vancouver
                        City Centre station are close by.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/location/handicap.jpg"
                        width={80}
                        height={80}
                        alt="Handicap"
                        className="rounded-lg m-auto"
                        style={{ aspectRatio: "80/80", objectFit: "cover" }}
                      />
                      <p className="mt-2 text-muted-foreground">
                        Accessible: Wheelchair seating is on the orchestra
                        level. There are 5 wheelchair spaces in the theatre.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/location/parking.jpg"
                        width={80}
                        height={80}
                        alt="Parking"
                        className="rounded-lg m-auto"
                        style={{ aspectRatio: "80/80", objectFit: "cover" }}
                      />
                      <p className="mt-2 text-muted-foreground">
                        Parking: EasyPark can be found beneath the theatre
                        itself.
                      </p>
                    </div>
                    <div>
                      <img
                        src="/location/bikeshare.png"
                        width={80}
                        height={80}
                        alt="Bikeshare"
                        className="rounded-lg m-auto"
                        style={{ aspectRatio: "80/80", objectFit: "cover" }}
                      />
                      <p className="mt-2 text-muted-foreground">
                        Bike Share: Mobi bike-share station can be found nearby
                        the venues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20" id="team">
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
                <div className="w-full hidden lg:block">{teamMap}</div>
                <div className="w-full lg:hidden">{teamMobileMap}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-20" id="sponsors">
          <div className="container px-4 md:px-6 m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
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
                <div
                  className="mx-auto grid max-w-5xl gap-6 pt-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
                  id="media"
                >
                  <div className="rounded-lg bg-muted p-4">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg"
                        width="600"
                        height="400"
                        alt="Video Thumbnail"
                        className="object-cover"
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">TBD</h3>
                      <p className="mt-2 text-muted-foreground">
                        Platinum Partner
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg"
                        width="600"
                        height="400"
                        alt="Video Thumbnail"
                        className="object-cover"
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">TBD</h3>
                      <p className="mt-2 text-muted-foreground">
                        Diamond Partner
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg"
                        width="600"
                        height="400"
                        alt="Video Thumbnail"
                        className="object-cover"
                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">TBD</h3>
                      <p className="mt-2 text-muted-foreground">Gold Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            Celebrating 11 years of the{" "}
            <a href="http://www.awsusergroups.com/">Vancouver AWS Usergroup</a>
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="https://forms.gle/yRk6rQ6RyaRjgcL96"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Sponsors Info Package
            </Link>
            <Link
              href="https://forms.gle/9JmDVgRPJWdfj9ih9"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Volunteer With Us
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}
