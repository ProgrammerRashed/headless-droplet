import AboutCountrySection from "@/components/bangladeshPage/aboutCountrysection/AboutCountrySection";
import TertiaryBanner from "@/components/heroSection/TertiaryBanner";
import DirectorsSaySection from "@/components/shared/directorSay/DirectorsSaySection";

import BlogsAndInsightsSection from "@/components/shared/blogsAndInsightsSection/BlogsAndInsightsSection";
import OurValuesSection from "@/components/shared/ourValuesSection/OurValuesSection";
import SDGSContributionSection from "@/components/shared/sdgsContributionSection/SDGSContributionSection";
import OurPartnersSections from "@/components/shared/ourPartnersSection/OurPartnersSections";
import CtaSection from "@/components/bangladeshPage/ctaSection/CtaSection";
import LocalMapSection from "@/components/bangladeshPage/localMapSection/LocalMapSection";
import ProjectSection from "@/components/bangladeshPage/projectsSection/ProjectSection";

function BangladeshPage() {
  return (
    <>
      <TertiaryBanner sectionHeading="Bangladesh" />
      <AboutCountrySection
        bannerImage="/about-country/bangladesh-banner.jpg"
        primaryText=" Sustainable Agriculture Foundation Bangladesh, a Non-Governmental Organization registered with Joint Stock Companies and Firms, whose mission is to scale up collective action on markets and innovations so that farming can better serve smallholder families, rural communities, and nature."
        secondaryText="In Bangladesh, smallholder farmers make up the largest sector of agriculture workers. Lack of access to training in up-to-date agricultural practices and appropriate technologies means that these farmers often work at a subsistence level. Agricultural extension services are inadequate and modern machinery is often unavailable or difficult to access. An inefficient value chain and an unstructured market system hamper the efforts of farmers to get the best from their efforts. The impact of climate change, already becoming evident in the agro-ecosystem of the country, creates an additional challenge. Lower yields and poor-quality crops are the inevitable results. This, in turn, lessens the potential income for small and marginal farmers, bringing negative consequences for them and their families."
      />
      <DirectorsSaySection
        sectionClass="md:py-[100px] bg-white border-t border-gray-200"
        sectionTitle="Message from Executive Director"
        directorDetails={{
          directorName: "Simon Winter",
          directorRole:
            "Executive Director – Sustainable Agriculture Foundations International Association",
          directorImage: "/directors-say/directors-avatar.png",
          directorQuote:
            "Our mission is to empower smallholder farmers with innovative tools, technologies, and climate-smart practices to enhance their livelihoods and promote sustainable agriculture. We are committed to creating value through market development, capacity building, and agri-digitalization, addressing the critical challenges faced by farmers in a changing climate. Together with our partners, we strive to transform agriculture into a driver of prosperity for smallholder families, rural communities, and nature.",
        }}
      />
      <OurValuesSection
        sectionHeading="Our Programs"
        gridClassName="lg:!grid-cols-2 xl:gap-0"
        values={[
          {
            id: crypto.randomUUID(),
            title: "Livelihoods & Economic Growth",
            details:
              "Enhance smallholder livelihoods by focusing on sustainable farming practices, agri-entrepreneurship, nutrition, access to markets, and improving agricultural productivity.",
            iconLink: "/our-values/passion.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Climate Change & Risk Mitigation",
            details:
              "Build resilience among smallholders by promoting climate-smart agriculture, developing agricultural insurance solutions, and advancing carbon credit initiatives to support sustainable and environmentally friendly practices.",
            iconLink: "/our-values/innovation.svg",
          },
        ]}
      />
      <LocalMapSection
        sectionTitle="SFSA Bangladesh Working Area"
        mapImage="/global-presence/bg-map.png"
      />
      <ProjectSection />
      <SDGSContributionSection
        sectionClassName="bg-white border-b border-gray-50"
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
            serial: "03",
            title: "good health and well-being",
            details:
              "Ensure healthy lives and promote well-being for all at all ages.",
            icon: "/contributions-sdgs/good-health.svg",
            bgColorClass: "bg-[#5CAC6F]",
            bgImg: "/contributions-sdgs/3.jpg",
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
            serial: "06",
            title: "clean water and sanitation",
            details:
              " Ensure availability and sustainable management of water and sanitation for all.",
            icon: "/contributions-sdgs/clean-water.svg",
            bgColorClass: "bg-[#58C0DD]",
            bgImg: "/contributions-sdgs/5.jpg",
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
            serial: "12",
            title: "responsible consumption and production",
            details: "Ensure sustainable consumption and production patterns.",
            icon: "/contributions-sdgs/responsible-consumption.svg",
            bgColorClass: "bg-[#D5A05D]",
            bgImg: "/contributions-sdgs/7.jpg",
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
      <CtaSection
        sectionTitle="Feel free to reach out if you need, any further information."
        btnDetails={{ title: "Let's Get Started", link: "/" }}
      />
    </>
  );
}

export default BangladeshPage;
