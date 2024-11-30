import Link from "next/link";
import SectionHeading from "../sectionHeader/SectionHeading";
import PrimaryButton from "../buttons/PrimaryButton";

function AboutSAFSection() {
  return (
    <section className="my-10 md:my-[100px]">
      <div className="container">
        <SectionHeading className="mb-5 border-b border-gray pb-6 md:mb-[30px]">
          About SAF
        </SectionHeading>
        <p className="mb-[30px] text-lg font-medium leading-[28px] text-dark sm:text-justify md:mb-10 md:text-2xl md:leading-[36px]">
          The Sustainable Agriculture Foundation (SAF), formerly known as the
          Syngenta Foundation for Sustainable Agriculture (SFSA), boasts a
          remarkable 40-year legacy as a Swiss-based not-for-profit
          organization. SAF delivers demand-led innovations in agriculture,
          ensuring sustainable market access. It spearheaded groundbreaking
          projects across agriculture, climate change, risk mitigation, carbon
          offset, nutrition, and rural economic development. These initiatives
          have positively impacted over millions of smallholder farmers through
          strategic collaborations with local, regional, and international
          partners.
        </p>
        <PrimaryButton>Learn More About SAF</PrimaryButton>
      </div>
    </section>
  );
}

export default AboutSAFSection;
