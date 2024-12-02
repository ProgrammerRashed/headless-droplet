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
      {
        threshold: 0.5,
      },
    );
    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div data-aos="fade-up" className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="h-[50px] w-1.5 rounded-l-full bg-green sm:h-[70px]"></div>
        <h4
          ref={countUpRef}
          className="scroll-smooth text-[38px] font-semibold leading-[50px] text-dark sm:text-[58px] sm:leading-[70px] md:text-[48px] md:leading-normal lg:text-[58px] xl:leading-[70px]"
        >
          {isInView && (
            <CountUp
              end={counter.counterNumber}
              duration={4}
              decimals={1}
              decimal="."
              separator=" "
              suffix={counter.suffix}
            >
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          )}
        </h4>
      </div>
      <p className="text-base font-normal leading-[26px] text-gray-dark">
        {counter.counterDetails}
      </p>
    </div>
  );
}

export default CounterCard;
