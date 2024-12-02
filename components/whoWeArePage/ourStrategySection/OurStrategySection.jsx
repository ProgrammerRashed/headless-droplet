import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Image from "next/image";
import Link from "next/link";

function OurStrategySection({
  sectionTitle,
  sectionDetails,
  bannerImg,
  downloadFile,
}) {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[30px] md:gap-10 lg:flex-row-reverse lg:justify-between">
          <Image
            src={bannerImg}
            alt=""
            width={625}
            height={625}
            data-aos="fade-up"
            className="aspect-[33/26] w-full rounded-[8px] object-cover shadow lg:aspect-square lg:w-[48%] xl:w-[48.44%]"
          />
          <div className="flex flex-col md:justify-between lg:w-[48%] xl:w-[48.44%]">
            <div className="flex flex-col">
              <div data-aos="fade-up">
                <SectionHeading className="mb-5 capitalize">
                  {sectionTitle}
                </SectionHeading>
              </div>
              <p
                data-aos="fade-up"
                className="mb-[30px] text-base font-normal leading-[26px] text-gray-600"
              >
                {sectionDetails}
              </p>
            </div>
            <div className="flex flex-col">
              <h4
                data-aos="fade-up"
                className="mb-5 text-lg font-medium leading-[28px] text-gray-800 md:text-2xl md:leading-[36px]"
              >
                Downloads
              </h4>
              <div
                data-aos="fade-up"
                className="flex max-w-[630px] cursor-pointer flex-row items-center justify-between gap-[15px] rounded-[8px] border border-gray-50 p-3 pr-2 backdrop-blur-md transition-all duration-300 hover:bg-surface md:px-[10px] md:py-4"
              >
                <div className="flex flex-row items-center gap-[15px]">
                  <svg
                    width={50}
                    height={53}
                    viewBox="0 0 50 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.117188"
                      width={50}
                      height={52}
                      rx={4}
                      fill="#FAF9F5"
                    />
                    <g clipPath="url(#clip0_2257_66754)">
                      <path
                        d="M37.4219 18.0019L30.9733 11.5859H16.7723C15.7886 11.5859 14.9805 12.3393 14.9805 13.323V22.4988C14.9805 22.497 15.0404 22.4844 15.0803 22.4844H15.8594V13.323C15.8594 12.8319 16.2813 12.4648 16.7723 12.4648H30.576L30.8594 12.7306V16.3395C30.8594 17.3192 31.656 18.0898 32.6356 18.0898H36.2446L36.4844 18.3708V38.8524C36.4844 39.3435 36.1432 39.7695 35.6522 39.7695H16.7723C16.2813 39.7695 15.8594 39.3434 15.8594 38.8524V35.3164H15.0803C15.0404 35.3164 14.9805 35.3186 14.9805 35.3168V38.8524C14.9805 39.8361 15.7886 40.6484 16.7723 40.6484H35.6522C36.6359 40.6484 37.4219 39.8361 37.4219 38.8524V18.0019ZM32.6356 17.2109C32.1446 17.2109 31.7383 16.8306 31.7383 16.3395V13.7089V13.6919L35.2833 17.2109H32.6356Z"
                        fill="#39B295"
                      />
                      <path
                        d="M23.1691 27.4062H22.7148V30.5703H23.0648C23.5283 30.5703 23.8681 30.4316 24.0844 30.1625C24.3007 29.8935 24.4088 29.4801 24.4088 28.9265C24.4088 28.409 24.3065 28.028 24.1018 27.7783C23.8971 27.5285 23.5862 27.4062 23.1691 27.4062Z"
                        fill="#39B295"
                      />
                      <path
                        d="M31.8907 23.3633H14.3593C13.3756 23.3633 12.5781 24.1607 12.5781 25.1444V32.5978C12.5781 33.5814 13.3756 34.3789 14.3593 34.3789H31.8907C32.8744 34.3789 33.6719 33.5814 33.6719 32.5978V25.1444C33.6719 24.1607 32.8744 23.3633 31.8907 23.3633ZM19.7414 29.4174C19.3694 29.7611 18.8409 29.9258 18.1561 29.9258H17.7344V31.8008H16.2109V26.1758H18.1561C18.8692 26.1758 19.4048 26.3271 19.7627 26.6386C20.1205 26.9502 20.2996 27.3873 20.2996 27.9613C20.2996 28.5922 20.1135 29.0737 19.7414 29.4174ZM25.2141 31.0423C24.6952 31.5521 23.9659 31.8008 23.0262 31.8008H21.1914V26.1758H23.1537C24.0599 26.1758 24.7596 26.4031 25.2527 26.8665C25.7457 27.3299 25.9923 27.9941 25.9923 28.8695C25.9923 29.8118 25.7329 30.5325 25.2141 31.0423ZM30.332 27.4062H28.5156V28.4609H30.2148V29.6914H28.5156V31.8008H26.9922V26.1758H30.332V27.4062Z"
                        fill="#39B295"
                      />
                      <path
                        d="M18.1213 27.4062H17.7344V28.6953H18.0054C18.2346 28.6953 18.4168 28.6316 18.5519 28.5028C18.6871 28.3741 18.7547 28.2004 18.7547 27.9738C18.7547 27.5928 18.5436 27.4062 18.1213 27.4062Z"
                        fill="#39B295"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2257_66754">
                        <rect
                          width={30}
                          height={30}
                          fill="white"
                          transform="translate(10 11.1172)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-base font-normal leading-[26px] text-gray-800">
                    {downloadFile.fileName}
                  </p>
                </div>
                <Link href={downloadFile.link} className="p-2">
                  <svg
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.3672V3.11719"
                      stroke="#971512"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 12.8672L12 17.3672L16.5 12.8672"
                      stroke="#971512"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 18.1172V19.6172C18 20.4422 17.325 21.1172 16.5 21.1172H7.5C6.675 21.1172 6 20.4422 6 19.6172V18.1172"
                      stroke="#971512"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStrategySection;
