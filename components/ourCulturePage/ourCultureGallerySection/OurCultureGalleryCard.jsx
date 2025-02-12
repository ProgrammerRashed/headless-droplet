import Image from "next/image";

function OurCultureGalleryCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="group relative col-span-1 row-span-1 overflow-hidden rounded-[8px] [&:nth-child(2)]:0.5xl:col-span-2 [&:nth-child(3)]:sm:col-span-2 [&:nth-child(3)]:0.5xl:col-span-1 [&:nth-child(6)]:0.5xl:col-span-2"
    >
      <Image
        src={card.imageUrl || "/thumbnail.png"}
        height={417}
        width={480}
        alt={card.caption}
        className="block h-full w-full object-cover transition-all duration-300 hover:scale-105 hover:brightness-50"
      />
      <div className="absolute bottom-[10px] left-[10px] z-10 rounded-[40px] bg-gray-800/70 px-4 py-3 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        {card.caption}
      </div>
    </div>
  );
}

export default OurCultureGalleryCard;
