import Link from "next/link";
import React from "react";

function HeaderTopSocial({ socialLinks }) {
  return (
    <div className="flex flex-row items-center justify-end gap-[6px]">
      <div className="mr-[6px] h-3 w-[1px] bg-gray-50"></div>
      <Link
        href={socialLinks[0].link}
        target="_blank"
        className="flex h-[34px] w-[34px] shrink-0 grow-0 items-center justify-center rounded-full bg-[#3FC4A4] transition-all duration-300 hover:bg-[#3FC4A4]/80"
      >
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3654_84)">
            <path
              d="M10.2315 7.81553L10.6171 5.30097H8.20452V3.66918C8.20452 2.98123 8.54153 2.31068 9.62216 2.31068H10.7191V0.169914C10.7191 0.169914 9.72358 0 8.77185 0C6.78478 0 5.48609 1.20427 5.48609 3.38447V5.30097H3.27734V7.81553H5.48609V13.8943C5.92898 13.9638 6.38291 14 6.84532 14C7.30773 14 7.76164 13.9638 8.20452 13.8943V7.81553H10.2315Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3654_84">
              <rect width={14} height={14} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link
        href={socialLinks[1].link}
        target="_blank"
        className="flex h-[34px] w-[34px] shrink-0 grow-0 items-center justify-center rounded-full bg-[#3FC4A4] transition-all duration-300 hover:bg-[#3FC4A4]/80"
      >
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3654_87)">
            <path
              d="M14 8.51199V13.6875H10.9988V8.86028C10.9988 7.64614 10.5659 6.81936 9.47873 6.81936C8.64869 6.81936 8.15717 7.37597 7.93908 7.91631C7.86096 8.10836 7.83818 8.37853 7.83818 8.6487V13.6908H4.83701C4.83701 13.6908 4.87608 5.51083 4.83701 4.66451H7.83818V5.94375C7.83167 5.95351 7.82516 5.96328 7.81865 5.97304H7.83818V5.94375C8.23855 5.32854 8.94815 4.45293 10.5431 4.45293C12.5189 4.44968 14 5.74193 14 8.51199ZM1.69914 0.3125C0.670542 0.3125 0 0.986297 0 1.87167C0 2.73752 0.651011 3.43084 1.66008 3.43084H1.67961C2.72774 3.43084 3.37875 2.73752 3.37875 1.87167C3.35596 0.986297 2.72448 0.3125 1.69914 0.3125ZM0.179028 13.6908H3.18019V4.66126H0.179028V13.6908Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3654_87">
              <rect width={14} height={14} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link
        href={socialLinks[2].link}
        target="_blank"
        className="flex h-[34px] w-[34px] shrink-0 grow-0 items-center justify-center rounded-full bg-[#3FC4A4] transition-all duration-300 hover:bg-[#3FC4A4]/80"
      >
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3654_93)">
            <mask
              id="mask0_3654_93"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={14}
              height={14}
            >
              <path d="M14 0H0V14H14V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_3654_93)">
              <path
                d="M8.3319 5.925L13.5437 0H12.3087L7.78327 5.14459L4.16883 0H0L5.46574 7.77954L0 13.9928H1.2351L6.01406 8.55995L9.83117 13.9928H14L8.3316 5.925H8.3319ZM6.64026 7.84808L6.08647 7.07341L1.68013 0.909309H3.57717L7.13314 5.88394L7.68693 6.6586L12.3093 13.1249H10.4122L6.64026 7.84837V7.84808Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_3654_93">
              <rect width={14} height={14} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link
        href={socialLinks[3].link}
        target="_blank"
        className="flex h-[34px] w-[34px] shrink-0 grow-0 items-center justify-center rounded-full bg-[#3FC4A4] transition-all duration-300 hover:bg-[#3FC4A4]/80"
      >
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7075 3.6299C13.5465 3.02752 13.0722 2.55319 12.4698 2.39219C11.3779 2.09961 7 2.09961 7 2.09961C7 2.09961 2.62207 2.09961 1.53018 2.39219C0.92791 2.55319 0.453469 3.02752 0.292496 3.6299C0 4.72168 0 6.99969 0 6.99969C0 6.99969 0 9.27764 0.292496 10.3693C0.453469 10.9717 0.92791 11.4462 1.53018 11.6071C2.62207 11.8996 7 11.8996 7 11.8996C7 11.8996 11.3779 11.8996 12.4698 11.6071C13.0722 11.4462 13.5465 10.9717 13.7075 10.3693C14 9.27764 14 6.99969 14 6.99969C14 6.99969 14 4.72168 13.7075 3.6299ZM5.59992 9.09972V4.89964L9.23716 6.99969L5.59992 9.09972Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
}

export default HeaderTopSocial;
