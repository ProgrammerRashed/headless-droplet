import Link from "next/link";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MobileNavLinkItem({ navigation, setIsMobileNavOpen, index }) {
  console.log("index inside", index)
  return (
    <AccordionItem
      value={index  + 1}
      className="border-b border-gray-50 !py-0"
    >
      <AccordionTrigger
        iconClassName="h-9 w-9 bg-surface rounded-full p-1"
        className="py-[15px] text-[22px] font-medium capitalize leading-[32px] text-gray-800 hover:no-underline"
      >
        {navigation?.group_name}
      </AccordionTrigger>
      <AccordionContent className="py-0">
        <div className="mb-[10px] flex w-full flex-col gap-3 rounded-[8px] bg-surface p-[15px] text-base font-medium leading-[22px] text-gray-600">
          {navigation?.child_navigations?.map((navItem, index) => (
            <Link
              onClick={() => setIsMobileNavOpen(false)}
              key={index}
              className="capitalize transition-all duration-300 hover:text-gray-800 hover:underline"
              href={navItem?.link}
            >
              {navItem?.title}
            </Link>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default MobileNavLinkItem;
