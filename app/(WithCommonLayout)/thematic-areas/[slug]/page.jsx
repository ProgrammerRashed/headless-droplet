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


const featureImage = blog?.featuredImage?.node?.mediaItemUrl
const data = {
  data: {
    section_heading: "Related  Stories",
    btn_details: [
      {
        link: "/thematic-areas",
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

  
    </>
  );
}

export default DetailsPage;
