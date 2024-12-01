import AboutSAFSection from "@/components/aboutSAF/AboutSAFSection";
import BlogsAndInsightsSection from "@/components/blogsAndInsightsSection/BlogsAndInsightsSection";
import CounterSection from "@/components/counterSection/CounterSection";
import DirectorsSaySection from "@/components/directorSay/DirectorsSaySection";
import HeroSection from "@/components/heroSection/HeroSection";
import MissionVissionSection from "@/components/missionVission/MissionVissionSection";
import OurPartnersSections from "@/components/ourPartnersSection/OurPartnersSections";
import OurWorkSection from "@/components/ourWork/OurWorkSection";
import SDGSContributionSection from "@/components/sdgsContributionSection/SDGSContributionSection";
import VideosSection from "@/components/videosSection.jsx/VideosSection";

export default function Home() {
  return (
    <>
      <HeroSection
        mainTitle="Our 40 years legacy as a Swiss-based Foundation"
        subTitle="Recent transition is from Syngenta Foundation for Sustainable Agriculture"
      />
      <OurWorkSection />
      <AboutSAFSection />
      <MissionVissionSection />
      <CounterSection />
      <DirectorsSaySection />
      <VideosSection />
      <SDGSContributionSection />
      <OurPartnersSections />
      <BlogsAndInsightsSection />
    </>
  );
}
