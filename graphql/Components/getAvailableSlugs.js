
import { slugsQuery } from "../Queries";

  export const getAvailableSlugs = async () => {
    const slugsData = await GetGqlData(slugsQuery);
    const menuSlugs = slugsData.menuItems.nodes.map((item) => item.uri.replace(/^\/|\/$/g, ''));
    const pageSlugs = slugsData.pages.nodes.map((page) => page.uri.replace(/^\/|\/$/g, ''));

  // Merge and deduplicate slugs
  return Array.from(new Set([...menuSlugs, ...pageSlugs]));
  };
  