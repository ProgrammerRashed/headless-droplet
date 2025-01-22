function SliderCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-5 rounded-[8px] border-b border-green-600 bg-surface p-5 shadow-md shadow-surface md:py-10 md:pb-[30px]"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          className="flex-shrink-0 sm:h-8 sm:w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 10.625H2.5V9.375C2.5 6.81375 3.8675 4.2575 6.25 3.39875V0.625C2.3825 1.68 0 5.4125 0 9.375V11.875V18.125C0 18.8156 0.559375 19.375 1.25 19.375H7.5C8.19063 19.375 8.75 18.8156 8.75 18.125V11.875C8.75 11.185 8.19063 10.625 7.5 10.625Z"
            fill="#3FC4A4"
          />
          <path
            d="M18.75 10.625H13.75V9.375C13.75 6.81375 15.1175 4.2575 17.5 3.39875V0.625C13.6325 1.68 11.25 5.4125 11.25 9.375V11.875V18.125C11.25 18.8156 11.8094 19.375 12.5 19.375H18.75C19.4406 19.375 20 18.8156 20 18.125V11.875C20 11.185 19.4406 10.625 18.75 10.625Z"
            fill="#3FC4A4"
          />
        </svg>
        <p className="text-base font-normal leading-[26px] text-gray-800">
          {card.quote}
        </p>
      </div>
      <div className="flex flex-row gap-[10px] sm:gap-5">
        <div className="mt-[17px] h-[3px] w-[30px] bg-green-300 sm:w-[50px]"></div>
        <div className="flex flex-col gap-0.5">
          <h5 className="text-lg font-medium leading-[28px] text-gray-800 sm:text-[22px] sm:leading-[32px]">
            {card.name}
          </h5>
          <p className="text-base font-normal leading-[22px] text-gray-400 sm:text-sm">
            {card.position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
