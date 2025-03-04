import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/impact-stories");
  
  return {
    title: seo?.title || "Impact Stories - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function ImpactStoriesPage() {
  const pageData = await getPageData("impact-stories");
  return (<RenderBlocksHelper blocks={pageData}/>)
}

export default ImpactStoriesPage;
