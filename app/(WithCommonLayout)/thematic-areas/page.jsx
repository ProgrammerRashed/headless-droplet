import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/thematic-area");
  
  return {
    title: seo?.title || "Thematic Areas - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function ThematicAreaPage() {
  const pageData = await getPageData("thematic-area");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default ThematicAreaPage;
