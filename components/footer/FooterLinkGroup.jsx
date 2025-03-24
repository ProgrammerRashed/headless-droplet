import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function FooterLinkGroup({ navigation, index }) {
  return (
    <div className="flex flex-col gap-5 text-white">
      <h6 className="text-base font-semibold capitalize leading-[24px] tracking-[3%]">
        {navigation?.group_name}
      </h6>
      <div className="flex flex-col gap-4 text-sm font-normal leading-[22px] text-white/80">
        {navigation?.child_navigations?.map((navItem, index) => {

          if (navItem.title?.toLowerCase().includes('download')) return  (<Link
              href={navItem?.link}
              key={index}
              className="capitalize hover:underline"
              download={true}
              target="_blank"
            >
              {navItem?.title}
            </Link>);
          return !navItem?.nested_child_navigations?.length ? (
            <Link
              href={navItem?.link}
              key={index}
              className="capitalize hover:underline"
            >
              {navItem?.title}
            </Link>
          ) : (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger
                  className="py-0 text-sm font-normal capitalize leading-[22px] hover:no-underline"
                  iconClassName="w-[18px] text-white h-[18px] bg-transparent p-0"
                >
                  <span>{navItem?.title}</span>
                </AccordionTrigger>
                <AccordionContent className="mt-3 rounded-sm bg-surface/5 px-2 py-3">
                  <div className="flex flex-col gap-4">
                    {navItem?.nested_child_navigations.map(
                      (childnav, index) => (
                        <Link
                          key={index}
                          href={childnav?.link || "/"}
                          className="text-sm transition-all duration-300 hover:underline"
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
    </div>
  );
}

export default FooterLinkGroup;
