import AboutSAFSection from "@/components/aboutSAF/AboutSAFSection";
import BlogsAndInsightsSection from "@/components/blogsAndInsightsSection/BlogsAndInsightsSection";
import CounterSection from "@/components/counterSection/CounterSection";
import DirectorsSaySection from "@/components/directorSay/DirectorsSaySection";
import HeroSection from "@/components/heroSection/HeroSection";
import MissionVissionSection from "@/components/missionVission/MissionVissionSection";
import OurPartnersSections from "@/components/ourPartnersSection/OurPartnersSections";
import OurWorkSection from "@/components/ourWork/OurWorkSection";
import SDGSContributionSection from "@/components/sdgsContributionSection/SDGSContributionSection";
import VideosSection from "@/components/videosSection.jsx/VideosSection";

export default function Home() {
  return (
    <>
      <HeroSection
        sectionHeading="Our 40 years legacy as a Swiss-based Foundation"
        sectionSubHeading="Recent transition is from Syngenta Foundation for Sustainable Agriculture"
        bgCoverVideo="/videos/hero-banner.mp4"
      />
      <OurWorkSection
        sectionHeading="Our work"
        bgCoverImage="/our-work/bacground-cover.jpg"
        cards={[
          {
            id: crypto.randomUUID(),
            heading: "Climate SMART Agriculture",
            bgImage: "/our-work/our-work-1.jpeg",
            details:
              "Together, we innovate for a sustainable future where smallholders thrive, add few more words.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Agri Entrepreneurship",
            bgImage: "/our-work/our-work-2.jpeg",
            details:
              "Together, we innovate for a sustainable future where smallholders thrive, add few more words.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Insurance & Risk Mitigation",
            bgImage: "/our-work/our-work-3.jpeg",
            details:
              "Together, we innovate for a sustainable future where smallholders thrive, add few more words.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Food & Nutrition",
            bgImage: "/our-work/our-work-4.png",
            details:
              "Together, we innovate for a sustainable future where smallholders thrive, add few more words.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Carbon Credit",
            bgImage: "/our-work/our-work-5.png",
            details:
              "Together, we innovate for a sustainable future where smallholders thrive, add few more words.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Seed Systems",
            bgImage: "/our-work/our-work-6.jpeg",
            details:
              "Together, we innovate for a sustainable future where smallholders thrive, add few more words.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
        ]}
      />
      <AboutSAFSection
        sectionHeading="About SAF"
        sectionSubHeading="The Sustainable Agriculture Foundation (SAF), formerly known as the Syngenta Foundation for Sustainable Agriculture (SFSA), boasts a remarkable 40-year legacy as a Swiss-based not-for-profit organization. SAF delivers demand-led innovations in agriculture, ensuring sustainable market access. It spearheaded groundbreaking projects across agriculture, climate change, risk mitigation, carbon offset, nutrition, and rural economic development. These initiatives have positively impacted over millions of smallholder farmers through strategic collaborations with local, regional, and international partners.
"
        buttonDetails={{ title: "Learn More About SAF", link: "/" }}
      />
      <MissionVissionSection
        coverImage="/mission-vision/mission-vision-banner.jpeg"
        missionVisionDetails={{
          mission: {
            title: "Our Mission",
            details:
              "Scaling up collective action on markets and innovations so that farming can better serve smallholder families, rural communities, and nature",
          },
          vision: {
            title: "Our vision",
            details:
              "A world where smallholders, communities, and nature thrive together",
          },
        }}
      />
      <CounterSection
        counters={[
          {
            id: crypto.randomUUID(),
            counterNumber: 3.1,
            suffix: "M",
            counterDetails: "Smallholders supported (Up from 2.7 M in 2022)",
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "45",
            suffix: "%",
            counterDetails:
              "of supported farmers are women (Up from 29% in 2022)",
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "73",
            suffix: "%",
            counterDetails:
              "of farmers reporting at least 20% increased revenues",
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "57",
            suffix: "%",
            counterDetails: "of entrepreneurs are women (Up from 36% in 2022)",
          },
        ]}
      />
      <DirectorsSaySection
        directorDetails={{
          directorName: "Simon Winter",
          directorRole: "Executive Director",
          directorImage: "/directors-say/directors-avatar.png",
          directorQuote:
            "Our Foundation is accelerating support for first-mile entrepreneurial networks, helping under-served, pre-commercial smallholders fully engage in market systems. We are placing a stronger emphasis on empowering women as both entrepreneurs and farmers. Looking ahead, we aim to expand the range of climate-smart innovations that enhance smallholders diversification, productivity, and resilience",
        }}
      />
      <VideosSection
        sectionHeading="How Sustainable Farming Transforms"
        videos={[
          {
            id: crypto.randomUUID(),
            videoLink: "/videos/hero-banner.mp4",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
            videoTitle: "Developing young people's potential in agriculture",
          },
          {
            id: crypto.randomUUID(),
            videoLink: "/videos/hero-banner.mp4",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-2.png",
            videoTitle: "Ddeveloping young people's potential in agriculture",
          },
          {
            id: crypto.randomUUID(),
            videoLink: "/videos/hero-banner.mp4",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-3.png",
            videoTitle: "Dddeveloping young people's potential in agriculture",
          },
          {
            id: crypto.randomUUID(),
            videoLink: "/videos/hero-banner.mp4",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
            videoTitle: "Ddddeveloping young people's potential in agriculture",
          },
        ]}
      />
      <SDGSContributionSection
        sectionHeading="Our contribution to the SDGs"
        cardDetails={[
          {
            id: crypto.randomUUID(),
            serial: "01",
            title: "No proverty",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/no-proverty.svg",
            bgColorClass: "bg-[#FE4C5C]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "02",
            title: "zero hunger",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/zero-hunger.svg",
            bgColorClass: "bg-[#D8B060]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "03",
            title: "good health and well-being",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/good-health.svg",
            bgColorClass: "bg-[#5CAC6F]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "05",
            title: "gender equality",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/gender-equality.svg",
            bgColorClass: "bg-[#EF695C]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "06",
            title: "clean water and sanitation",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/clean-water.svg",
            bgColorClass: "bg-[#58C0DD]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "08",
            title: "decent work and economic growth",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/economic-growth.svg",
            bgColorClass: "bg-[#BC4762]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "12",
            title: "responsible consumption and production",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/responsible-consumption.svg",
            bgColorClass: "bg-[#D5A05D]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "13",
            title: "gender equality",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/climate-action.svg",
            bgColorClass: "bg-[#6D9065]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "15",
            title: "Life On land",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/life-on-land.svg",
            bgColorClass: "bg-[#80C571]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
          {
            id: crypto.randomUUID(),
            serial: "17",
            title: "partnerships for the goals",
            details:
              "Eliminate hunger, ensure food security, enhance nutrition, and support sustainable agriculture.",
            icon: "/contributions-sdgs/partnerships.svg",
            bgColorClass: "bg-[#495F84]",
            bgImg: "/contributions-sdgs/bg-zero-hunger.jpg",
          },
        ]}
      />
      <OurPartnersSections
        sectionHeading="Our Partners"
        partners={[
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/swiss-agency.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/brac.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/business-finance.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/cabi.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/cimmyt.jpg",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/cocacola.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/green-delta.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/guk.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/insuresilience.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/world-bank.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/swiss-capacity.png",
          },
          {
            id: crypto.randomUUID(),
            logoLink: "/our-pertners/syngenta.png",
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
            title: "The Future of Food: Agribusiness and Agroecology",
            category: "Insurance",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/1.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Magic Herbs to not miss in Your Garden| Medicinal plants",
            category: "Entrepreneurship",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/2.jpg",
          },
          {
            id: crypto.randomUUID(),
            title: "Medicinal Uses Of Cleome Gynandra Plant",
            category: "Insurance",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/3.jpg",
          },
          {
            id: crypto.randomUUID(),
            title: "The Future of Food: Agribusiness and Agroecology",
            category: "Insurance",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/1.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Magic Herbs to not miss in Your Garden| Medicinal plants",
            category: "Entrepreneurship",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/2.jpg",
          },
          {
            id: crypto.randomUUID(),
            title: "Medicinal Uses Of Cleome Gynandra Plant",
            category: "Insurance",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/3.jpg",
          },
        ]}
      />
    </>
  );
}
