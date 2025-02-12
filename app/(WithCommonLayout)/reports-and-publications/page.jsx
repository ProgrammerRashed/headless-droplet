// import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import AnnualReportSection from "@/components/reportsAndPublicationsPage/annualReportsSection/AnnualReportSection";
import FeaturedPublicationsSection from "@/components/reportsAndPublicationsPage/featuredPublicationsSection/FeaturedPublicationsSection";
import PopularPublicationsSection from "@/components/reportsAndPublicationsPage/popularPublicationsSection/PopularPublicationsSection";

function ReportsAndPublicationsPage() {
  return (
    <>
      {/* <SecondaryBanner
        data={{
          sectionHeading: "Reports & Publications",
          bannerCover: "/hero-banners/reports-and-publications.jpg",
        }}
      /> */}
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
      <PopularPublicationsSection
        data={{
          sectionTitle: "Popular Publications",
          popularCards: [
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
      <AnnualReportSection
        data={{
          sectionTitle: "Annual Reports",
          reports: [
            {
              id: crypto.randomUUID(),
              bannerImage:
                "/reports-and-publications-page/annual-report-book-1.png",
              title: "SFSA Annual Report 2023",
              downloadLink: "/",
            },
            {
              id: crypto.randomUUID(),
              bannerImage:
                "/reports-and-publications-page/annual-report-book-1.png",
              title: "SFSA Annual Report 2023",
              downloadLink: "/",
            },
            {
              id: crypto.randomUUID(),
              bannerImage:
                "/reports-and-publications-page/annual-report-book-1.png",
              title: "SFSA Annual Report 2023",
              downloadLink: "/",
            },
            {
              id: crypto.randomUUID(),
              bannerImage:
                "/reports-and-publications-page/annual-report-book-1.png",
              title: "SFSA Annual Report 2023",
              downloadLink: "/",
            },
            {
              id: crypto.randomUUID(),
              bannerImage:
                "/reports-and-publications-page/annual-report-book-1.png",
              title: "SFSA Annual Report 2023",
              downloadLink: "/",
            },
            {
              id: crypto.randomUUID(),
              bannerImage:
                "/reports-and-publications-page/annual-report-book-1.png",
              title: "SFSA Annual Report 2023",
              downloadLink: "/",
            },
          ],
        }}
      />
    </>
  );
}

export default ReportsAndPublicationsPage;
