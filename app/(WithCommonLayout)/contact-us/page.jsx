import ContactFromSection from "@/components/contactUsPage/contactFromSection/ContactFromSection";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/main-contact-us");
  
  return {
    title:seo?.title || "Contact Us - Sustainable Agriculture Foundation",
    description:seo?.metaDesc,
    keywords:seo?.metaKeywords,
    canonical:seo?.canonical,
  };
}



async function ContactUsPage() {
  const pageData = await getPageData("/main-contact-us");

  return (
    <>
      <RenderBlocksHelper blocks={pageData}/>
      <ContactFromSection />
    </>
  );
}

export default ContactUsPage;
