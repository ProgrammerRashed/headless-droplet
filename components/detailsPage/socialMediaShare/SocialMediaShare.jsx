"use client";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";

function SocialMediaShare() {
  return (
    <div
      data-aos="fade-up"
      className="mt-10 flex flex-row items-center gap-[10px] border-t border-gray-50 pt-5 md:mt-[60px]"
    >
      <p className="mr-[10px] text-base font-normal leading-[26px] text-gray-600">
        Share
      </p>
      <FacebookShareButton
        url={"https://github.com/next-share"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
      >
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3FC4A4] text-white transition-all duration-300 hover:bg-gray-400">
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2257_65008)">
              <path
                d="M10.2315 8.11045L10.6171 5.59589H8.20452V3.9641C8.20452 3.27616 8.54153 2.60561 9.62216 2.60561H10.7191V0.464836C10.7191 0.464836 9.72358 0.294922 8.77185 0.294922C6.78478 0.294922 5.48609 1.4992 5.48609 3.67939V5.59589H3.27734V8.11045H5.48609V14.1892C5.92898 14.2587 6.38291 14.2949 6.84532 14.2949C7.30773 14.2949 7.76164 14.2587 8.20452 14.1892V8.11045H10.2315Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2257_65008">
                <rect
                  width={14}
                  height={14}
                  fill="white"
                  transform="translate(0 0.294922)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </FacebookShareButton>
      <LinkedinShareButton url={"https://github.com/next-share"}>
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3FC4A4] text-white transition-all duration-300 hover:bg-gray-400">
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2257_65011)">
              <path
                d="M14 8.80691V13.9825H10.9988V9.1552C10.9988 7.94107 10.5659 7.11428 9.47873 7.11428C8.64869 7.11428 8.15717 7.6709 7.93908 8.21123C7.86096 8.40328 7.83818 8.67345 7.83818 8.94362V13.9857H4.83701C4.83701 13.9857 4.87608 5.80575 4.83701 4.95943H7.83818V6.23867C7.83167 6.24844 7.82516 6.2582 7.81865 6.26797H7.83818V6.23867C8.23855 5.62346 8.94815 4.74785 10.5431 4.74785C12.5189 4.7446 14 6.03686 14 8.80691ZM1.69914 0.607422C0.670542 0.607422 0 1.28122 0 2.16659C0 3.03244 0.651011 3.72577 1.66008 3.72577H1.67961C2.72774 3.72577 3.37875 3.03244 3.37875 2.16659C3.35596 1.28122 2.72448 0.607422 1.69914 0.607422ZM0.179028 13.9857H3.18019V4.95618H0.179028V13.9857Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2257_65011">
                <rect
                  width={14}
                  height={14}
                  fill="white"
                  transform="translate(0 0.294922)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </LinkedinShareButton>
      <TwitterShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons for your next React apps."}
      >
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3FC4A4] text-white transition-all duration-300 hover:bg-gray-400">
          <svg
            width={14}
            height={15}
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2257_65017)">
              <mask
                id="mask0_2257_65017"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={14}
                height={15}
              >
                <path d="M14 0.294922H0V14.2949H14V0.294922Z" fill="white" />
              </mask>
              <g mask="url(#mask0_2257_65017)">
                <path
                  d="M8.3319 6.21992L13.5437 0.294922H12.3087L7.78327 5.43952L4.16883 0.294922H0L5.46574 8.07446L0 14.2877H1.2351L6.01406 8.85487L9.83117 14.2877H14L8.3316 6.21992H8.3319ZM6.64026 8.143L6.08647 7.36833L1.68013 1.20423H3.57717L7.13314 6.17886L7.68693 6.95352L12.3093 13.4198H10.4122L6.64026 8.1433V8.143Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2257_65017">
                <rect
                  width={14}
                  height={14}
                  fill="white"
                  transform="translate(0 0.294922)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </TwitterShareButton>
    </div>
  );
}

export default SocialMediaShare;
