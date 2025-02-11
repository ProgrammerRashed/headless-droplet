function AddressAndMap({ address }) {
  return (
    <div>
      <div
        data-aos="fade-up"
        className="mb-10 flex flex-col gap-[10px] text-base font-normal leading-[26px] text-gray-600 0.5xl:mb-20"
      >
        <h3 className="text-2xl font-medium leading-[36px] text-gray-800 md:font-semibold">
          {address?.addressHeading}
        </h3>
        <p>{address?.address}</p>
        <p>{address?.phone}</p>
        <p>{address?.email}</p>
      </div>
      <div
        data-aos="fade-up"
        className="flex aspect-[330/204] w-full items-center justify-center overflow-hidden rounded-[8px] shadow-md shadow-gray-50/50 0.5xl:aspect-[50/31]"
      >
        <iframe
          src={address?.map_link}
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="inline-block h-full w-full border-0"
        ></iframe>
      </div>
    </div>
  );
}

export default AddressAndMap;
