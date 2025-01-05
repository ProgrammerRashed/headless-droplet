import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import BlogsCard from "@/components/shared/blogsAndInsightsSection/BlogsCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";

function DiscoverMoreBlogsSection({ data }) {
  const { sectionTitle, blogs } = data;
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <SectionHeading>{sectionTitle}</SectionHeading>
        <div className="my-5 md:my-10">
          <TabItems
            items={[
              { id: crypto.randomUUID(), country: "Blogs & Articles" },
              { id: crypto.randomUUID(), country: "Press Release" },
              { id: crypto.randomUUID(), country: "Media & News" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 0.5xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogsCard key={blog.id} blog={blog} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </section>
  );
}

export default DiscoverMoreBlogsSection;
