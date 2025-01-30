function OurImpactCard({ counter }) {
  return (
    <div className="flex flex-col gap-2 border-y border-gray-50 px-10 py-[38px] sm:border xl:[&:nth-child(5)]:col-start-2 xl:[&:nth-child(6)]:col-start-3">
      <div className="flex items-center gap-4">
        <div className="h-[70px] w-1.5 rounded-l-full bg-green-600"></div>
        <h4 className="text-5xl font-semibold leading-[70px] text-gray-800 xl:text-[58px]">
          {counter.counterNumber}
          {counter.suffix}
        </h4>
      </div>
      <p className="text-base font-normal leading-[26px] text-gray-600">
        {counter.counterDetails}
      </p>
    </div>
  );
}

export default OurImpactCard;
