import Image from "next/image";

function BlogsCard() {
  return (
    <div className="group flex cursor-pointer flex-col bg-transparent">
      <div className="mb-5 w-full overflow-hidden rounded-[8px] shadow-md group-hover:shadow-lg">
        <Image
          src="/blogs-and-insights/1.png"
          alt="Blogs thumbnail"
          width={410}
          height={240}
          className="h-[240px] w-full rounded-[8px] object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-[10px] flex flex-row items-center justify-normal gap-[10px] text-sm font-normal leading-[22px]">
        <p className="text-green-dark">Insurance</p>
        <div className="h-[5px] w-[5px] rounded-full bg-gray"></div>
        <p className="gray-light">03 November 2024</p>
      </div>
      <h4 className="line-clamp-2 text-lg font-medium leading-[28px] text-dark sm:text-[22px] sm:leading-[32px]">
        The Future of Food: Agribusiness and Agroecology
      </h4>
    </div>
  );
}

export default BlogsCard;
