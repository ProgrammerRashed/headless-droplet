import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/blogs-and-articles-2");
  
  return {
    title:seo?.title || "Blogs and Articles - SAF",
    description:seo?.metaDesc,
    keywords:seo?.metaKeywords,
    canonical:seo?.canonical,
  };
}

async function BlogsAndArticlesPage() {
  const pageData = await getPageData("/blogs-and-articles-2");
  return <RenderBlocksHelper blocks={pageData}/>;
}

export default BlogsAndArticlesPage;
