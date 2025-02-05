import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

function LinksAccordion({ navigation, index }) {
  return (
    <AccordionItem
      value={index + 1}
      className="border-b border-white/10 py-0"
    >
      <AccordionTrigger
        className="py-[15px] text-lg font-medium leading-[28px] text-white hover:no-underline"
        iconClassName="bg-white/5 h-9 w-9 text-white p-2 rounded-full hover:bg-white/10"
      >
        {navigation?.group_name}
      </AccordionTrigger>
      <AccordionContent className="text-w mb-[30px] mt-[15px] flex flex-col gap-3 py-0 text-sm font-normal leading-[22px] text-white/80">
        {navigation.child_navigations?.map((navItem, index) => (
          <Link
            href={navItem?.link}
            key={index}
            className="hover:underline"
          >
            {navItem?.title}
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default LinksAccordion;
