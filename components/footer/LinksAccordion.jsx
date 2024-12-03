import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";

function LinksAccordion({ navigation }) {
  return (
    <AccordionItem
      value={navigation.id}
      className="border-b border-white/10 py-0"
    >
      <AccordionTrigger
        className="py-[15px] text-lg font-medium leading-[28px] text-white hover:no-underline"
        iconClassName="bg-white/5 h-9 w-9 text-white p-2 rounded-full hover:bg-white/10"
      >
        {navigation.groupName}
      </AccordionTrigger>
      <AccordionContent className="text-w mb-[30px] mt-[15px] flex flex-col gap-3 py-0 text-sm font-normal leading-[22px] text-white/80">
        {navigation.childNavigations.map((navItem) => (
          <Link
            href={navItem.link}
            key={navItem.id}
            className="hover:underline"
          >
            {navItem.title}
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default LinksAccordion;
