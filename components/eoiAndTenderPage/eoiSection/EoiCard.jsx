function EoiCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="rounded-[8px] border border-gray-50 p-5 pb-3 hover:shadow"
    >
      <div className="roundd-[4px] mb-[15px] flex h-[60px] w-[60px] items-center justify-center bg-surface">
        <svg
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.5625 9.17961L27.9644 0.625H9.02977C7.71813 0.625 6.64062 1.62953 6.64062 2.94109V15.1755C6.64062 15.1731 6.72055 15.1562 6.77367 15.1562H7.8125V2.94109C7.8125 2.28633 8.375 1.79688 9.02977 1.79688H27.4347L27.8125 2.15117V6.96312C27.8125 8.2693 28.8747 9.29688 30.1809 9.29688H34.9928L35.3125 9.67148V36.9803C35.3125 37.6351 34.8577 38.2031 34.2029 38.2031H9.02977C8.375 38.2031 7.8125 37.635 7.8125 36.9803V32.2656H6.77367C6.72055 32.2656 6.64062 32.2685 6.64062 32.2662V36.9802C6.64062 38.2919 7.71813 39.375 9.02977 39.375H34.203C35.5145 39.375 36.5625 38.2919 36.5625 36.9803V9.17961ZM30.1809 8.125C29.5261 8.125 28.9844 7.61789 28.9844 6.96312V3.45562V3.43289L33.7111 8.125H30.1809Z"
            fill="#39B295"
          />
          <path
            d="M17.5587 21.7188H16.9531V25.9375H17.4198C18.0377 25.9375 18.4909 25.7526 18.7792 25.3938C19.0676 25.0351 19.2118 24.4839 19.2118 23.7458C19.2118 23.0557 19.0753 22.5477 18.8024 22.2148C18.5295 21.8818 18.1149 21.7188 17.5587 21.7188Z"
            fill="#39B295"
          />
          <path
            d="M29.1877 16.3281H5.81234C4.50078 16.3281 3.4375 17.3914 3.4375 18.703V28.6408C3.4375 29.9523 4.50078 31.0156 5.81234 31.0156H29.1877C30.4992 31.0156 31.5625 29.9523 31.5625 28.6408V18.703C31.5625 17.3914 30.4992 16.3281 29.1877 16.3281ZM12.9886 24.4002C12.4925 24.8585 11.7879 25.0781 10.8748 25.0781H10.3125V27.5781H8.28125V20.0781H10.8748C11.8256 20.0781 12.5398 20.2799 13.017 20.6952C13.4941 21.1106 13.7327 21.6934 13.7327 22.4588C13.7327 23.3 13.4847 23.942 12.9886 24.4002ZM20.2855 26.5669C19.5936 27.2466 18.6213 27.5781 17.3682 27.5781H14.9219V20.0781H17.5382C18.7466 20.0781 19.6795 20.3812 20.337 20.9991C20.9943 21.617 21.3231 22.5025 21.3231 23.6697C21.3231 24.9261 20.9772 25.8871 20.2855 26.5669ZM27.1094 21.7188H24.6875V23.125H26.9531V24.7656H24.6875V27.5781H22.6562V20.0781H27.1094V21.7188Z"
            fill="#39B295"
          />
          <path
            d="M10.8284 21.7188H10.3125V23.4375H10.6739C10.9795 23.4375 11.2223 23.3526 11.4026 23.1809C11.5828 23.0092 11.6729 22.7777 11.6729 22.4755C11.6729 21.9675 11.3914 21.7188 10.8284 21.7188Z"
            fill="#39B295"
          />
        </svg>
      </div>
      <h4 className="mb-[10px] text-[22px] font-medium leading-[32px] text-gray-800">
        {card.title}
      </h4>
      <p className="mb-1 text-xs font-semibold leading-[18px] text-gray-800">
        Date of Issue: <span className="font-normal">{card.issueDate}</span>
      </p>
      <p className="text-xs font-semibold leading-[18px] text-gray-800">
        Closing Date: <span className="font-normal">{card.closingDate}</span>
      </p>
      <button className="mt-[30px] flex w-full items-center gap-[10px] border-t border-gray-50 pt-3 text-base font-semibold leading-[24px] text-gray-800 transition-all duration-300 hover:text-red-600">
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 23V4"
            stroke="#971512"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17L16 23L22 17"
            stroke="#971512"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 24V26C24 27.1 23.1 28 22 28H10C8.9 28 8 27.1 8 26V24"
            stroke="#971512"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
}

export default EoiCard;
