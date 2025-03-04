// import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/photo-gallery-10");
  
  return {
    title: seo?.title || "Photo Gallery - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function PhotoGalleryPage() {
  const pageData = await getPageData("photo-gallery-10");
  return ( <RenderBlocksHelper blocks={pageData} />);
}

export default PhotoGalleryPage;
