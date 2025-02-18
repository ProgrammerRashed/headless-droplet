import getGqlData from "@/lib/GetGqlData";
import { allJobQuery } from "../Queries/allJobQuery";

// Function to get all projects or specific projects by ids
export const getAllJob = async () => {
  const allJobData = await getGqlData(allJobQuery);
  return allJobData?.jobs?.edges;
};