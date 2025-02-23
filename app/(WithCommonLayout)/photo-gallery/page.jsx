// import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function PhotoGalleryPage() {
  const pageData = await getPageData("photo-gallery-10");
  return ( <RenderBlocksHelper blocks={pageData} />);
}

export default PhotoGalleryPage;
