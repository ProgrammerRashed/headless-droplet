import getGqlData from "@/lib/GetGqlData";
import { allProjectQueryByIDS } from "../Queries/allProjectQueryByIds";

// Function to get all projects or specific projects by ids
export const getAllProjectsByIDS = async (ids = []) => {
  const variables = ids.length > 0 ? { ids } : {}; 

  const projectsData = await getGqlData(allProjectQueryByIDS, variables);
  return projectsData.projects.nodes;
};