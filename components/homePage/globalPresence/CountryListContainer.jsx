import CountryListItem from "./CountryListItem";

function CountryListContainer({ countries }) {
  return (
    <div
      data-aos="fade-up"
      className="mb-5 flex w-full flex-wrap items-center justify-center gap-[10px] rounded-[8px] border border-gray-50 bg-surface p-[10px] sm:mb-10 lg:-mt-20 lg:mb-0 lg:max-w-[180px] lg:flex-col lg:border-none lg:bg-transparent lg:p-0"
    >
      {countries?.map((country) => (
        <CountryListItem key={country._id} country={country} />
      ))}
    </div>
  );
}

export default CountryListContainer;
