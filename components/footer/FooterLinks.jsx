import { Accordion } from "@/components/ui/accordion";

import LinksAccordion from "./LinksAccordion";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinkGroup from "./FooterLinkGroup";

function FooterLinks() {
  return (
    <div className="mt-[30px] w-full md:mt-10">
      <Accordion type="single" collapsible className="w-full md:hidden">
        <LinksAccordion />
        <LinksAccordion />
        <LinksAccordion />
        <LinksAccordion />
        <LinksAccordion />
      </Accordion>
      <div className="mb-[60px] hidden gap-[100px] gap-y-[70px] md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <FooterLinkGroup />
        <FooterLinkGroup />
        <FooterLinkGroup />
        <FooterLinkGroup />
        <FooterLinkGroup />
      </div>
      <div className="flex flex-row items-center justify-end gap-2 border-b border-white/10 pb-6 text-sm font-normal leading-[22px] tracking-[3%] text-white">
        <p>Follow Us</p>
        <FooterSocialLinks />
      </div>
    </div>
  );
}

export default FooterLinks;
