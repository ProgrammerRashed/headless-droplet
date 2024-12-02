import SectionHeading from "@/components/sectionHeader/SectionHeading";

import OurMissionVisionCard from "./OurMissionVisionCard";

function OurMissionVisionSection({ sectionTitle, missionAndVision }) {
  return (
    <section className="my-[50px] md:mt-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="border-gray-50 border-b pb-5 md:pb-[30px]">
            {sectionTitle}
          </SectionHeading>
        </div>
      </div>
      <div className="container !max-w-[1000px]">
        <div className="mt-5 flex flex-col items-center justify-center gap-10 md:mt-[60px] md:flex-row md:items-start md:gap-8">
          <OurMissionVisionCard
            card={missionAndVision.missionDetails}
            reverse={true}
          />
          <OurMissionVisionCard card={missionAndVision.visionDetails} />
        </div>
      </div>
    </section>
  );
}

export default OurMissionVisionSection;
