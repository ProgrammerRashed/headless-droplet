import getGqlData from "@/lib/GetGqlData";
import { allProjectQuery } from "../Queries";

// Function to get all projects or specific projects by ids
export const getAllProjects = async ({ ids = [], categories = [] } = {}) => {
  const variables = {};

  if (ids.length > 0) {
    variables.ids = ids;
  }

  if (categories.length > 0) {
    variables.categories = categories;
  }
  const projectsData = await getGqlData(allProjectQuery, variables);
  return projectsData.projects.nodes;
};