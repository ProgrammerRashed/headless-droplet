import getGqlData from "@/lib/GetGqlData";
import { pageContentQuery } from "../Queries/pageContentQuery";

export const getPageContent = async (uri = "/") => {
  const variables = { uri };
  const data = await getGqlData(pageContentQuery, variables);
  return data.pageBy;
};