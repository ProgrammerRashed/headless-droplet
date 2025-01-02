import SectionHeading from "@/components/sectionHeader/SectionHeading";
import PublicationCard from "./PublicationCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";
import FilterAndSearchForm from "./FilterAndSearchForm";

function PopularPublicationsSection({ data }) {
  const { sectionTitle, popularCards } = data;
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
        <FilterAndSearchForm />
        <div className="mt-[30px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-[30px] xl:grid-cols-4 xl:gap-x-[30px] xl:gap-y-[60px]">
          {popularCards.map((popularCard) => (
            <PublicationCard key={popularCard.id} card={popularCard} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </section>
  );
}

export default PopularPublicationsSection;
