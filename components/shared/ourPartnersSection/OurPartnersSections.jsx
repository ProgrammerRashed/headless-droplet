import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../../sectionHeader/SectionHeading";
import OurPartnersCard from "./OurPartnersCard";

function OurPartnersSections({ data }) {
  const { sectionHeading, partners, buttonDetails } = data;
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container lg:px-[95px]">
        {sectionHeading && (
          <div data-aos="fade-up">
            <SectionHeading className="text-center">
              {sectionHeading}
            </SectionHeading>
          </div>
        )}
        <div className="my-10 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:my-[50px] md:grid-cols-4 lg:gap-10">
          {partners.map((partner) => (
            <OurPartnersCard key={partner.id} partner={partner} />
          ))}
        </div>
        {buttonDetails && (
          <div data-aos="fade-up">
            <PrimaryButton className="mx-auto capitalize">
              {buttonDetails.title}
            </PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurPartnersSections;
