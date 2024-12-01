import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";

function NavigationMenuSingleItem() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className="flex items-center justify-center gap-1 !bg-transparent px-[15px] text-center text-base font-normal leading-[26px] text-[#0B1411] transition-all duration-300 hover:!bg-transparent hover:text-[#0B1411]/70"
        cheveonClassName="w-5 h-5"
      >
        About Us
      </NavigationMenuTrigger>
      <NavigationMenuContent className="flex h-[400px] !w-[714px] flex-row justify-between bg-surface shadow-2xl backdrop-blur-md">
        <div className="flex flex-grow flex-col p-5">
          <Link
            href="/"
            className="flex flex-row items-center justify-between rounded-sm p-3 text-base font-medium leading-[26px] transition-all duration-300 hover:bg-white"
          >
            <span>Who we are</span>
            <ChevronRight size="18" />
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center justify-between rounded-sm p-3 text-base font-medium leading-[26px] transition-all duration-300 hover:bg-white"
          >
            <span>Our Leadership</span>
            <ChevronRight size="18" />
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center justify-between rounded-sm p-3 text-base font-medium leading-[26px] transition-all duration-300 hover:bg-white"
          >
            <span>Our History</span>
            <ChevronRight size="18" />
          </Link>
        </div>
        <div className="h-full w-auto overflow-hidden border-l border-gray-dark/10 p-5">
          <Image
            src="/blogs-and-insights/1.png"
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
