import AboutCountrySection from "@/components/bangladeshPage/aboutCountrysection/AboutCountrySection";
import TertiaryBanner from "@/components/heroSection/TertiaryBanner";

function BangladeshPage() {
  return (
    <>
      <TertiaryBanner
        sectionHeading="Bangladesh"
        sectionSubHeading="Advancing Sustainable Agriculture and Innovation"
      />
      <AboutCountrySection
        bannerImage="/about-country/bangladesh-banner.jpg"
        primaryText=" SFSA Bangladesh, active since 2011 and registered with the NGO Affairs Bureau, serves as SFSA's country office. It manages over 10 projects supporting smallholder development, funded by partners like SDC, SCBF, ACIAR, World Bank, and CABI."
        secondaryText="Our work in Bangladesh aligns with the government's commitment to the Sustainable Development Goals (SDGs), specifically Goals 1, 2, 5, 8, 13, 15, and 17. We've introduced initiatives to support female smallholders and entrepreneurs, collaborating with key stakeholders to co-create, co-finance, and develop climate-resilient solutions tailored to smallholder needs. SFSA focuses on innovation, technical solutions, and market access, all geared towards scalable impact. Currently, we operate diverse agricultural programs across 20 districts within Rangpur, Rajshahi, Khulna, and Mymensingh divisions through partnerships with government, private, and development organizations."
      />
    </>
  );
}

export default BangladeshPage;
