import Link from "next/link";
import SectionHeading from "../sectionHeader/SectionHeading";

function AboutSAFSection() {
  return (
    <section className="mb-[40px] mt-[50px] md:mb-[96px] md:mt-[110px]">
      <div className="container">
        <SectionHeading className="border-border mb-5 border-b pb-6 md:mb-[30px]">
          About SAF
        </SectionHeading>
        <p className="text-dark mb-[30px] text-lg font-medium leading-[28px] sm:text-justify md:mb-10 md:text-2xl md:leading-[36px]">
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
        <Link
          href="/"
          className="text-red border-red flex w-fit flex-row items-center gap-2 rounded-full border px-6 py-[13px] text-sm font-semibold leading-[22px] md:px-6 md:py-[15px] md:text-base md:leading-[24px]"
        >
          <span>Learn More About SAF</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2181_7358)">
              <path
                d="M8 14L12 10L8 6"
                stroke="#971512"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2181_7358">
                <rect width={20} height={20} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default AboutSAFSection;
