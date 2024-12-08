"use client";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSlider() {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="hero-slider" className="container-fluid">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="border border-secondary/50 shadow-2xl rounded-xl relative"
      >
        <SwiperSlide
          className="max-h-[500px] p-6 w-full relative flex flex-col md:flex-row"
          style={{ display: "flex" }}
        >
          <div className="w-full md:w-1/2 pr-12 flex flex-col justify-center space-y-4">
            <h2 className="flex flex-col space-y-4">
              <span className="text-3xl font-bold text-secondary">
                LASSA ÜRÜNLERİNDE
              </span>
              <span className="text-5xl font-extrabold text-primary">
                SEPETTE %20 <br />
                İNDİRİM
              </span>
              <p className="text-secondary text-md font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                esse quasi quae tenetur laudantium commodi perspiciatis nulla
                voluptatum tempore cupiditate.
              </p>
            </h2>
            <button className="flex w-fit text-white bg-primary px-8 py-3 rounded-full text-sm items-center">
              Şimdi Daha Fazlasını
              <ArrowRight size={24} className="ml-2" />
            </button>
          </div>
          <div className="w-full md:w-1/2 relative h-[200px] md:h-[400px] rounded-xl">
            <Image
              priority
              width={0}
              height={0}
              src="/assets/images/banner-img.svg"
              alt="banner"
              sizes="100vw"
              className="w-full h-full object-cover object-right rounded-xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-8 mySwiper grid place-items-center"
      >
        <SwiperSlide className="h-[250px] rounded-xl">
          <Image
            priority
            width={0}
            height={0}
            src="/assets/images/banner-img.svg"
            alt="banner"
            sizes="100vw"
            className="w-full h-full object-cover object-right rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="h-[250px] rounded-xl">
          <Image
            priority
            width={0}
            height={0}
            src="/assets/images/banner-img.svg"
            alt="banner"
            sizes="100vw"
            className="w-full h-full object-cover object-right rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className="h-[250px] rounded-xl">
          <Image
            priority
            width={0}
            height={0}
            src="/assets/images/banner-img.svg"
            alt="banner"
            sizes="100vw"
            className="w-full h-full object-cover object-right rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="h-[250px] rounded-xl">
          <Image
            priority
            width={0}
            height={0}
            src="/assets/images/banner-img.svg"
            alt="banner"
            sizes="100vw"
            className="w-full h-full object-cover object-right rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
