import Image from "next/image";

function DirectorsDetailsSection({ imageLink, directorName, role, about }) {
  return (
    <section className="border-b border-gray-50 py-[50px] md:py-[100px]">
      <div className="container">
        <div
          data-aos="fade-up"
          className="flex flex-col overflow-hidden rounded-[8px] bg-surface lg:flex-row"
        >
          <Image
            src={imageLink}
            width={560}
            height={650}
            alt="Directors image"
            className="aspect-[330/383] w-full object-cover lg:w-1/2 xl:aspect-[56/65] xl:h-[650px] xl:w-[560px]"
          />
          <div
            data-aos="fade-up"
            className="flex flex-col rounded-[8px] px-[15px] py-[30px] md:py-10 md:pl-10 md:pr-[40px] xl:py-20 xl:pl-20 xl:pr-[60px]"
          >
            <h4 className="mb-0.5 text-xl font-semibold leading-[32px] text-gray-800 md:text-2xl md:leading-[36px]">
              {directorName}
            </h4>
            <p className="mb-5 text-sm font-normal leading-[22px] text-gray-400">
              {role}
            </p>
            <p className="text-base font-normal leading-[26px] text-gray-600">
              {about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DirectorsDetailsSection;
