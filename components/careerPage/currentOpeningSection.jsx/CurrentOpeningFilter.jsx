"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

function CurrentOpeningFilter({departments, country}) {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-scroll-locked") {
          document.body.removeAttribute("data-scroll-locked");
        }
      });
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <form className="flex max-w-sm flex-grow items-end justify-end gap-[10px] md:max-w-md 0.5xl:max-w-[580px]">
      <div data-aos="fade-up" className="w-full flex-col gap-1">
        <Select className="w-full">
          <SelectTrigger
            id="country"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-white px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
          >
            <SelectValue placeholder="All Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                country?.map((item) => (
                  <SelectItem
                  key={item?.value}
                  value={item?.value}
                  className="text-gray-700 hover:bg-surface focus:bg-surface"
                >
                 {item?.label}
                </SelectItem>
                ) )
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div data-aos="fade-up" className="w-full flex-col gap-1">
        <Select className="w-full">
          <SelectTrigger
            id="country"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-white px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
          >
            <SelectValue placeholder="All Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
            {
                departments?.map((item) => (
                  <SelectItem
                  key={item?.value}
                  value={item?.value}
                      className="text-gray-700 hover:bg-surface focus:bg-surface"
                >
                 {item?.label}
                </SelectItem>
                ) )
              }
           
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
}

export default CurrentOpeningFilter;
