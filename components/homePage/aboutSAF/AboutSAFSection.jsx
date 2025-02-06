import SectionHeading from "../../sectionHeader/SectionHeading";
import PrimaryButton from "../../shared/buttons/PrimaryButton";

function AboutSAFSection({data}) {
  const { section_heading, section_subheading, button_details } = data.data
  return (
    <section className="my-10 md:my-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="mb-5 border-b border-gray-50 pb-6 md:mb-[30px]">
            {section_heading}
          </SectionHeading>
        </div>
        <p
          data-aos="fade-up"
          className="mb-[30px] text-lg font-medium leading-[28px] text-gray-800 sm:text-justify md:mb-10 md:text-[22px] md:leading-[32px]"
        >
          {section_subheading}
        </p>
        <div data-aos="fade-up">
          <PrimaryButton href={button_details[0]?.link} >{button_details[0]?.title}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default AboutSAFSection;
