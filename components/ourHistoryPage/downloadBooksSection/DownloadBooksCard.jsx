import Image from "next/image";
import Link from "next/link";

function DownloadBooksCard({ book }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-row gap-[15px] overflow-hidden rounded-[8px] border border-gray-50 bg-white shadow-sm md:gap-[30px]"
    >
      <Image
        src={book.image || "/thumbnail.png"}
        width={200}
        height={200}
        alt={book.title}
        className="aspect-[100/120] w-[100px] rounded-r-[8px] object-cover sm:aspect-square lg:w-[200px]"
      />
      <div className="flex w-full flex-col justify-between py-[10px] pr-[10px] lg:py-[30px] lg:pr-[30px]">
        <h6 className="text-sm font-normal capitalize leading-[24px] text-gray-800 lg:text-2xl lg:font-semibold lg:leading-[36px]">
          {book.title}
        </h6>
        <Link
          download={book.downloadLink || book.download_file}
          target="_blank"
          className="border- flex w-full flex-row items-center gap-1 border-t border-gray-50 pt-1 text-sm font-medium leading-[22px] text-gray-800 transition-all duration-300 hover:text-green-900 md:gap-[10px] lg:pt-3 lg:text-base lg:font-semibold lg:leading-[24px]"
          href={book.downloadLink || book.download_file}
        >
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

          <span>Download</span>
        </Link>
      </div>
    </div>
  );
}

export default DownloadBooksCard;
