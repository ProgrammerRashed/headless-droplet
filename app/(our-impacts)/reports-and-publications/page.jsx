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
      <FeaturedPublicationsSection
        data={{
          sectionTitle: "Featured Publications",
          featuredCards: [
            {
              id: crypto.randomUUID(),
              bannerImage: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              publishedDate: "06 September, 2024",
              buttonDetails: { title: "Download PDF", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              bannerImage: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              publishedDate: "06 September, 2024",
              buttonDetails: { title: "Download PDF", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              bannerImage: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              publishedDate: "06 September, 2024",
              buttonDetails: { title: "Download PDF", link: "/" },
            },
          ],
        }}
      />
    </>
  );
}

export default ReportsAndPublicationsPage;
