import getGqlData from "@/lib/GetGqlData";
import {  allResourceQuery } from "../Queries";

// Function to get all projects or specific projects by ids
export const getAllResource = async (ids = []) => {
  const variables = ids.length > 0 ? { ids } : {}; 
  const allResource = await getGqlData(allResourceQuery, variables);
  return allResource?.resources?.edges;
};