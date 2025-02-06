import BlogsAndInsightsSection from "@/components/shared/blogsAndInsightsSection/BlogsAndInsightsSection";
import CounterSection from "@/components/homePage/counterSection/CounterSection";
import DirectorsSaySection from "@/components/shared/directorSay/DirectorsSaySection";
import MissionVissionSection from "@/components/homePage/missionVission/MissionVissionSection";
import OurPartnersSections from "@/components/shared/ourPartnersSection/OurPartnersSections";
import OurWorkSection from "@/components/homePage/ourWork/OurWorkSection";
import SDGSContributionSection from "@/components/shared/sdgsContributionSection/SDGSContributionSection";
import VideosSection from "@/components/homePage/videosSection.jsx/VideosSection";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export default async function HomePage() {
  const pageData = await getPageData("/");
  return (<RenderBlocksHelper blocks={pageData}/>);
}


// <VideosSection
//   sectionHeading="How Sustainable Farming Transforms"
//   videos={[
//     {
//       id: crypto.randomUUID(),
//       videoLink:
//         "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&controls=1",
//       videoThumbNail:
//         "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
//       videoTitle: "Bangladesh: An Experience of Crop Insurance",
//     },
//     {
//       id: crypto.randomUUID(),
//       videoLink:
//         "https://www.youtube.com/embed/EeVX0HChQio?autoplay=1&controls=1",
//       videoThumbNail:
//         "/videos/farming-transform/thumbnails/video-thumbnail-2.jpg",
//       videoTitle: "Bangladesh: The Magic Wand - (2022)",
//     },
//     {
//       id: crypto.randomUUID(),
//       videoLink:
//         "https://www.youtube.com/embed/gdAPojrDkMc?autoplay=1&controls=1",
//       videoThumbNail:
//         "/videos/farming-transform/thumbnails/video-thumbnail-5.jpg",
//       videoTitle:
//         "Sustainable partnership for the development of the corn industry",
//     },
//     {
//       id: crypto.randomUUID(),
//       videoLink:
//         "https://www.youtube.com/embed/zadfriobBUg?autoplay=1&controls=1",
//       videoThumbNail:
//         "/videos/farming-transform/thumbnails/video-thumbnail-4.jpg",
//       videoTitle: "Agriservices: eHub platform presentation",
//     },
//     {
//       id: crypto.randomUUID(),
//       videoLink:
//         "https://www.youtube.com/embed/x8Iv_G0spwA?autoplay=1&controls=1",
//       videoThumbNail:
//         "/videos/farming-transform/thumbnails/video-thumbnail-3.jpg",
//       videoTitle:
//         "Women's Diverse Education in Agriculture Diversity & Inclusion SFSA Bangladesh",
//     },
//   ]}
// />
// <SDGSContributionSection
//   sectionHeading="Our contribution to the SDGs"
//   cardDetails={[
//     {
//       id: crypto.randomUUID(),
//       serial: "01",
//       title: "No proverty",
//       details: "Eradicate extreme poverty for all people everywhere.",
//       icon: "/contributions-sdgs/no-proverty.svg",
//       bgColorClass: "bg-[#FE4C5C]",
//       bgImg: "/contributions-sdgs/1.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "02",
//       title: "zero hunger",
//       details:
//         "End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.",
//       icon: "/contributions-sdgs/zero-hunger.svg",
//       bgColorClass: "bg-[#D8B060]",
//       bgImg: "/contributions-sdgs/2.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "03",
//       title: "good health and well-being",
//       details:
//         "Ensure healthy lives and promote well-being for all at all ages.",
//       icon: "/contributions-sdgs/good-health.svg",
//       bgColorClass: "bg-[#5CAC6F]",
//       bgImg: "/contributions-sdgs/3.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "05",
//       title: "gender equality",
//       details: "Achieve gender equality and empower all women and girls.",
//       icon: "/contributions-sdgs/gender-equality.svg",
//       bgColorClass: "bg-[#EF695C]",
//       bgImg: "/contributions-sdgs/4.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "06",
//       title: "clean water and sanitation",
//       details:
//         " Ensure availability and sustainable management of water and sanitation for all.",
//       icon: "/contributions-sdgs/clean-water.svg",
//       bgColorClass: "bg-[#58C0DD]",
//       bgImg: "/contributions-sdgs/5.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "08",
//       title: "decent work and economic growth",
//       details:
//         "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
//       icon: "/contributions-sdgs/economic-growth.svg",
//       bgColorClass: "bg-[#BC4762]",
//       bgImg: "/contributions-sdgs/6.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "12",
//       title: "responsible consumption and production",
//       details: "Ensure sustainable consumption and production patterns.",
//       icon: "/contributions-sdgs/responsible-consumption.svg",
//       bgColorClass: "bg-[#D5A05D]",
//       bgImg: "/contributions-sdgs/7.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "13",
//       title: "Climate Action",
//       details:
//         "Take urgent action to combat climate change and its impacts.",
//       icon: "/contributions-sdgs/partnerships.svg",
//       bgColorClass: "bg-[#495F84]",
//       icon: "/contributions-sdgs/climate-action.svg",
//       bgColorClass: "bg-[#6D9065]",
//       bgImg: "/contributions-sdgs/8.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "15",
//       title: "Life On land",
//       details:
//         "Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.",
//       icon: "/contributions-sdgs/life-on-land.svg",
//       bgColorClass: "bg-[#80C571]",
//       bgImg: "/contributions-sdgs/9.jpg",
//     },
//     {
//       id: crypto.randomUUID(),
//       serial: "17",
//       title: "partnerships for the goals",
//       details:
//         "Strengthen the means of implementation and revitalize global partnerships for sustainable development.",
//       icon: "/contributions-sdgs/partnerships.svg",
//       bgColorClass: "bg-[#495F84]",
//       bgImg: "/contributions-sdgs/10.jpg",
//     },
//   ]}
// />
// <OurPartnersSections
//   data={{
//     sectionHeading: "Our Partners",
//     partners: [
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image11.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image6.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image4.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image1.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image10.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image7.png",
//       },

//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image12.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image9.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image2.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image5.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image8.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         logoLink: "/our-pertners/image3.png",
//       },
//     ],
//     buttonDetails: {
//       title: "Explore all partners",
//       link: "/",
//     },
//   }}
// />
// <BlogsAndInsightsSection
//   data={{
//     sectionHeading: "Blogs & Insights",
//     btnDetails: {
//       title: "View all",
//       link: "/",
//     },
//     blogs: [
//       {
//         id: crypto.randomUUID(),
//         title:
//           "Shifting focus to Climate-Smart Agriculture: The Importance of Stakeholder Engagement",
//         category: "Agriculture",
//         publishedDate: "03 November 2024",
//         coverImage: "/blogs-and-insights/blog-1.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         title: "Nutrition in City Ecosystems (NICE)",
//         category: "Nutrition",
//         publishedDate: "03 November 2024",
//         coverImage: "/blogs-and-insights/blog-2.jpg",
//       },
//       {
//         id: crypto.randomUUID(),
//         title: "Rural Entrepreneurship and Youth Empowerment",
//         category: "Agri-Entrepreneurship",
//         publishedDate: "03 November 2024",
//         coverImage: "/blogs-and-insights/blog-3.png",
//       },
//       {
//         id: crypto.randomUUID(),
//         title: "Agriservices Centres",
//         category: "Agri-Entrepreneurship",
//         publishedDate: "03 November 2024",
//         coverImage: "/blogs-and-insights/blog-4.png",
//       },
//     ],
//   }}
// />
// </>