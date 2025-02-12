import ContactFromSection from "@/components/contactUsPage/contactFromSection/ContactFromSection";
import FindLocationCardSection from "@/components/contactUsPage/findLocationCardSection/FindLocationCardSection";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

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
