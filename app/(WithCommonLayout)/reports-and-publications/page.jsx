import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/reports-and-publications-2");
  
  return {
    title: seo?.title || "Reports and Publications - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function ReportsAndPublicationsPage() {
  const pageData = await getPageData("reports-and-publications-2");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default ReportsAndPublicationsPage;
