import getGqlData from "@/lib/GetGqlData";
import { projectsByCategoryQuery } from "../Queries/projectsByCategoryQuery";

// Function to get all projects or specific projects by ids
export const getProjectsByCategory = async (categoryName) => {
  const variables = { categoryName };
  const projectsData = await getGqlData(projectsByCategoryQuery, variables);
  return projectsData.projects.nodes;
};