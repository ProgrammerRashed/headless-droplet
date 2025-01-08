import DetailsBannerSection from "@/components/detailsPage/detailsBannerSection/DetailsBannerSection";
import RealatedStoriesSliderSection from "@/components/detailsPage/realatedStoriesSliderSection/RealatedStoriesSliderSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";

function DetailsPage() {
  return (
    <>
      <DetailsBannerSection
        data={{
          sectionTitle:
            "Magic Herbs to not miss in Your Garden Medicinal plants",
          publishedDate: "06 September, 2024",
          category: "Agriculture",
        }}
      />
      <RichContentAreaSection />
      <RealatedStoriesSliderSection
        data={{
          sectionHeading: "Related  Stories",
          btnDetails: {
            title: "View all",
            link: "/",
          },
          blogs: [
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
          ],
        }}
      />
    </>
  );
}

export default DetailsPage;
