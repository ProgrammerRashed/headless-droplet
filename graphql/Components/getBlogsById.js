import getGqlData from "@/lib/GetGqlData";
import { blogsByIdQuery } from "../Queries/blogsByIdQuery";

// Function to get all projects or specific projects by ids
export const getBlogsById = async (ids = []) => {
  const variables = ids.length > 0 ? { ids } : {}; 
  const blogsData = await getGqlData(blogsByIdQuery, variables);
  return blogsData?.posts?.nodes
  ;
};