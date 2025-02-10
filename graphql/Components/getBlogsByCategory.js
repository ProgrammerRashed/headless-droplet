import getGqlData from "@/lib/GetGqlData";
import { blogQuery } from "../Queries";



  export const getBlogsByCategory = async (categoryName) => {
    if (!categoryName) {
      throw new Error("categoryName is required but was not provided.");
    }
    const blogsData = await getGqlData(blogQuery, { categoryName });

    return blogsData.posts.nodes
    
  };
  