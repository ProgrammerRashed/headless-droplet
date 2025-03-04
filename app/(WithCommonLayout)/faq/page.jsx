import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/faq-page");
  
  return {
    title: seo?.title || "FAQ - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function FAQPage() {
  const pageData = await getPageData("/faq-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default FAQPage;
