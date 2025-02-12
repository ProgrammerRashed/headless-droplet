import SectionHeading from "@/components/sectionHeader/SectionHeading";

import OurMissionVisionCard from "./OurMissionVisionCard";

function OurMissionVisionSection({data}) {
  const {section_title, reverse, vision_details, mission_details} = data?.data;
  const missionCard = {
    banner_img: mission_details[0].banner_img,
    title: mission_details[0].title,
    sub_title: mission_details[0].sub_title
  }
  const vissionCard = {
    banner_img: vision_details[0].banner_img,
    title: vision_details[0].title,
    sub_title: vision_details[0].sub_title
  }
  return (
    <section className="my-[50px] md:mt-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="border-b border-gray-50 pb-5 md:pb-[30px]">
            {section_title}
          </SectionHeading>
        </div>
      </div>
      <div className="container !max-w-[1000px]">
        <div className="mt-5 flex flex-col items-center justify-center gap-10 md:mt-[60px] md:flex-row md:items-start md:gap-8">
          <OurMissionVisionCard
            card={missionCard}
            reverse={reverse}
          />
          <OurMissionVisionCard card={vissionCard} />
        </div>
      </div>
    </section>
  );
}

export default OurMissionVisionSection;
