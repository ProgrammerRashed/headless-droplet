import SectionHeading from "../sectionHeader/SectionHeading";
import PrimaryButton from "../buttons/PrimaryButton";

function AboutSAFSection({ sectionHeading, sectionSubHeading, buttonDetails }) {
  return (
    <section className="my-10 md:my-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="mb-5 border-b border-gray pb-6 md:mb-[30px]">
            {sectionHeading}
          </SectionHeading>
        </div>
        <p
          data-aos="fade-up"
          className="mb-[30px] text-lg font-medium leading-[28px] text-dark sm:text-justify md:mb-10 md:text-2xl md:leading-[36px]"
        >
          {sectionSubHeading}
        </p>
        <div data-aos="fade-up">
          <PrimaryButton>{buttonDetails.title}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default AboutSAFSection;
