"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Update height dynamically
  useEffect(() => {
    if (containerRef.current) {
      const updateHeight = () => {
        const rect = containerRef.current.getBoundingClientRect();
        setHeight(rect.height); // Store the full height
      };

      // Initialize height and observe changes
      updateHeight();
      const observer = new ResizeObserver(updateHeight);
      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 90%"],
  });

  // Transformations based on updated height
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div data-aos="fade-up" className="w-full" ref={containerRef}>
      <div className="relative mx-auto mt-[30px] md:mt-[100px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-start pt-16 first-of-type:pt-0 lg:pt-20"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row xl:max-w-fit">
              <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-surface">
                <div className="h-4 w-4 rounded-full bg-green-600" />
              </div>

              <h3 className="ml-24 hidden text-2xl font-semibold leading-[36px] text-gray-800 md:block">
                {item.timeLine}
              </h3>
            </div>

            <div className="relative w-full pl-10 lg:pl-20">
              <h3 className="mb-[15px] block text-left text-base font-medium leading-[26px] text-gray-800 md:hidden md:text-lg md:leading-[38px]">
                {item.title}
              </h3>
              <div className="flex flex-col pr-[10px] xl:flex-row xl:items-start xl:justify-between xl:gap-[60px] xl:pr-0">
                <div className="flex flex-col">
                  <h4 className="mb-[15px] text-[22px] font-semibold leading-[28px] text-gray-800">
                    {item.title}
                  </h4>
                  <p className="mb-[30px] text-sm font-normal leading-[22px] text-gray-600 md:text-base md:leading-[26px]">
                    {item.description}
                  </p>
                </div>
                <Image
                  src={item.imageLink}
                  width={435}
                  height={400}
                  alt=""
                  className="aspect-[280/257] w-full rounded-[8px] object-cover xl:aspect-[435/400] xl:max-w-[435px]"
                />
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-3 top-0 -z-10 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-green-600 from-[0%] via-green-400 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
