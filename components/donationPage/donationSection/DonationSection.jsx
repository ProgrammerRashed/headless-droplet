import Image from "next/image";
import DonationHeading from "./DonationHeading";
import DonationForm from "./DonationForm";

function DonationSection({ data }) {
  const { donation_title, banner_image, donation_sub_title, country, donation_options } = data.data;

  return (
    <section>
      <div className="relative">
        <Image
          src={banner_image || "/thumbnail.png"}
          width={1440}
          height={622}
          alt="Bangladesh"
          className="aspect-[36/20] max-h-[660px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#1E5E4F] to-[#3FC4A4] opacity-40 bg-blend-color"></div>
      </div>
      <div className="py-[50px] md:py-[100px]">
        <div className="container">
          <div id="donaton-from"  className="flex flex-col gap-10 md:gap-[50px] 0.5xl:flex-row">
            <DonationHeading donation_title={donation_title} donation_sub_title={donation_sub_title} />
            <DonationForm country={country} donation_options={donation_options} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationSection;
