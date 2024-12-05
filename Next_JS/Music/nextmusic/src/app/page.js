import FeauturedCourses from "@/components/feauturedCourses";
import HeroSection from "@/components/HeroSection";

import Image from "next/image";

export default function Home() {
  return (
    <h1 className="text-4xl text-center">
      <HeroSection />
      hi i am the page
      <FeauturedCourses/>
    </h1>
  );
}
