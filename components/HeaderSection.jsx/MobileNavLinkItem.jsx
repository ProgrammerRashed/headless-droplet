import Link from "next/link";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MobileNavLinkItem() {
  return (
    <AccordionItem value="item-1" className="border-b border-gray !py-0">
      <AccordionTrigger
        iconClassName="h-9 w-9 bg-surface rounded-full p-1"
        className="py-[15px] text-lg font-medium leading-[28px] tracking-[-1.5%] text-dark hover:no-underline"
      >
        About Us
      </AccordionTrigger>
      <AccordionContent className="py-0">
        <div className="mb-[10px] flex w-full flex-col gap-3 rounded-[8px] bg-surface p-[15px] text-base font-medium leading-[22px] text-gray-dark">
          <Link
            className="transition-all duration-300 hover:text-dark hover:underline"
            href="/"
          >
            Who we are
          </Link>
          <Link
            className="transition-all duration-300 hover:text-dark hover:underline"
            href="/"
          >
            Our Leadership
          </Link>
          <Link
            className="transition-all duration-300 hover:text-dark hover:underline"
            href="/"
          >
            Our History
          </Link>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default MobileNavLinkItem;
