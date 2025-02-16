// import CurrentOpeningSection from "@/components/careerPage/currentOpeningSection.jsx/CurrentOpeningSection";
// import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
// import OurCultureAccordionSection from "@/components/ourCulturePage/ourCultureAccordionSection/OurCultureAccordionSection";
// import OurValuesSection from "@/components/shared/ourValuesSection/OurValuesSection";
// import SideBySideBulletPoints from "@/components/shared/sideBySideBulletPoints/SideBySideBulletPoints";

async function CareerPage() {
    const pageData = await getPageData("/");
  return (<RenderBlocksHelper blocks={pageData}/>);
  return (
    <>
      {/* <SecondaryBanner
        data={{
          sectionHeading: "Career",
          bannerCover: "/hero-banners/donors-and-partners.jpg",
        }}
      />
      <SideBySideBulletPoints
        data={{
          sectionClassName: "bg-white",
          bannerImage: "/career-page/why-work-at-saf.jpg",
          title: "Why Work at SAF",
          description:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community. We believe in fostering an environment where every voice is heard, collaboration is encouraged, and creativity knows no bounds. SAF’s culture isn't just about the work we do—it's about creating a place where people feel valued, motivated, and inspired to bring their best selves every day. From open communication to team-building initiatives, we are dedicated to building a workplace that empowers growth and celebrates diversity. Join us and experience a culture where passion meets purpose.",
          buttonPrimaryDetails: { title: "Job with us", link: "/" },
          buttonSecondaryDetails: { title: "Volunteering with us", link: "/" },
        }}
      />
      <OurValuesSection
        data={{
          sectionHeading: "Benefits and Perks",
          values: [
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
          ],
        }}
      />
      <OurCultureAccordionSection
        data={{
          sectionTitle: "Core Values That Drive SAF’s Sustainable Impact",
          imageUrl: "/career-page/core-value-accordion.jpg",
          qsnAndAns: [
            {
              id: crypto.randomUUID(),
              qsn: "Team-building activities and wellness programs",
              ans: "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              qsn: "Work-life balance initiatives",
              ans: "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              qsn: "Recognition programs that celebrate employee contributions",
              ans: "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
          ],
        }}
      />
      <CurrentOpeningSection
        data={{
          sectionTitle: "Current openings",
          jobs: [
            {
              id: crypto.randomUUID(),
              title:
                "Individual National Consultancy: Editorial Consultant Kenya",
              location: "Dhaka",
              deadline: "20 Aug 2025",
              buttonDetails: { title: "View Details", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              title:
                "Individual National Consultancy: Editorial Consultant Kenya",
              location: "Dhaka",
              deadline: "20 Aug 2025",
              buttonDetails: { title: "View Details", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              title:
                "Individual National Consultancy: Editorial Consultant Kenya",
              location: "Dhaka",
              deadline: "20 Aug 2025",
              buttonDetails: { title: "View Details", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              title:
                "Individual National Consultancy: Editorial Consultant Kenya",
              location: "Dhaka",
              deadline: "20 Aug 2025",
              buttonDetails: { title: "View Details", link: "/" },
            },
          ],
        }}
      /> */}
    </>
  );
}

export default CareerPage;
