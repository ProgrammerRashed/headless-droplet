import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/main-our-leadership");
  
  return {
    title: seo?.title || "Our Leadership - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function OurLeadershipPage() {
  const pageData = await getPageData("/main-our-leadership");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default OurLeadershipPage;
