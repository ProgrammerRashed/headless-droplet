import React from "react";
import HeaderTopSocial from "./HeaderTopSocial";
import HeaderTopSearch from "./HeaderTopSearch";
import { cn } from "@/lib/utils";

function HeaderTop({ socialLinks }) {
  return (
    <div className={cn(`hidden w-full flex-col xl:block`)}>
      <div className="flex w-full flex-row items-center justify-end gap-5 py-[6px]">
        <HeaderTopSearch />
        <HeaderTopSocial socialLinks={socialLinks} />
      </div>
    </div>
  );
}

export default HeaderTop;
