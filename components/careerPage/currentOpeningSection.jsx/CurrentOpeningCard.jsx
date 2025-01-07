import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

function CurrentOpeningCard({ card }) {
  return (
    <div className="flex flex-col rounded-[8px] border-gray-50 bg-white p-5 md:px-[30px] md:py-10 lg:flex-row lg:items-center lg:justify-between lg:rounded-none lg:border-y">
      <div className="flex flex-col">
        <h4 className="mb-[5px] max-w-md text-lg font-medium leading-[28px] text-gray-800 md:mb-[10px] md:text-[22px] md:leading-[32px] lg:max-w-[600px] xl:max-w-[700px]">
          {card.title}
        </h4>
        <div className="mb-[30px] flex flex-col gap-[10px] lg:mb-0 lg:flex-row lg:gap-5">
          <div className="flex flex-row items-center gap-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 8.33203C17.5 14.1654 10 19.1654 10 19.1654C10 19.1654 2.5 14.1654 2.5 8.33203C2.5 6.34291 3.29018 4.43525 4.6967 3.02873C6.10322 1.62221 8.01088 0.832031 10 0.832031C11.9891 0.832031 13.8968 1.62221 15.3033 3.02873C16.7098 4.43525 17.5 6.34291 17.5 8.33203Z"
                stroke="#39B295"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.832C11.3807 10.832 12.5 9.71274 12.5 8.33203C12.5 6.95132 11.3807 5.83203 10 5.83203C8.61929 5.83203 7.5 6.95132 7.5 8.33203C7.5 9.71274 8.61929 10.832 10 10.832Z"
                stroke="#39B295"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base font-normal leading-[26px] text-gray-600">
              {card.location}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z"
                stroke="#39B295"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.332 1.66602V4.99935"
                stroke="#39B295"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66797 1.66602V4.99935"
                stroke="#39B295"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 8.33203H17.5"
                stroke="#39B295"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6.6658" cy="13.3338" r="1.11111" fill="#39B295" />
              <circle cx="10.0017" cy="13.3338" r="1.11111" fill="#39B295" />
              <circle cx="13.3338" cy="13.3338" r="1.11111" fill="#39B295" />
            </svg>
            <p className="text-base font-normal leading-[26px] text-gray-600">
              Deadline: {card.deadline}
            </p>
          </div>
        </div>
      </div>
      <PrimaryButton>{card?.buttonDetails?.title}</PrimaryButton>
    </div>
  );
}

export default CurrentOpeningCard;
