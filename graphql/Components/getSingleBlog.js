import getGqlData from "@/lib/GetGqlData";
import { singleBlogQuery } from "../Queries";


// Function to get all projects or specific projects by ids
export const getSingleBlog = async (slug = null) => {
  const variables = slug ? { slug } : {};
  const singleBlog = await getGqlData(singleBlogQuery, variables);
  return singleBlog?.postBy;
};