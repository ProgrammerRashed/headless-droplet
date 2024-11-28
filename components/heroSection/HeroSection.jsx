function HeroSection() {
  return (
    <section className="relative flex h-[608px] items-center overflow-hidden lg:h-[795px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/videos/hero-banner.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-end bg-hero-gradient pb-10 lg:pb-[134px]">
        <div className="mx-[15px] flex w-full flex-col justify-center gap-[10px] text-white sm:mx-[30px] md:mx-[45px] md:gap-5 lg:mx-[90px]">
          <h1 className="max-w-[470px] text-[36px] font-semibold leading-[44px] sm:max-w-[500px] md:max-w-[600px] md:text-[40px] md:leading-[52px] lg:max-w-[745px] lg:text-[70px] lg:leading-[78px]">
            Our 40 year’s legacy as a Swiss-based foundation
          </h1>
          <p className="max-w-[470px] text-[22px] font-medium leading-[32px] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[585px]">
            Recent transition is from Syngenta Foundation for Sustainable
            Agriculture
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
