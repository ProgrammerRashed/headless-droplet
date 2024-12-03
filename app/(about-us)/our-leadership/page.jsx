import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import DirectorsDetailsSection from "@/components/ourLeadershipPage/directorsDetailsSection/DirectorsDetailsSection";
import LeadershipGridSection from "@/components/ourLeadershipPage/leadershipGridSection/LeadershipGridSection";

function OurLeadershipPage() {
  return (
    <>
      <SecondaryBanner
        sectionHeading="Our Leadership"
        bannerCover="/hero-banners/our-leadership.jpg"
      />
      <DirectorsDetailsSection
        imageLink="/directors-say/directors-avatar.png"
        directorName="Simon Winter"
        role="Executive Director"
        about="Lorem ipsum dolor sit amet consectetur. Tempor ut enim aliquam viverra interdum.  Diam cursus pharetra netus vitae augue pharetra lacus. Non aliquet orci feugiat turpis ipsum sed. Mauris porta bibendum ipsum amet eget. Sed vestibulum quis erat fermentum risus sed bibendum pellentesque. Commodo ac elit enim nulla nunc egestas nullam duis. Nunc dis feugiat ullamcorper aliquam. Proin fringilla quam morbi velit amet massa in Eget ut nibh turpis tempus pellentesque consequat habitant ultrices nunc."
      />
      <LeadershipGridSection
        sectionTitle="Our leadership team"
        leaders={[
          {
            id: crypto.randomUUID(),
            leaderName: "Latoya Ferry",
            role: "Chief Executive Officer",
            imageLink: "/our-leaders/leader-1.png",
            details:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.My experiences at the International Islamic University Malaysia (IIUM) profoundly shaped my awareness of employment challenges in Malaysia and the GCC. Recognizing the gap between worker aspirations and employer needs, I founded Quest Asia Overseas in 2017 to address this disparity, aiming to match workers with employer expectations seamlessly.",
          },
          {
            id: crypto.randomUUID(),
            leaderName: "Rebecca Hubert Scherler",
            role: "Chief Executive Officer",
            imageLink: "/our-leaders/leader-2.png",
            details:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.My experiences at the International Islamic University Malaysia (IIUM) profoundly shaped my awareness of employment challenges in Malaysia and the GCC. Recognizing the gap between worker aspirations and employer needs, I founded Quest Asia Overseas in 2017 to address this disparity, aiming to match workers with employer expectations seamlessly.",
          },
          {
            id: crypto.randomUUID(),
            leaderName: "Latoya Ferry",
            role: "Chief Executive Officer",
            imageLink: "/our-leaders/leader-3.png",
            details:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.My experiences at the International Islamic University Malaysia (IIUM) profoundly shaped my awareness of employment challenges in Malaysia and the GCC. Recognizing the gap between worker aspirations and employer needs, I founded Quest Asia Overseas in 2017 to address this disparity, aiming to match workers with employer expectations seamlessly.",
          },
        ]}
      />
    </>
  );
}

export default OurLeadershipPage;
