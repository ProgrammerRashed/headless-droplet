import SectionHeading from "@/components/sectionHeader/SectionHeading";
import DownloadBooksCard from "./DownloadBooksCard";

function DownloadBooksSection({ sectionHeadig, books }) {
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="text-center">
            {sectionHeadig}
          </SectionHeading>
        </div>
        <div className="mt-[30px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:gap-[30px]">
          {books.map((book) => (
            <DownloadBooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DownloadBooksSection;
