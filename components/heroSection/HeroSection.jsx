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
        <source src="/video/hero-section-bg.mp4" type="video/mp4" />
      </video>
      <div className="bg-hero-gradient absolute inset-0 flex items-end pb-10 md:items-center md:pb-0">
        <div className="mx-[15px] flex w-full flex-col justify-center gap-[10px] text-white sm:mx-[30px] md:mx-[45px] md:gap-5 lg:mx-[90px]">
          <h1 className="max-w-[506px] text-[36px] font-semibold leading-[44px] md:text-[45px] md:leading-[60px] lg:max-w-[745px] lg:text-[70px] lg:leading-[78px]">
            Our 40 year’s legacy as a Swiss-based foundation
          </h1>
          <p className="max-w-[506px] text-[22px] font-medium leading-[32px] md:max-w-[450px] lg:max-w-[585px]">
            Recent transition is from Syngenta Foundation for Sustainable
            Agriculture
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
