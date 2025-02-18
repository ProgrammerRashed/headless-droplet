function DonationHeading({donation_title,donation_sub_title}) {
  return (
    <div
      data-aos="fade-up"
      className="flex max-w-[500px] flex-col gap-[10px] text-base font-normal leading-[26px] text-gray-600"
    >
      <h3 className="text-[30px] font-bold leading-[40px] tracking-[1%] text-gray-800 md:text-5xl md:font-semibold md:leading-[60px]">
        {donation_title}
      </h3>
      <p>
       {donation_sub_title}
      </p>
    </div>
  );
}

export default DonationHeading;
