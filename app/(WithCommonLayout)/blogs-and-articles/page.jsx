import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";


async function BlogsAndArticlesPage() {
    const pageData = await getPageData("/blogs-and-articles-2");
  return ( <RenderBlocksHelper blocks={pageData}/>);
}

export default BlogsAndArticlesPage;
