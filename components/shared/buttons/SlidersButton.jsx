function SlidersButton({ onPrev, onNext }) {
  return (
    <div
      data-aos="fade-up"
      className="slider-buttons pointer-events-none absolute left-0 right-0 top-2/3 z-10 flex items-center justify-between"
    >
      <button
        onClick={onPrev}
        className="pointer-events-auto -ml-3 -mt-[120px] flex -translate-x-full items-center justify-center rounded-full border border-gray-50 bg-white stroke-red-600 p-3 transition-all duration-300 hover:bg-red-600 hover:stroke-white"
      >
        <svg
          className="rotate-180"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2181_7358)">
            <path
              d="M8 14L12 10L8 6"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2181_7358">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        onClick={onNext}
        className="pointer-events-auto -mr-3 -mt-[120px] flex translate-x-full items-center justify-center rounded-full border border-gray-50 bg-white stroke-red-600 p-3 transition-all duration-300 hover:bg-red-600 hover:stroke-white"
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2181_7358)">
            <path
              d="M8 14L12 10L8 6"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2181_7358">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default SlidersButton;
