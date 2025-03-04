
import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/donors-and-partners-page");
  
  return {
    title: seo?.title || "Donors and Partners - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function DonorsAndPartnersPage() {
  const pageData = await getPageData("donors-and-partners-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default DonorsAndPartnersPage;
