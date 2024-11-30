import SectionHeading from "../sectionHeader/SectionHeading";

import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import VideoSlider from "./VideoSlider";

function VideosSection() {
  return (
    <section className="my-[50px] md:py-[100px]">
      <div className="container">
        <SectionHeading className="text-center">
          How Sustainable Farming Transforms
        </SectionHeading>
        <div className="mt-[50px] hidden h-[482px] w-full justify-between md:flex md:h-auto md:flex-col md:gap-10 lg:h-[482px] lg:flex-row lg:gap-5 xl:flex-row xl:gap-[30px]">
          <VideoPlayer />
          <VideoList />
        </div>
        <VideoSlider />
      </div>
    </section>
  );
}

export default VideosSection;
