import getGqlData from "@/lib/GetGqlData";
import { allProjectQuery } from "../Queries";


  export const getAllProjects = async () => {
    const projectsData = await getGqlData(allProjectQuery);
    return projectsData
  };
  