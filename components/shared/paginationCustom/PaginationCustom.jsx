"use client"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationCustom({ currentPage, totalPages, setCurrentPage }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Pagination
      data-aos="fade-up"
      className="mt-6 gap-[10px] font-poppins font-normal md:mt-[54px]"
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
          
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1} 
          />
        </PaginationItem>
        
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink 
         
              onClick={() => handlePageChange(index + 1)} 
              className={currentPage === index + 1 ? "font-bold" : ""}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext 
    
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages} 
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationCustom;
