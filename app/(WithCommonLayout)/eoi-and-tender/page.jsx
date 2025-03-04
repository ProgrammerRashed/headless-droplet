import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("eoi-and-tender-page");
  
  return {
    title: seo?.title || "EOI and Tender - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function EIOAndInvolvedPage() {
  const pageData = await getPageData("eoi-and-tender-page");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default EIOAndInvolvedPage;