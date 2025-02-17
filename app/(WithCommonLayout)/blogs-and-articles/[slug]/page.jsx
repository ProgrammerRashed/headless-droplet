import DetailsBannerSection from "@/components/detailsPage/detailsBannerSection/DetailsBannerSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import BlogsAndInsightsSection from "@/components/shared/blogsAndInsightsSection/BlogsAndInsightsSection";
import { getSingleBlog } from "@/graphql/Components";
import { getBlogsByCategory } from "@/graphql/Components/getBlogsByCategory";
import formatDate from "@/utils/formatDate";


async function DetailsPage({params}) {
  const blogSlug = (await params).slug
  const blog = await getSingleBlog(blogSlug)
  const fromatedDate = formatDate( blog?.customPostDate || blog.date);
  const customCategory = blog?.customCategory || "Category";
  const firstCategory = blog?.categories.edges
  .filter(cat => cat.node.slug !== "all-blogs")[0] || null;

  const blogs = await getBlogsByCategory(firstCategory?.node?.slug)
const featureImage = blog?.featuredImage?.node?.mediaItemUrl
const data = {
  data: {
    section_heading: "Related Blogs",
    btn_details: [
      {
        link: "/blogs-and-articles",
        title: "View All",
      },
    ],
  },
  }


  return (
    <>

      <DetailsBannerSection
        data={{
          sectionTitle:blog?.title ,
          publishedDate: fromatedDate,
          category: customCategory,
          featureImage: featureImage,
          
        }}
      />

      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1000px]",
          shareButtons: true,
          content: blog?.content,
        }}
      />

  
      <BlogsAndInsightsSection data={data} blogs={blogs} />
    </>
  );
}

export default DetailsPage;
