import getGqlData from "@/lib/GetGqlData";
import { singleProjectQuery } from "../Queries";


// Function to get all projects or specific projects by ids
export const getSingleProject = async (slug = null) => {
  const variables = slug ? { slug } : {};
  const singleProject = await getGqlData(singleProjectQuery, variables);
  return singleProject?.projectBy;
};