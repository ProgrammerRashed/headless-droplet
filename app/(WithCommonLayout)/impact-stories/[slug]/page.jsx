import DetailsBannerSection from "@/components/detailsPage/detailsBannerSection/DetailsBannerSection";
import RealatedStoriesSliderSection from "@/components/detailsPage/realatedStoriesSliderSection/RealatedStoriesSliderSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import { getSingleBlog } from "@/graphql/Components";
import { getBlogsByCategory } from "@/graphql/Components/getBlogsByCategory";
import formatDate from "@/utils/formatDate";


async function DetailsPage({params}) {
  const blogSlug = (await params).slug
  const blog = await getSingleBlog(blogSlug)
  const fromatedDate = formatDate( blog?.customPostDate || blog.date);
  const customCategory = blog?.customCategory?.label || "Category";
  const firstCategory = blog?.categories.edges
  .filter(cat => cat.node.slug !== "all-blogs")[0] || null;

  const blogs = await getBlogsByCategory(firstCategory?.node?.slug)
const featureImage = blog?.featuredImage?.node?.mediaItemUrl
const data = {
  data: {
    section_heading: "Related  Stories",
    btn_details: [
      {
        link: "/impact-stories",
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

  
      <RealatedStoriesSliderSection data={data} blogs={blogs} />
    </>
  );
}

export default DetailsPage;
