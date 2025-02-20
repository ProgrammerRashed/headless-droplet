import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MobileNavLinkItem({ navigation, setIsMobileNavOpen, index }) {
  return (
    <AccordionItem value={index + 1} className="border-b border-gray-50 !py-0">
      <AccordionTrigger
        iconClassName="h-9 w-9 bg-surface rounded-full p-1"
        className="py-[15px] text-[22px] font-medium capitalize leading-[32px] text-gray-800 hover:no-underline"
      >
        {navigation?.group_name}
      </AccordionTrigger>
      <AccordionContent className="py-0">
        <div className="mb-[10px] flex w-full flex-col gap-0 rounded-[8px] bg-surface p-0 text-base font-medium leading-[22px] text-gray-600">
          {navigation?.child_navigations?.map((navItem, index) => {
            return !navItem?.nested_child_navigations?.length ? (
              <Link
                onClick={() => setIsMobileNavOpen(false)}
                key={index}
                className="p-[15px] capitalize transition-all duration-300 hover:text-gray-800 hover:underline"
                href={navItem?.link}
              >
                {navItem?.title}
              </Link>
            ) : (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger
                    className="flex flex-row items-center justify-between rounded-sm px-[15px] text-base font-medium capitalize leading-[26px] transition-all duration-300 hover:bg-transparent hover:no-underline data-[state=open]:bg-transparent data-[state=open]:text-red-600 [&[data-state=open]>svg]:text-red-600"
                    iconClassName="w-[18px] text-[#0B1411]  h-[18px] bg-transparent  -rotate-90 p-0"
                  >
                    <span>{navItem?.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white p-[15px]">
                    <div className="flex flex-col gap-4">
                      {navItem?.nested_child_navigations.map(
                        (childnav, index) => (
                          <Link
                            key={index}
                            href={childnav?.link || "/"}
                            className="transition-all duration-300 hover:text-red-600 hover:underline"
                          >
                            {childnav?.title || "Unnamed"}
                          </Link>
                        ),
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default MobileNavLinkItem;
