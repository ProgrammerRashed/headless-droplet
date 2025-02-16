import { getBlogsByCategory } from "@/graphql/Components/getBlogsByCategory";
import BlogsAndInsightsSection from "./BlogsAndInsightsSection";
import DiscoverMoreBlogsSection from "@/components/blogsAndArticlesPage/discoverMoreBlogsSection/DiscoverMoreBlogsSection";

const MainBlogsSection = async ({data}) => {
    const {enable_slider, category} = data.data;
    const blogs = await getBlogsByCategory(category)
    if(enable_slider){
        return <BlogsAndInsightsSection data={data} blogs={blogs}/>
    }else{
        return <DiscoverMoreBlogsSection blogs={blogs} data={data} />
    }


  
}

export default MainBlogsSection