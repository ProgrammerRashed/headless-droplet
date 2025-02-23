"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function OurImpactCard({ counter }) {
  const [isInView, setIsInView] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = countUpRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 border-y border-gray-50 px-10 py-[38px] sm:border xl:[&:nth-child(5)]:col-start-2 xl:[&:nth-child(6)]:col-start-3">
      <div className="flex items-center gap-4">
        <div className="h-[70px] w-1.5 rounded-l-full bg-green-600"></div>
        <h4
          ref={countUpRef}
          className="text-5xl font-semibold leading-[70px] text-gray-800 xl:text-[58px]"
        >
          {isInView ? (
            <CountUp
              start={0}
              end={counter.counter_number}
              duration={2.5}
              separator=""
            />
          ) : (
            0
          )}
          {counter.suffix}
        </h4>
      </div>
      <p className="text-base font-normal leading-[26px] text-gray-600">
        {counter.counter_details}
      </p>
    </div>
  );
}

export default OurImpactCard;
