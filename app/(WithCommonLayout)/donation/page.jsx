
import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("donation-page");
  
  return {
    title: seo?.title || "Donation - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function DonationPage() {
  const pageData = await getPageData("donation-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default DonationPage;