import { cn } from "@/lib/utils";
import CounterCard from "./CounterCard";

function CounterSection({ data }) {
  const { counters, variation } = data?.data;
  return (
    <section className="my-10 md:my-[100px]">
      <div className="container">
        <div
          className={cn(
            "counters-grid grid w-full grid-cols-1 gap-[30px] px-5 sm:grid-cols-2 sm:gap-16 sm:px-0 md:gap-[30px] lg:grid-cols-4",
            `${variation ? "md:grid-cols-3" : "md:grid-cols-4"}`,
          )}
        >
          {counters.map((counter) => (
            <CounterCard  key={counter._id} counter={counter} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
