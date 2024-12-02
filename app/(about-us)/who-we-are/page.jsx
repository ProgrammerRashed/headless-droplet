import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import AboutUsSection from "@/components/whoWeArePage/aboutUsSection/AboutUsSection";
import OurMissionVisionSection from "@/components/whoWeArePage/ourMissionVisionSection/OurMissionVisionSection";
import OurStrategySection from "@/components/whoWeArePage/ourStrategySection/OurStrategySection";
import OurValuesSection from "@/components/whoWeArePage/ourValuesSection/OurValuesSection";

function whoWeArePage() {
  return (
    <>
      <SecondaryBanner sectionHeading="Who we are" />
      <AboutUsSection
        title="SFSA is a leading science-based agtech company. We help millions of farmers around the world to grow safe and nutritious food, while taking care of the planet."
        description="The Sustainable Agriculture Foundation (SAF), formerly known as the Syngenta Foundation for Sustainable Agriculture (SFSA), boasts a remarkable 40-year legacy as a Swiss-based not-for-profit organization. SAF delivers demand-led innovations in agriculture, ensuring sustainable market access. It spearheaded groundbreaking projects across agriculture, climate change, risk mitigation, carbon offset, nutrition, and rural economic development. These initiatives have positively impacted over millions of smallholder farmers through strategic collaborations with local, regional, and international partners."
        videoDetails={{
          videoLink: "/videos/hero-banner.mp4",
          videoThumbNail: "/video-thumbnails/happy-farmer.jpg",
        }}
      />
      <OurMissionVisionSection
        sectionTitle="Our Mission & Vission"
        missionAndVision={{
          missionDetails: {
            bannerImg: "/mission-vision/who-we-are/vision.png",
            title: "Our Vision",
            subTitle:
              "A world in which smallholders, communities, and nature thrive together",
          },
          visionDetails: {
            bannerImg: "/mission-vision/who-we-are/mission.png",
            title: "Our Mission",
            subTitle:
              "Scaling up collective action on markets and innovations so that farming can better serve smallholder families, rural communities, and nature",
          },
        }}
      />
      <OurValuesSection
        sectionHeading="Our values"
        sectionSubHeading="We measure our success not only by our business performance, but also by the benefits we bring to farming and the environment."
        values={[
          {
            id: crypto.randomUUID(),
            title: "Passion",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heaĒ of all we do.",
            iconLink: "/our-values/passion.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Innovation",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heaĒ of all we do.",
            iconLink: "/our-values/innovation.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Integrity",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heaĒ of all we do.",
            iconLink: "/our-values/integrity.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Respect and Growth for All",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heaĒ of all we do.",
            iconLink: "/our-values/growth.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Collaborative Spirit",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heaĒ of all we do.",
            iconLink: "/our-values/collaborative.svg",
          },
          {
            id: crypto.randomUUID(),
            title: "Reliability",
            details:
              "Drive to achieve our vision and create sustainable impact is at the heaĒ of all we do.",
            iconLink: "/our-values/reliability.svg",
          },
        ]}
      />
      <OurStrategySection
        sectionTitle="Our Strategy"
        sectionDetails="Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue porta viverra tristique eu. Porta in arcu neque metus sem sed. Pulvinar vulputate tortor et et porttitor at cras. Arcu in parturient a integer nulla. Eget maecenas mi pretium posuere proin ut massa morbi amet. Netus tellus aliquet id eleifend. Fermentum enim quis cursus lacus."
        bannerImg="/our-strategy/our-strategy.png"
        downloadFile={{
          fileName: "Guiding Principles (PDF 3.39 MB)",
          link: "/",
        }}
      />
    </>
  );
}

export default whoWeArePage;
