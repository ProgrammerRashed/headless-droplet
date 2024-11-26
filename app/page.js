import AboutSAFSection from "@/components/aboutSAF/AboutSAFSection";
import HeroSection from "@/components/heroSection/HeroSection";
import MissionVissionSection from "@/components/missionVission/MissionVissionSection";
import OurWorkSection from "@/components/ourWork/OurWorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurWorkSection />
      <AboutSAFSection />
      <MissionVissionSection />
    </>
  );
}
