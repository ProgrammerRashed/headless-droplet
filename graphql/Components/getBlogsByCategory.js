import getGqlData from "@/lib/GetGqlData";
import { blogQuery } from "../Queries";



  export const getBlogsByCategory = async (uri) => {
    const blogsData = await getGqlData(blogQuery, { uri });

    return blogsData.posts.nodes
    
  };
  