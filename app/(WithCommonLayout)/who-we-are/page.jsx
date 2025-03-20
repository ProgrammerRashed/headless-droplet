import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";

export async function generateMetadata() {
  const data = (await getSeoData("/who-we-are-2")) || {};
  const seo = data || {};
  // console.log(seo);
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}


async function WhoWeArePage() {
  const pageData = await getPageData("/who-we-are-2");
  return (
    <>
      <RenderBlocksHelper blocks={pageData}/>
    </>
  );
}

export default WhoWeArePage;
