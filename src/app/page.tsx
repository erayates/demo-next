import HeroSlider from "@/components/hero-slider";
import LogoSlider from "@/components/logo-slider";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <LogoSlider />
      <HeroSlider />
    </React.Fragment>
  );
}
