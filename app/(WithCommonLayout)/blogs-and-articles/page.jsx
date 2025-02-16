import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";


async function BlogsAndArticlesPage() {
    const pageData = await getPageData("/blogs-and-articles-2");
  return (
    <>
    <RenderBlocksHelper blocks={pageData}/>
      {/* <SecondaryBanner
        data={{
          sectionHeading: "Blogs & Articles | Media",
          bannerCover: "/hero-banners/blogs-and-articles.jpg",
        }}
      />
      <BlogsAndInsightsSection
        data={{
          sectionHeading: "Featured",
          largeScreenCardView: 2,
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
              category: "Agri Entrepreneurship",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-3.png",
            },
            {
              id: crypto.randomUUID(),
              title: "Agriservices Centres",
              category: "Agri Entrepreneurship",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-4.png",
            },
          ],
        }}
      />
      <DiscoverMoreBlogsSection
        data={{
          sectionTitle: "Discover More",
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
            {
              id: crypto.randomUUID(),
              title: "Rural Entrepreneurship and Youth Empowerment",
              category: "Agri-Entrepreneurship",
              publishedDate: "03 November 2024",
              coverImage: "/blogs-and-insights/blog-3.png",
            },
          ],
        }}
      /> */}
    </>
  );
}

export default BlogsAndArticlesPage;
