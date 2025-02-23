// import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
async function VideoGalleryPage() {
  const pageData = await getPageData("video-gallery-2");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default VideoGalleryPage;
