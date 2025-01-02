import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import FeaturedPublicationsSection from "@/components/reportsAndPublicationsPage/featuredPublicationsSection/FeaturedPublicationsSection";

function ReportsAndPublicationsPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          sectionHeading: "Reports And Publications",
          bannerCover: "/hero-banners/reports-and-publications.jpg",
        }}
      />
      <FeaturedPublicationsSection />
    </>
  );
}

export default ReportsAndPublicationsPage;
