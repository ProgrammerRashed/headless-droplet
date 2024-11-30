import React from "react";
import HeaderTopSocial from "./HeaderTopSocial";
import HeaderTopSearch from "./HeaderTopSearch";

function HeaderTop() {
  return (
    <div className="hidden w-full flex-col xl:block">
      <div className="flex w-full flex-row items-center justify-end gap-5 py-[6px]">
        <HeaderTopSearch />
        <HeaderTopSocial />
      </div>
    </div>
  );
}

export default HeaderTop;
