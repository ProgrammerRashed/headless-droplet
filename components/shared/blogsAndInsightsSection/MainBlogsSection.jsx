import { getBlogsByCategory } from "@/graphql/Components/getBlogsByCategory";
import BlogsAndInsightsSection from "./BlogsAndInsightsSection";

const MainBlogsSection = async ({data}) => {
    const {enable_slider, category} = data.data;
    const blogs = await getBlogsByCategory(category)
    if(enable_slider){
        return <BlogsAndInsightsSection data={data} blogs={blogs}/>
    }else{
        return null
    }


  
}

export default MainBlogsSection