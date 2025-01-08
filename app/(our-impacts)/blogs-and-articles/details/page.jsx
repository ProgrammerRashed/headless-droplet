import DetailsBannerSection from "@/components/detailsPage/detailsBannerSection/DetailsBannerSection";
import RealatedStoriesSliderSection from "@/components/detailsPage/realatedStoriesSliderSection/RealatedStoriesSliderSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import BlogsAndInsightsSection from "@/components/shared/blogsAndInsightsSection/BlogsAndInsightsSection";

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
      <BlogsAndInsightsSection
        data={{
          sectionHeading: "Related  Blogs",
          btnDetails: {
            title: "View all",
            link: "/",
          },
          blogs: [
            {
              id: crypto.randomUUID(),
              title:
                "Shifting focus to Climate-Smart Agriculture: The Importance of Stakeholder Engagement",
              category: "Agriculture",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-1.png",
            },
            {
              id: crypto.randomUUID(),
              title: "Nutrition in City Ecosystems (NICE)",
              category: "Nutrition",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-2.jpg",
            },
            {
              id: crypto.randomUUID(),
              title: "Rural Entrepreneurship and Youth Empowerment",
              category: "Agri-Entrepreneurship",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-3.png",
            },
            {
              id: crypto.randomUUID(),
              title: "Agriservices Centres",
              category: "Agri-Entrepreneurship",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-4.png",
            },
          ],
        }}
      />
    </>
  );
}

export default DetailsPage;
