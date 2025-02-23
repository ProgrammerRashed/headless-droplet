import getGqlData from "@/lib/GetGqlData";
import { allProjectQuery } from "../Queries";

// Function to get all projects or specific projects by ids
export const getAllProjects = async (ids = []) => {
  const variables = ids.length > 0 ? { ids } : {}; 

  const projectsData = await getGqlData(allProjectQuery, variables);
  return projectsData.projects.nodes;
};