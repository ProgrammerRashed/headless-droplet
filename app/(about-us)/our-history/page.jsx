import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import TimelineSection from "@/components/ourHistoryPage/timelineSection/TimelineSection";

function OurHistoryPage() {
  return (
    <>
      <SecondaryBanner
        sectionHeading="Our History"
        bannerCover="/hero-banners/who-we-are.jpg"
      />
      <TimelineSection />
    </>
  );
}

export default OurHistoryPage;
