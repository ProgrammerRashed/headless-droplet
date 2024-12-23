import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import AboutUsSection from "@/components/whoWeArePage/aboutUsSection/AboutUsSection";
import OurMissionVisionSection from "@/components/whoWeArePage/ourMissionVisionSection/OurMissionVisionSection";
import OurStrategySection from "@/components/whoWeArePage/ourStrategySection/OurStrategySection";
import OurValuesSection from "@/components/shared/ourValuesSection/OurValuesSection";

function whoWeArePage() {
  return (
    <>
      <SecondaryBanner
        sectionHeading="Who we are"
        bannerCover="/hero-banners/who-we-are.jpg"
      />
      <AboutUsSection
        title="The Sustainable Agriculture Foundation (SAF), formerly SFSA, builds on a 40-year legacy of transforming smallholder agriculture in Asia and Africa, focusing on climate-smart innovations, market access, and sustainable practices."
        description="The Sustainable Agriculture Foundation (SAF) transforms smallholder agriculture in Asia and Africa by improving farmer incomes, food security, and climate resilience. Building on the legacy of the Syngenta Foundation, SAF fosters innovation, empowers agri-entrepreneurs, and bridges gaps in research, technology, and market access. Through partnerships, SAF promotes inclusive growth and sustainable practices, creating thriving communities where agriculture, people, and nature coexist."
        videoDetails={{
          videoLink:
            "https://www.youtube.com/embed/lxioAOhKmew?autoplay=1&controls=1",
          videoThumbNail: "/video-thumbnails/happy-farmer.jpg",
        }}
      />
      <OurMissionVisionSection
        sectionTitle="Our Mission & Vision"
        missionAndVision={{
          missionDetails: {
            bannerImg: "/mission-vision/who-we-are/vision.png",
            title: "Our Vision",
            subTitle:
              "A world where smallholders, communities, and nature thrive together",
          },
          visionDetails: {
            bannerImg: "/mission-vision/who-we-are/mission.png",
            title: "Our Mission",
            subTitle:
              "Scaling up collective action on markets and innovations so that farming can better serve smallholder families, rural communities, and nature.",
          },
        }}
      />
      <OurValuesSection
        sectionHeading="Our values"
        sectionSubHeading="We inspire sustainable growth from the ground up."
        values={[
          {
            id: crypto.randomUUID(),
            title: "Passion",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heart of all we do. ",
            iconLink: "/our-values/passion.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Innovation",
            details:
              "We invest in and enable innovations for long term impact, that help smallholders prosper and thrive in a sustainable and resilient way. Agility and an entrepreneurial mindset are crucial here.",
            iconLink: "/our-values/innovation.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Integrity",
            details:
              "Ethics, safety and compliance are core to the way we operate. Our practices prioritize community welfare, sustainability, and unbiased decision-making in agricultural development.",
            iconLink: "/our-values/integrity.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Respect and Growth for All",
            details:
              "We embrace a diverse and inclusive culture in our teams and programs that encourages opportunities for all, notably women, and respects diverse opinions and abilities.",
            iconLink: "/our-values/growth.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Collaborative Spirit",
            details:
              "Our work in partnership and programs is based on trust and transparency.",
            iconLink: "/our-values/collaborative.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Reliability",
            details:
              "We earn trust by delivering on our commitments and creating value for our beneficiaries.",
            iconLink: "/our-values/reliability.svg",
          },
        ]}
      />
      <OurStrategySection
        sectionTitle="Our Strategy"
        sectionDetails="SAF’s strategy centers on enhancing productivity and market access for “pre-commercial” smallholder farmers, primarily in semi-arid areas with agricultural growth potential. Key focuses include advancing scientific knowledge, providing quality inputs, and establishing market linkages. Major factors shaping SAF’s work include rapid urbanization, rising food demand, climate change, and the role of innovative technologies in sustainable agriculture. Strategic updates emphasize climate adaptation, empowering women, introducing scalable innovations, and fostering multi-stakeholder partnerships. By 2025, SAF aims to improve income by at least 20% for five million smallholder families, advance gender equality, support youth involvement, enhance nutrition and food security, and build resilience against climate change."
        bannerImg="/our-strategy/our-strategy.png"
        downloadFile={{
          fileName: "SAF's Strategy",
          link: "/",
        }}
      />
    </>
  );
}

export default whoWeArePage;
