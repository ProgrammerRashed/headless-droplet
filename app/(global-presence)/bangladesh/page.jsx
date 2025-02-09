
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function BangladeshPage() {
  const pageData = await getPageData("/bangladesh-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default BangladeshPage;


{/* <>


<ProjectSection

    SectionTitle: "Projects & Programs",
    viewAllBtnDetails: {
      title: "View All Project and Program",
      link: "",
    },
    projects: [
      {
        id: crypto.randomUUID(),
        title:
          "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
        donor: "Swiss Agency for Development and Cooperation",
        tenure: "Sep 2018 - Sep 2022",
        details:
          "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
        imageLink: "/projects-programs/project-1.png",
        pdfLink: "/projects-programs/pdfs/project-1.pdf",
      },
      {
        id: crypto.randomUUID(),
        title: "Nutrition in City Ecosystems (NICE)",
        donor: "Swiss Agency for Development and Cooperation",
        tenure: "Aug 2021 - Jun 2025",
        details:
          "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
        imageLink: "/projects-programs/project-2.jpg",
        pdfLink: "#",
      },
    ],
    duplicatedProjects: [
      {
        id: crypto.randomUUID(),
        title:
          "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
        donor: "Swiss Agency for Development and Cooperation",
        tenure: "Sep 2018 - Sep 2022",
        details:
          "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
        imageLink: "/projects-programs/project-1.png",
        pdfLink: "/projects-programs/pdfs/project-1.pdf",
      },
      {
        id: crypto.randomUUID(),
        title: "Nutrition in City Ecosystems (NICE)",
        donor: ": Swiss Agency for Development and Cooperation",
        tenure: "Aug 2021 - Jun 2025",
        details:
          "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
        imageLink: "/projects-programs/project-2.jpg",
        pdfLink: "#",
      },
      {
        id: crypto.randomUUID(),
        title:
          "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
        donor: "Swiss Agency for Development and Cooperation",
        tenure: "Sep 2018 - Sep 2022",
        details:
          "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
        imageLink: "/projects-programs/project-1.png",
        pdfLink: "/projects-programs/pdfs/project-1.pdf",
      },
    ],

/>
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
  data={{
    sectionHeading: "Our Partners",
    partners: [
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image11.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image13.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image2.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image14.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image15.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image16.png",
      },

      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image17.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image18.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image19.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image20.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image21.png",
      },
      {
        id: crypto.randomUUID(),
        logoLink: "/our-pertners/image22.png",
      },
    ],
    buttonDetails: {
      title: "Explore all partners",
      link: "/",
    },
  }}
/>
<BlogsAndInsightsSection
  data={{
    sectionHeading: "Blogs & Insights",
    btnDetails: {
      title: "View all",
      link: "/",
    },
    blogs: [
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
    ],
  }}
/>
<CtaSection
  data={{
    sectionTitle:
      "Feel free to reach out if you need, any further information.",
    btnDetails: { title: "Let's Get Started", link: "/" },
  }}
/>
</> */}