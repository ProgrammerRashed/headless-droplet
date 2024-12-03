import { Accordion } from "@/components/ui/accordion";

import LinksAccordion from "./LinksAccordion";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinkGroup from "./FooterLinkGroup";

function FooterLinks({ navigations }) {
  return (
    <div className="mt-[30px] w-full md:mt-10">
      <Accordion type="single" collapsible className="w-full md:hidden">
        {navigations.map((navigation) => (
          <LinksAccordion key={navigation.id} navigation={navigation} />
        ))}
      </Accordion>
      <div className="mb-[60px] hidden gap-[60px] gap-y-10 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {navigations.map((navigation) => (
          <FooterLinkGroup key={navigation.id} navigation={navigation} />
        ))}
      </div>
      <div className="hidden flex-row items-center justify-end gap-2 border-b border-white/10 pb-6 text-sm font-normal leading-[22px] tracking-[3%] text-white md:flex">
        <p>Follow Us</p>
        <FooterSocialLinks />
      </div>
    </div>
  );
}

export default FooterLinks;
