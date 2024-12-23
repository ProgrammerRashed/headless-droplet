import AboutSAFSection from "@/components/homePage/aboutSAF/AboutSAFSection";
import BlogsAndInsightsSection from "@/components/shared/blogsAndInsightsSection/BlogsAndInsightsSection";
import CounterSection from "@/components/homePage/counterSection/CounterSection";
import DirectorsSaySection from "@/components/shared/directorSay/DirectorsSaySection";
import GlobalPresence from "@/components/homePage/globalPresence/GlobalPresence";
import HeroSection from "@/components/heroSection/HeroSection";
import MissionVissionSection from "@/components/homePage/missionVission/MissionVissionSection";
import OurPartnersSections from "@/components/shared/ourPartnersSection/OurPartnersSections";
import OurWorkSection from "@/components/homePage/ourWork/OurWorkSection";
import SDGSContributionSection from "@/components/shared/sdgsContributionSection/SDGSContributionSection";
import VideosSection from "@/components/homePage/videosSection.jsx/VideosSection";

export default function HomePage() {
  return (
    <>
      <HeroSection
        sectionHeading="Our 40 years legacy as a Swiss-based Foundation"
        sectionSubHeading="Recent transition is from Syngenta Foundation for Sustainable Agriculture"
        bgCoverVideo="/videos/hero-banner.mp4"
      />
      <GlobalPresence
        sectionHeadline="Our Global Presence"
        countries={[
          {
            id: crypto.randomUUID(),
            countryName: "Switzerland (HQ)",
            flagIcon: "/global-presence/country-flag/switzerland.png",
          },
          {
            id: crypto.randomUUID(),
            countryName: "Bangladesh",
            flagIcon: "/global-presence/country-flag/bangladesh.png",
          },
          {
            id: crypto.randomUUID(),
            countryName: "India",
            flagIcon: "/global-presence/country-flag/india.png",
          },
          {
            id: crypto.randomUUID(),
            countryName: "Kenya",
            flagIcon: "/global-presence/country-flag/kenya.png",
          },
        ]}
        labels={{
          first: "Current Countries",
          second: "Previously Covered Countries",
        }}
      />
      <OurWorkSection
        sectionHeading="Our work"
        bgCoverImage="/our-work/bacground-cover.jpg"
        cards={[
          {
            id: crypto.randomUUID(),
            heading: "Climate SMART Agriculture",
            bgImage: "/our-work/our-work-1.png",
            details:
              "SAF promotes climate-smart solutions like precision agriculture, water-efficient technologies, and renewable energy to help smallholders adapt to climate change while reducing agriculture's carbon footprint.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Smart, Agri-Entrepreneurship",
            bgImage: "/our-work/our-work-2.png",
            details:
              "Through Farmers’ Hubs, SAF connects smallholders to inputs, machinery, markets, info and advisory, improving productivity, incomes, and access to quality services.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Insurance & Risk Mitigation",
            bgImage: "/our-work/our-work-3.png",
            details:
              "SAF facilitates the tailored agricultural insurance and its market development to protect smallholders from climate risks, enabling them to invest confidently and secure their livelihoods.",
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
              "SAF strengthens urban food systems by promoting agroecological practices, nutrition-sensitive value chains, and behavioral change for improved health and food security.",
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
              "SAF helps farmers adopt sustainable practices in agroforestry and field crops, linking them to carbon credit markets to increase income and combat climate change.",
            buttonDetails: {
              title: "Learn more",
              link: "/",
            },
          },
          {
            id: crypto.randomUUID(),
            heading: "Seed Systems",
            bgImage: "/our-work/our-work-6.png",
            details:
              "Through the Seeds program, SAF improves smallholders’ access to high-quality seeds, enhancing productivity and food security.",
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
            decimal: 1,
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "45",
            suffix: "%",
            counterDetails:
              "of supported farmers are women (Up from 29% in 2022)",
            decimal: 0,
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "73",
            suffix: "%",
            counterDetails:
              "of farmers reporting at least 20% increased revenues",
            decimal: 0,
          },
          {
            id: crypto.randomUUID(),
            counterNumber: "57",
            suffix: "%",
            counterDetails: "of entrepreneurs are women (Up from 36% in 2022)",
            decimal: 0,
          },
        ]}
      />
      <DirectorsSaySection
        directorDetails={{
          directorName: "Simon Winter",
          directorRole:
            "Executive Director – Sustainable Agriculture Foundations International Association",
          directorImage: "/directors-say/directors-avatar.png",
          directorQuote:
            "Our Foundation network is accelerating support for first-mile entrepreneurs, helping under-served, pre-commercial smallholders access needed innovations and fully engage in market systems. We place a strong emphasis on empowering women as both entrepreneurs and farmers. Looking ahead, we aim to expand the range of climate-smart innovations and the scale at which they can enhance smallholders’ diversification, productivity, and resilience.",
        }}
      />
      <VideosSection
        sectionHeading="How Sustainable Farming Transforms"
        videos={[
          {
            id: crypto.randomUUID(),
            videoLink:
              "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&controls=1",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
            videoTitle: "Bangladesh: An Experience of Crop Insurance",
          },
          {
            id: crypto.randomUUID(),
            videoLink:
              "https://www.youtube.com/embed/EeVX0HChQio?autoplay=1&controls=1",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-2.jpg",
            videoTitle: "Bangladesh: The Magic Wand - (2022)",
          },
          {
            id: crypto.randomUUID(),
            videoLink:
              "https://www.youtube.com/embed/gdAPojrDkMc?autoplay=1&controls=1",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-5.jpg",
            videoTitle:
              "Sustainable partnership for the development of the corn industry",
          },
          {
            id: crypto.randomUUID(),
            videoLink:
              "https://www.youtube.com/embed/zadfriobBUg?autoplay=1&controls=1",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-4.jpg",
            videoTitle: "Agriservices: eHub platform presentation",
          },
          {
            id: crypto.randomUUID(),
            videoLink:
              "https://www.youtube.com/embed/x8Iv_G0spwA?autoplay=1&controls=1",
            videoThumbNail:
              "/videos/farming-transform/thumbnails/video-thumbnail-3.jpg",
            videoTitle:
              "Women's Diverse Education in Agriculture Diversity & Inclusion SFSA Bangladesh",
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
            category: "Agri - Entrepreneurship",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/blog-3.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Agriservices Centres",
            category: "Agri - Entrepreneurship",
            publishedDate: "03 November 2024",
            coverImage: "/blogs-and-insights/blog-4.png",
          },
        ]}
      />
    </>
  );
}
