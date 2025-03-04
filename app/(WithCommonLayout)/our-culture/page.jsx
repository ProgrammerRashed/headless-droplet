

import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/our-culture-2");
  
  return {
    title: seo?.title || "Our Culture - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function OurCulturePage() {
  const pageData = await getPageData("our-culture-2");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default OurCulturePage;
