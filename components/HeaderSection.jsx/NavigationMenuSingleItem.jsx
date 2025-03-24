"use client"
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function NavigationMenuSingleItem({ navigation }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className="rounded-0 flex items-center justify-center gap-1 rounded-none border-b-2 border-transparent !bg-transparent px-[10px] py-[31px] text-center text-sm font-normal capitalize leading-[26px] text-[#0B1411] outline-transparent transition-all duration-300 hover:!bg-transparent hover:text-[#0B1411]/70 data-[state=open]:border-red-600 3xl:px-[15px] 3xl:text-base"
        cheveonClassName="w-5 h-5"
      >
        {navigation?.group_name}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="flex h-[400px] !w-[714px] flex-row justify-between bg-surface shadow-2xl backdrop-blur-md">
        <div className="flex flex-grow flex-col p-5">
          {/* Render non-accordion items (Links) first */}
          {navigation?.child_navigations.map((navItem, index) => {
            if (navItem.title?.toLowerCase().includes('download')) return null;
            if (!navItem?.nested_child_navigations?.length) {
              return (
                <Link
                  key={index}
                  href={navItem?.link}
                  className="flex flex-row items-center justify-between rounded-sm p-3 text-base font-medium capitalize leading-[26px] transition-all duration-300 hover:bg-white"
                >
                  <span>{navItem?.title}</span>
                  <ChevronRight size="18" />
                </Link>
              );
            }
            return null; // Skip accordion items here
          })}
          {/* Single Accordion for all nested items */}
          <Accordion type="single" collapsible>
            {navigation?.child_navigations.map((navItem, index) => {
              if (navItem?.nested_child_navigations?.length) {
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger
                      className="flex flex-row items-center justify-between rounded-sm p-3 text-base font-medium capitalize leading-[26px] transition-all duration-300 hover:bg-white hover:no-underline data-[state=open]:bg-white data-[state=open]:text-red-600 [&[data-state=open]>svg]:text-red-600"
                      icon={<ChevronDown className="w-[18px] h-[18px] text-[#0B1411] transition-transform" />}
                    >
                      <span>{navItem?.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white p-3">
                      <div className="flex flex-col gap-4">
                        {navItem?.nested_child_navigations.map((childnav, childIndex) => (
                          <Link
                            key={childIndex}
                            href={childnav?.link || "/"}
                            className="transition-all duration-300 hover:text-red-600 hover:underline"
                          >
                            {childnav?.title || "Unnamed"}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              }
              return null;
            })}
          </Accordion>
        </div>
        <div className="h-full w-auto overflow-hidden border-l border-gray-600/10 p-5">
          <Image
            src={navigation?.banner_image || "/thumbnail.png"}
            width={374}
            height={360}
            alt="About us"
            className="h-full w-[374px] rounded-[8px] object-cover shadow-sm"
          />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default NavigationMenuSingleItem;