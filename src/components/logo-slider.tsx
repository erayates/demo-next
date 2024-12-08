"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const logoSlideItems = [
  {
    src: "/assets/images/logo/puma.svg",
    alt: "Puma",
  },
  {
    src: "/assets/images/logo/nike.svg",
    alt: "Nike",
  },
  {
    src: "/assets/images/logo/us-polo.svg",
    alt: "US Polo",
  },
  {
    src: "/assets/images/logo/mercedes.svg",
    alt: "Mercedes",
  },
  {
    src: "/assets/images/logo/apple.svg",
    alt: "Apple",
  },
  {
    src: "/assets/images/logo/msi.svg",
    alt: "MSI",
  },
  {
    src: "/assets/images/logo/lenovo.svg",
    alt: "Lenovo",
  },
  {
    src: "/assets/images/logo/xbox.svg",
    alt: "Xbox",
  },
  {
    src: "/assets/images/logo/playstation.svg",
    alt: "Playstation",
  },
  {
    src: "/assets/images/logo/altinyildiz.svg",
    alt: "Altınyıldız",
  },
  {
    src: "/assets/images/logo/adidas.svg",
    alt: "Adidas",
  },
  {
    src: "/assets/images/logo/us-polo.svg",
    alt: "US Polo",
  },
  {
    src: "/assets/images/logo/mercedes.svg",
    alt: "Mercedes",
  },
  {
    src: "/assets/images/logo/msi.svg",
    alt: "MSI",
  },
  {
    src: "/assets/images/logo/lenovo.svg",
    alt: "Lenovo",
  },
  {
    src: "/assets/images/logo/xbox.svg",
    alt: "Xbox",
  },
];

function LogoSlider() {
  return (
    <section id="logo-slider" className="container-fluid py-6 relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={14}
        pagination={{ clickable: true }}
      >
        {logoSlideItems.map((item, idx) => (
          <SwiperSlide key={idx} className="w-20 h-20">
            <Image
              src={item.src}
              alt={item.alt}
              width={92}
              height={92}
              className="rounded-full border-2 border-primary"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default LogoSlider;
