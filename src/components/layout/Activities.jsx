import React from 'react'

export default function Activities() {
    return (
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
    )
}
