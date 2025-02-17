import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function FAQPage() {
  const pageData = await getPageData("/faq-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
  return (
    <>
      {/* <SecondaryBanner
        data={{
          sectionHeading: "FAQ",
          bannerCover: "/hero-banners/donors-and-partners.jpg",
        }}
      />
      <FAQSection
        sectionTitle: "Frequently Asked Questions (FAQ)",
          faqs: [
            {
              id: crypto.randomUUID(),
              question: "What is SAF?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "What does SAF do?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "Where does SAF get its funding?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "How can I make a donation to SAF?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "What is SAF?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "What does SAF do?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "Where does SAF get its funding?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
            {
              id: crypto.randomUUID(),
              question: "How can I make a donation to SAF?",
              answer:
                "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
            },
          ],
        }}
      /> */}
    </>
  );
}

export default FAQPage;
