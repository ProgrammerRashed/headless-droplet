import Image from "next/image";

function OurDirectorMessageCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center rounded-[8px] bg-white px-10 py-[60px]"
    >
      <svg
        className="mb-4"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 15H28V17C28 21.098 25.812 25.188 22 26.562V31C28.188 29.312 32 23.34 32 17V13V3C32 1.895 31.105 1 30 1H20C18.895 1 18 1.895 18 3L18 13C18 14.104 18.895 15 20 15Z"
          fill="#3FC4A4"
        />
        <path
          d="M2 15H10V17C10 21.098 7.812 25.188 4 26.562V31C10.188 29.312 14 23.34 14 17V13L14 3C14 1.895 13.105 1 12 1H2C0.895 1 0 1.895 0 3L0 13C0 14.104 0.895 15 2 15Z"
          fill="#3FC4A4"
        />
      </svg>
      <h3 className="flex-grow text-center text-[22px] font-medium leading-[32px] text-gray-800">
        {card.message}
      </h3>
      <div className="mt-[60px] flex w-full flex-col items-center justify-center border-t border-gray-50 pt-5">
        <Image
          src="/our-culture-page/director-1.png"
          width={60}
          height={60}
          alt={card.name}
          className="mb-2 aspect-square rounded-full"
        />
        <h4 className="mb-[6px] text-center text-base font-medium leading-[26px] text-gray-800">
          {card.name}
        </h4>
        <p className="text-center text-xs leading-[18px] text-gray-400">
          {card.position}
        </p>
      </div>
    </div>
  );
}

export default OurDirectorMessageCard;
