import Image from "next/image";

function CountryListItem({ country }) {
  return (
    <div className="flex items-center justify-center gap-1 rounded-[4px] bg-white p-2 shadow-lg lg:w-full lg:justify-start">
      <Image
        src={country?.flag_icon || "/thumbnail.png"}
        width={15}
        height={15}
        alt={country?.country_name}
        className="h-[15px] w-[15px] object-contain"
      />
      <p className="text-xs font-semibold leading-[18px] text-gray-600">
        {country?.country_name}
      </p>
    </div>
  );
}

export default CountryListItem;
