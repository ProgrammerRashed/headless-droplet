
import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const data = await getSeoData("donation-page") || {};
  
  const { seo = {} } = data;
  const {
    title = "Sustainable Agricultural Foundation",
    metaDesc = "The Sustainable Agriculture Foundation (SAF), formerly SFSA, builds on a 40-year legacy of transforming smallholder agriculture in Asia and Africa, focusing on climate-smart innovations, market access, and sustainable practices.",
    metaKeywords = "saf, SAF, Sustainable Agricultural, Sustainable Agricultural Foundation, saf bangladesh, saf kenya",
    canonical = "susagfoundation.org",
    opengraphImage = {},
    featuredImage = {}
  } = seo;

  const defaultImageUrl = "https://dashboard.susagfoundation.org/wp-content/uploads/2025/02/image1-2.png";
  const twitterImageUrl = "https://dashboard.susagfoundation.org/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png";

  // Use defaultImageUrl or fall back to featured or opengraph image
  const ogImageUrl = opengraphImage?.mediaItemUrl || featuredImage?.node?.mediaItemUrl || defaultImageUrl;

  return {
    title,
    description: metaDesc,
    metaDesc,
    metaKeywords,
    canonical,
    openGraph: {
      title,
      description: metaDesc,
      image: ogImageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDesc,
      image: twitterImageUrl,
    },
    searchImage: ogImageUrl,
  };
}

async function DonationPage() {
  const pageData = await getPageData("donation-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default DonationPage;