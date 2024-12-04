"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative mx-auto mt-[30px] md:mt-[100px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-16 first-of-type:pt-0 lg:mt-20"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-fit">
              <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-surface">
                <div className="bg-green-600 h-4 w-4 rounded-full" />
              </div>

              <h3 className="ml-24 hidden text-2xl font-semibold leading-[36px] text-gray-800 md:block">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-10 lg:pl-20">
              <h3 className="mb-[15px] block text-left text-base font-medium leading-[26px] text-gray-800 md:hidden md:text-lg md:leading-[38px]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-3 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="from-green-600 absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[0%] via-green-400 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
