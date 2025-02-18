import getGqlData from "@/lib/GetGqlData";
import { singleBlogQuery } from "../Queries";
import { singleJobQuery } from "../Queries/singleJobQuery";


// Function to get all projects or specific projects by ids
export const getSingleJob = async (slug = null) => {
  const variables = slug ? { slug } : {};
  const singleBlog = await getGqlData(singleJobQuery, variables);
  return singleBlog?.jobBy;
};