function HeroSection({data }) {
 const {section_heading, section_subheading, bg_cover_video} = data?.data
  return (
    <section className="relative flex h-screen items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={bg_cover_video || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-end bg-hero-gradient pb-10 lg:pb-[134px]">
        <div className="mx-[15px] flex w-full flex-col justify-center gap-[10px] text-white sm:mx-[30px] md:mx-[45px] md:gap-5 lg:mx-[90px]">
          <h1
            data-aos="fade-up"
            className="max-w-[470px] text-[36px] font-semibold leading-[44px] sm:max-w-[500px] md:max-w-[600px] md:text-[40px] md:leading-[52px] lg:max-w-[745px] lg:text-[70px] lg:leading-[78px]"
          >
            {section_heading}
          </h1>
          <p
            data-aos="fade-up"
            className="max-w-[470px] text-[22px] font-medium leading-[32px] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[585px]"
          >
            {section_subheading}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
