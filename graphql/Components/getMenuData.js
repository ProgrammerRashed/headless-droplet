import getGqlData from "@/lib/GetGqlData";
import { mainMenuQuery } from "../Queries";

export const getMainMenuData = async () => {
  const menuData = await getGqlData(mainMenuQuery);
  return menuData;
};