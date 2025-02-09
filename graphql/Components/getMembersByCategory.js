import getGqlData from "@/lib/GetGqlData";
import { membersQuery } from "../Queries";

export const getMembersByCategory = async (categoryName) => {
  if (!categoryName) {
    throw new Error("categoryName is required but was not provided.");
  }
  const membersData = await getGqlData(membersQuery, { categoryName });
  return membersData?.members?.nodes;
};
