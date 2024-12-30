"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useState } from "react";

function TabItems({ items }) {
  const tabsListRef = useRef(null);
  const tabRefs = useRef([]);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(tabsListRef.current.scrollLeft);
    tabsListRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.clientX - startX;
    tabsListRef.current.scrollLeft = scrollLeft - x;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    tabsListRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
    }
  };

  const handleTabClick = (e, index) => {
    e.preventDefault();
    const tab = tabRefs.current[index];
    if (tabsListRef.current && tab) {
      tab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <Tabs defaultValue="All" className="mt-10 w-full">
      <TabsList
        data-aos="fade-up"
        ref={tabsListRef}
        className="m-0 mb-[25px] flex h-auto justify-start gap-0 overflow-x-auto scroll-smooth rounded-none bg-white p-0 md:mb-[30px]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <TabsTrigger
            key={item.id}
            className="flex h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-8 py-[22px] text-center text-lg font-medium leading-[28px] text-gray-600 transition-all duration-300 data-[state=active]:border-red-600 data-[state=active]:bg-inherit data-[state=active]:text-red-600 data-[state=active]:shadow-none md:text-[22px] md:leading-[32px]"
            value={item.country}
            onClick={(e) => handleTabClick(e, index)}
            ref={(el) => (tabRefs.current[index] = el)}
          >
            {item.country}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default TabItems;
