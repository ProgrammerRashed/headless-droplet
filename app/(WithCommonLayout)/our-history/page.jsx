import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/our-history");
  
  return {
    title: seo?.title || "Our History - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function OurHistoryPage() {
    const pageData = await getPageData("our-history");
    return <RenderBlocksHelper blocks={pageData}/>
}

export default OurHistoryPage;
