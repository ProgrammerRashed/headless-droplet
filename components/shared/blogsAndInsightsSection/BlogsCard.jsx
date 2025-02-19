import { cn } from "@/lib/utils";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

function BlogsCard({ blog }) {
  const featuredImage = blog.featuredImage?.node.mediaItemUrl;
  const imageHeightClassName = blog?.imageHeight || null
  const fromatedDate = formatDate( blog?.customPostDate || blog.date);
  const customCategory = blog?.customCategory?.label || "Category";
  return (
    <div
      data-aos="fade-up"
      className="group flex cursor-pointer flex-col bg-transparent"
    >
      <div className="mb-5 w-full overflow-hidden rounded-[8px] shadow-md group-hover:shadow-lg">
       <Link  href={`/blogs-and-articles/${blog?.slug}`} >
       <Image
          src={featuredImage || "/thumbnail.png"}
          alt={blog.title}
          width={410}
          height={240}
          className={cn(
            "h-[175px] w-full rounded-[8px] object-cover transition-all duration-300 group-hover:scale-105 sm:h-[240px]",
            imageHeightClassName,
          )}
        />
       </Link>
      </div>
      <div className="mb-[10px] flex flex-row items-center justify-normal gap-[10px] text-sm font-normal leading-[22px]">
        <p className="line-clamp-2 text-green-700">{customCategory?.replace("&amp;", "&")}</p>
        <div className="h-[5px] w-[5px] rounded-full bg-gray-50"></div>
        <p className="text-gray-400">{fromatedDate}</p>
      </div>
      <Link  href={`/blogs-and-articles/${blog?.slug}`} >
      
      <h4 className="text-dark line-clamp-2 text-lg font-medium leading-[28px] transition-all duration-300 hover:underline sm:text-[22px] sm:leading-[32px]">
        {blog?.title}
      </h4>
      </Link>
    </div>
  );
}

export default BlogsCard;
