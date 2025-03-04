import CurrentOpeningWrapper from "@/components/careerPage/currentOpeningSection.jsx/CurrentOpeningWrapper";
import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";


export async function generateMetadata() {
  const seo = await getSeoData("career-page");
  
  return {
    title:seo?.title || "Career - Sustainable Agriculture Foundation",
    description:seo?.metaDesc,
    keywords:seo?.metaKeywords,
    canonical:seo?.canonical,
  };
}


async function CareerPage() {
  const pageData = await getPageData("career-page");
  return (<div>
    <RenderBlocksHelper blocks={pageData} />
    <CurrentOpeningWrapper/>
  </div>
);
}

export default CareerPage;