"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Carousel() {
  // const [emblaRef] = useEmblaCarousel();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const imageStyle = {
    // height: '100%',
    // width: 'auto',
    width: "100%",
    height: "auto",
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div
          // style={{ height: 500 }}
          className="embla__slide flex items-center justify-center slide_container_height"
        >
          <h2 className="slide_description">Des moments inoubliables...</h2>
          <Image
            src="/presta-events-images/paillettes.jpg"
            alt="paillettes"
            // className="dark:invert"
            width={500}
            height={120}
            style={imageStyle}
            priority
          />
        </div>
        <div
          // style={{ height: 500 }}
          className="embla__slide flex items-center justify-center slide_container_height"
        >
          <h2 className="slide_description">La joie de vivre...</h2>
          <Image
            src="/presta-events-images/ballons-anniversaire.jpg"
            alt="ballons anniversaire"
            // className="dark:invert"
            width={500}
            height={120}
            style={imageStyle}
            priority
          />
        </div>
        <div
          // style={{ height: 500 }}
          className="embla__slide flex items-center justify-center slide_container_height"
        >
          <h2 className="slide_description">Location de véhicules</h2>
          <Image
            src="/presta-events-images/location-vehicules.jpg"
            alt="location vehicules"
            // className="dark:invert"
            width={100}
            height={120}
            style={imageStyle}
            priority
          />
        </div>
      </div>
    </div>
  );
}
