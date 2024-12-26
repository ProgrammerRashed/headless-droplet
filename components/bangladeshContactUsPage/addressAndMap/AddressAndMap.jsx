function AddressAndMap({ address }) {
  return (
    <div className="bg-red-10">
      <div className="mb-10 flex flex-col gap-[10px] text-base font-normal leading-[26px] text-gray-600 0.5xl:mb-20">
        <h3 className="text-2xl font-medium leading-[36px] text-gray-800 md:font-semibold">
          {address.addressHeading}
        </h3>
        <p>{address.address}</p>
        <p>{address.phone}</p>
        <p>{address.email}</p>
      </div>
      <div className="flex aspect-[330/204] w-full items-center justify-center overflow-hidden rounded-[8px] shadow-md shadow-gray-50/50 0.5xl:aspect-[50/31]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1879483.159717474!2d89.79314312548325!3d23.065390393395695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf508a00fbc9%3A0xae563668ab4e83a6!2sSyngenta%20Bangladesh%20Limited!5e0!3m2!1sen!2sbd!4v1735196579703!5m2!1sen!2sbd"
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
