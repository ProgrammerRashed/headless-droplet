import getGqlData from "@/lib/GetGqlData";
import { bangldeshMenuQuery, kenyaMenuQuery, mainMenuQuery } from "../Queries";

export const getMainMenuData = async () => {
  const menuData = await getGqlData(mainMenuQuery);
  return menuData;
};


export const getBangladeshMenuData = async () => {
  const menuData = await getGqlData(bangldeshMenuQuery);
  return menuData;
};


export const getKenyaMenuData = async () => {
  const menuData = await getGqlData(kenyaMenuQuery);
  return menuData;
};