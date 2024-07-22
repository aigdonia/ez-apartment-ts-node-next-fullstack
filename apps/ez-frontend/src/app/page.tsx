"use client"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import ApartmentsFilters from "./components/ApartmentsFilters";
import ApartmentListingBox from "./components/ApartmentListingBox";
import { useQuery } from "@tanstack/react-query";

import { fetchApartments } from "@/services/apartment.service";

function useApartments() {
  return useQuery({
    queryKey: ['apartments'],
    queryFn: fetchApartments
  })
}

export default function HomePage() {
  const { data, isLoading } = useApartments()
  const apartments = data?.properties || [];

  return (
    <div className="flex flex-col w-full">
      <ApartmentsFilters />

      {isLoading ? <div className="min-h-[60vh] flex justify-center items-center">
        Loading...
      </div> :
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 max-h-[80vh] overflow-y-auto">
            {apartments.map((apartment: any) => (<ApartmentListingBox key={apartment.id} apartment={apartment} />))}
          </div>

          {/* TODO: Add pagination */}
          <div className="flex justify-center mt-6 text-gray-300">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      }
      
    </div>
  )
}