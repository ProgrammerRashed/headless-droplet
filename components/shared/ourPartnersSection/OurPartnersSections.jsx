import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../../sectionHeader/SectionHeading";
import OurPartnersCard from "./OurPartnersCard";

function OurPartnersSections({ data }) {
  const { section_heading, partners, button_details } = data.data;
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container lg:px-[95px]">
        {section_heading && (
          <div data-aos="fade-up">
            <SectionHeading className="text-center">
              {section_heading}
            </SectionHeading>
          </div>
        )}
        <div className="my-10 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:my-[50px] md:grid-cols-4 lg:grid-cols-5 lg:gap-10">
          {partners?.map((partner) => (
            <OurPartnersCard key={partner._id} partner={partner} />
          ))}
        </div>
        {button_details[0] && (
          <div data-aos="fade-up">
            <PrimaryButton href={button_details[0].link} className="mx-auto capitalize">
              {button_details[0].title}
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurPartnersSections;
