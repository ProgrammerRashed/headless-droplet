import { cn } from "@/lib/utils";
import Image from "next/image";

function BlogsCard({ blog, imageHeightClassName }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex cursor-pointer flex-col bg-transparent"
    >
      <div className="mb-5 w-full overflow-hidden rounded-[8px] shadow-md group-hover:shadow-lg">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={410}
          height={240}
          className={cn(
            "h-[240px] w-full rounded-[8px] object-cover transition-all duration-300 group-hover:scale-105",
            imageHeightClassName,
          )}
        />
      </div>
      <div className="mb-[10px] flex flex-row items-center justify-normal gap-[10px] text-sm font-normal leading-[22px]">
        <p className="line-clamp-1 text-green-900">{blog.category}</p>
        <div className="h-[5px] w-[5px] rounded-full bg-gray-50"></div>
        <p className="text-gray-400">{blog.publishedDate}</p>
      </div>
      <h4 className="text-dark line-clamp-2 text-lg font-medium leading-[28px] transition-all duration-300 hover:underline sm:text-[22px] sm:leading-[32px]">
        {blog.title}
      </h4>
    </div>
  );
}

export default BlogsCard;
