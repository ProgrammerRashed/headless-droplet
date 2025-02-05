import { Accordion } from "@/components/ui/accordion";

import LinksAccordion from "./LinksAccordion";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinkGroup from "./FooterLinkGroup";

function FooterLinks({ navigations, socialLinks }) {
  return (
    <div className="mt-[30px] w-full md:mt-10">
      <Accordion type="single" collapsible className="w-full md:hidden">
        {navigations.map((navigation, index) => (
          <LinksAccordion key={index} index={index} navigation={navigation} />
        ))}
      </Accordion>
      <div className="mb-[60px] hidden gap-[60px] gap-y-10 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {navigations.map((navigation, index) => (
          <FooterLinkGroup key={index} index={index} navigation={navigation} />
        ))}
      </div>
      <div className="hidden flex-row items-center justify-end gap-2 border-b border-white/10 pb-6 text-sm font-normal leading-[22px] tracking-[3%] text-white md:flex">
        <p>Follow Us</p>
        <FooterSocialLinks socialLinks={socialLinks} />
      </div>
    </div>
  );
}

export default FooterLinks;
