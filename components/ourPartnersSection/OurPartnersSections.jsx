import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../sectionHeader/SectionHeading";
import OurPartnersCard from "./OurPartnersCard";

function OurPartnersSections() {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <SectionHeading className="text-center">Our partners</SectionHeading>
        <div className="my-10 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:gap-10">
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
          <OurPartnersCard />
        </div>
        <PrimaryButton className="mx-auto">Explore All Partners</PrimaryButton>
      </div>
    </section>
  );
}

export default OurPartnersSections;
