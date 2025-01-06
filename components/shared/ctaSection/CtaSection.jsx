import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";

function CtaSection({ data }) {
  const { sectionTitle, details, btnDetails } = data;
  return (
    <section className="relative">
      <div className="relative flex flex-col items-center justify-center gap-[30px] bg-green-800/90 px-[15px] py-[50px] text-center md:py-[100px]">
        <h2
          data-aos="fade-up"
          className="max-w-[600px] text-[26px] font-semibold leading-[34px] text-surface md:text-[32px] md:font-bold md:leading-[42px]"
        >
          {sectionTitle}
        </h2>
        {details && (
          <p
            data-aos="fade-up"
            className="-mt-[10] max-w-[768px] text-center text-base font-normal leading-[26px] text-white"
          >
            {details}
          </p>
        )}
        <div data-aos="fade-up">
          <PrimaryButton className="border-none bg-red-600 stroke-white text-white">
            {btnDetails.title}
          </PrimaryButton>
        </div>
      </div>
      <Image
        src="/cta-banner/cta-banner.jpg"
        width={1440}
        height={378}
        alt="Cta Banner"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </section>
  );
}

export default CtaSection;
