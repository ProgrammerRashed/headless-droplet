"use client";
import { useState, useEffect } from "react";
import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import BlogsCard from "@/components/shared/blogsAndInsightsSection/BlogsCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";

function DiscoverMoreBlogsSection({ data, blogs }) {
  const [itemsCategory, setItemsCategory] = useState("all-blogs");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of blogs per page

  const { section_heading } = data.data;

  // Function to filter blogs based on selected category
  const filterPostsByCategory = (posts, categorySlug) => {
    if (categorySlug === "all-blogs") {
      return posts; // Show all blogs when "all-blogs" is selected
    }
    return posts.filter(post =>
      post.categories.edges.some(cat => cat.node.slug === categorySlug)
    );
  };

  // Update filtered blogs whenever itemsCategory changes
  useEffect(() => {
    setFilteredBlogs(filterPostsByCategory(blogs, itemsCategory));
    setCurrentPage(1); // Reset to first page on category change
  }, [itemsCategory, blogs]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <SectionHeading>{section_heading}</SectionHeading>
        <div className="my-5 md:my-10">
          <TabItems
            setItemsCategory={setItemsCategory}
            items={[
              { slug: "all-blogs", country: "Blogs & Articles" },
              { slug: "press-release", country: "Press Release" },
              { slug: "news", country: "Media & News" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 0.5xl:grid-cols-3">
          {paginatedBlogs.length > 0 ? (
            paginatedBlogs.map((blog, index) => (
              <BlogsCard key={index} blog={blog} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No blogs found for this category.
            </p>
          )}
        </div>

        {filteredBlogs.length > itemsPerPage && (
          <PaginationCustom 
            currentPage={currentPage} 
            totalPages={totalPages} 
            setCurrentPage={setCurrentPage} 
          />
        )}
      </div>
    </section>
  );
}

export default DiscoverMoreBlogsSection;
