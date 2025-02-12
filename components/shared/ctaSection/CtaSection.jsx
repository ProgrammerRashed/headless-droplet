const { default: Image } = require("next/image");
const { default: PrimaryButton } = require("../buttons/PrimaryButton");

function CtaSection({ data }) {
  const { section_title = "", details = "", btn_details = [], cta_banner = "" } = data.data || {};

  return (
    <section className="relative">
      <div className="relative flex flex-col items-center justify-center gap-[30px] bg-green-800/90 px-[15px] py-[50px] text-center md:py-[100px]">
        <h2
          data-aos="fade-up"
          className="max-w-[600px] text-[26px] font-semibold leading-[34px] text-surface md:text-[32px] md:font-bold md:leading-[42px]"
        >
          {section_title}
        </h2>
        {details && (
          <p
            data-aos="fade-up"
            className="-mt-[10] max-w-[768px] text-center text-base font-normal leading-[26px] text-white"
          >
            {details}
          </p>
        )}
        {btn_details.length > 0 && (
          <div data-aos="fade-up">
            <PrimaryButton href={btn_details[0]?.link || "#"} className="border-none bg-red-600 stroke-white text-white">
              {btn_details[0]?.title || "Learn More"}
            </PrimaryButton>
          </div>
        )}
      </div>
      {cta_banner && (
        <Image
          src={cta_banner || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
          width={1440}
          height={378}
          alt="Cta Banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
    </section>
  );
}


export default CtaSection