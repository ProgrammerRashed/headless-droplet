import AboutCountrySection from "@/components/bangladeshPage/aboutCountrysection/AboutCountrySection";
import BlogsAndInsightsSection from "@/components/blogsAndInsightsSection/BlogsAndInsightsSection";
import CounterSection from "@/components/counterSection/CounterSection";
import DirectorsSaySection from "@/components/directorSay/DirectorsSaySection";
import GlobalPresence from "@/components/globalPresence/GlobalPresence";
import TertiaryBanner from "@/components/heroSection/TertiaryBanner";
import OurPartnersSections from "@/components/ourPartnersSection/OurPartnersSections";
import SDGSContributionSection from "@/components/sdgsContributionSection/SDGSContributionSection";
import OurValuesSection from "@/components/whoWeArePage/ourValuesSection/OurValuesSection";

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
      <CounterSection
        counters={[
          {
            id: crypto.randomUUID(),
            counterNumber: 350,
            suffix: "k",
            counterDetails: "Smallholder Farmers",
            decimal: 1,
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "25",
            suffix: "%",
            counterDetails: "Female Farmers",
            decimal: 0,
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "350",
            suffix: "+",
            counterDetails: "Farmers’ Hubs",
            decimal: 0,
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "30",
            suffix: "%",
            counterDetails: "Female Farmers",
            decimal: 0,
          },
        ]}
      />
      <DirectorsSaySection
        directorDetails={{
          directorName: "Simon Winter",
          directorRole: "Executive Director - SAF HQ",
          directorImage: "/directors-say/directors-avatar.png",
          directorQuote:
            "Our Foundation is accelerating support for first-mile entrepreneurial networks, helping under-served, pre-commercial smallholders fully engage in market systems. We are placing a stronger emphasis on empowering women as both entrepreneurs and farmers. Looking ahead, we aim to expand the range of climate-smart innovations that enhance smallholders diversification, productivity, and resilience",
        }}
      />
      <OurValuesSection
        sectionHeading="Our Programs"
        values={[
          {
            id: crypto.randomUUID(),
            title: "Focus on agriculture and smallholder development",
            details: "Committed to achieving sustainable impact.",
            iconLink: "/our-values/passion.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Incubate rural agri-enterprises and engage youth and women",
            details: "Driving solutions for long-term prosperity.",
            iconLink: "/our-values/innovation.svg",
          },
          {
            id: crypto.randomUUID(),
            title:
              "Innovation is in our DNA and conveyed via a CSRA and D&I lens",
            details: "Ethical, unbiased, and community-focused operations.",
            iconLink: "/our-values/integrity.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Agile method in implementation and science based solutions",
            details: "Embracing inclusivity, diversity, and empowerment.",
            iconLink: "/our-values/growth.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Follow a market development approach and systemic changes",
            details: "Building partnerships with trust and transparency.",
            iconLink: "/our-values/collaborative.svg",
          },
          {
            id: crypto.randomUUID(),
            title:
              "Enhance anciency in the weld of agriculture through digitalization",
            details: "Delivering commitments and creating lasting value.",
            iconLink: "/our-values/reliability.svg",
          },
        ]}
      />
      <GlobalPresence variation="local" />
      <SDGSContributionSection
        sectionHeading="Our contribution to the SDGs"
        cardDetails={[
          {
            id: crypto.randomUUID(),
            serial: "01",
            title: "No proverty",
            details: "Eradicate extreme poverty for all people everywhere.",
            icon: "/contributions-sdgs/no-proverty.svg",
            bgColorClass: "bg-[#FE4C5C]",
            bgImg: "/contributions-sdgs/1.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "02",
            title: "zero hunger",
            details:
              "End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.",
            icon: "/contributions-sdgs/zero-hunger.svg",
            bgColorClass: "bg-[#D8B060]",
            bgImg: "/contributions-sdgs/2.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "05",
            title: "gender equality",
            details: "Achieve gender equality and empower all women and girls.",
            icon: "/contributions-sdgs/gender-equality.svg",
            bgColorClass: "bg-[#EF695C]",
            bgImg: "/contributions-sdgs/4.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "08",
            title: "decent work and economic growth",
            details:
              "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
            icon: "/contributions-sdgs/economic-growth.svg",
            bgColorClass: "bg-[#BC4762]",
            bgImg: "/contributions-sdgs/6.jpg",
          },

          {
            id: crypto.randomUUID(),
            serial: "13",
            title: "Climate Action",
            details:
              "Take urgent action to combat climate change and its impacts.",
            icon: "/contributions-sdgs/partnerships.svg",
            bgColorClass: "bg-[#495F84]",
            icon: "/contributions-sdgs/climate-action.svg",
            bgColorClass: "bg-[#6D9065]",
            bgImg: "/contributions-sdgs/8.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "15",
            title: "Life On land",
            details:
              "Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.",
            icon: "/contributions-sdgs/life-on-land.svg",
            bgColorClass: "bg-[#80C571]",
            bgImg: "/contributions-sdgs/9.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "17",
            title: "partnerships for the goals",
            details:
              "Strengthen the means of implementation and revitalize global partnerships for sustainable development.",
            icon: "/contributions-sdgs/partnerships.svg",
            bgColorClass: "bg-[#495F84]",
            bgImg: "/contributions-sdgs/10.jpg",
          },
        ]}
      />
      <OurPartnersSections
        sectionHeading="Our Partners"
        partners={[
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image11.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image6.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image4.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image1.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image10.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image7.png",
          },

          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image12.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image9.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image2.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image5.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image8.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/image3.png",
          },
        ]}
        buttonDetails={{
          title: "Explore all partners",
          link: "/",
        }}
      />
      <BlogsAndInsightsSection
        sectionHeading="Blogs & Insights"
        btnDetails={{
          title: "View all",
          link: "/",
        }}
        blogs={[
          {
            id: crypto.randomUUID(),
            title:
              "Shifting focus to Climate-Smart Agriculture: The Importance of Stakeholder Engagement",
            category: "Agriculture",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/blog-1.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Nutrition in City Ecosystems (NICE)",
            category: "Nutrition",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/blog-2.jpg",
          },
          {
            id: crypto.randomUUID(),
            title: "Rural Entrepreneurship and Youth Empowerment",
            category: "Agri Entrepreneurship",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/blog-3.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Agriservices Centres",
            category: "Agri Entrepreneurship",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/blog-4.png",
          },
        ]}
      />
    </>
  );
}

export default BangladeshPage;
