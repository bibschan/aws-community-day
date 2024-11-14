"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function InstagramCarousel() {
  const instagramImages = [
    "https://www.instagram.com/p/C9tARMLS5yW/",
    "https://www.instagram.com/p/C9tALdlSf46/",
    "https://www.instagram.com/p/C9tABDTy299/",
    "https://www.instagram.com/p/C9tAGilyLG4/",
    "https://www.instagram.com/p/C9s_3hbSyIa/",
    "https://www.instagram.com/p/C9s_-Q5SIw1/",
    "https://www.instagram.com/p/C9s_jkUyidd/",
    "https://www.instagram.com/p/C9s_KXFSWpi/",
    "https://www.instagram.com/p/C9s_HfAycI_/",
    "https://www.instagram.com/p/C9s_ARgS8Qx/"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="relative">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true
          }}
        >
          <CarouselContent className="-ml-4">
            {instagramImages.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-4 lg:basis-1/4 md:basis-1/3 basis-1/2"
              >
                <Link className="w-full" href={imageUrl} target="_blank">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <Image
                          src={`/instagram/ig${index + 1}.png`}
                          alt={`Instagram image ${index + 1}`}
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute lg:-left-12 md:-left-8 -left-6 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white border-none" />
          <CarouselNext className="absolute lg:-right-12  md:-right-8 -right-6 top-1/2 transform -translate-y-1/2 bg-primary/90 hover:bg-primary text-white border-none" />
        </Carousel>
      </div>
    </div>
  );
}
