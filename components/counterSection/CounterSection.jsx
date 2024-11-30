import CounterCard from "./CounterCard";

function CounterSection() {
  return (
    <section className="my-10 md:my-[100px]">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-[30px] px-5 sm:grid-cols-2 sm:gap-16 sm:px-0 md:grid-cols-4 md:gap-[30px]">
          <CounterCard />
          <CounterCard />
          <CounterCard />
          <CounterCard />
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
