import CardHover from "@/components/CardHover";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import Wavy from "@/components/Wavy";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      {/* testing the reloading--- */}
      <MovingCards />
      <CardHover />
      <Wavy />
    </>
  );
}
