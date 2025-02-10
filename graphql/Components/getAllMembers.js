import getGqlData from "@/lib/GetGqlData";
import { membersQuery } from "../Queries";

export const getAllMembers = async (ids = []) => {
  const variables = ids.length > 0 ? { ids } : {}; 
  const membersData = await getGqlData(membersQuery,  variables );
  return membersData?.members?.edges;
};
