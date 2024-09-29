"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    // <div className="embla mx-auto border" ref={emblaRef}>
    //  <div className="embla mx-auto mt-4 h-56 max-w-lg border" ref={emblaRef}>
    <div style={{width:"100%", }} ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
          <Image
            src="/presta-events-images/gateau-anniversaire.jpg"
            alt="gateau anniversaire"
            // className="dark:invert"
            width={500}
            height={120}
            priority
          />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Image
            src="/presta-events-images/ballons-anniversaire.jpg"
            alt="ballons anniversaire"
            // className="dark:invert"
            width={500}
            height={120}
            priority
          />
        </div>
        <div className="embla__slide flex items-center justify-center">
        <Image
            src="/presta-events-images/location-vehicules.jpg"
            alt="location vehicules"
            // className="dark:invert"
            width={500}
            height={120}
            priority
          />
        </div>
        <div className="embla__slide flex items-center justify-center">
        <Image
            src="/presta-events-images/paillettes.jpg"
            alt="paillettes"
            // className="dark:invert"
            width={500}
            height={120}
            priority
          />
        </div>
      </div>
    </div>
  );
}
