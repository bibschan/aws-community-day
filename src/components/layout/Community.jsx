import React from 'react'

export default function Community() {
    return (

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
        </section>
    )
}
