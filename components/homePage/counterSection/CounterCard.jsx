"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function CounterCard({ counter }) {
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
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="h-[50px] w-1.5 rounded-l-full bg-green-600 sm:h-[70px]"></div>
        <h4
          ref={countUpRef}
          className="scroll-smooth text-[38px] font-semibold leading-[50px] text-gray-800 sm:text-[58px] sm:leading-[70px] md:text-[38px] md:leading-normal xl:text-[58px] xl:leading-[70px]"
        >
          {isInView ? (
            <CountUp
              start={0}
              end={counter.counter_number}
              duration={2.5}
              separator=","
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

export default CounterCard;
