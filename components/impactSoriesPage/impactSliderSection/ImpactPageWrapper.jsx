import { getBlogsById } from "@/graphql/Components/getBlogsById";
import ImpactSliderSection from "./ImpactSliderSection";
import ImpactSoriesGridSection from "../impactSoriesGridSection/ImpactSoriesGridSection";
import { getBlogsByCategory } from "@/graphql/Components/getBlogsByCategory";

const ImpactPageWrapper = async ({data}) => {
  const enableSlider = data?.data?.enable_slider;


    const blogsArray = data?.data?.posts.map(blog => blog?.id);
    const blogs = await getBlogsById(blogsArray);
    if(enableSlider) return  <ImpactSliderSection data={blogs}/>;

    const allImpactBlogs = await getBlogsByCategory("impact-stories");
    if(!enableSlider) return <ImpactSoriesGridSection data={allImpactBlogs}/>
   
}

export default ImpactPageWrapper;