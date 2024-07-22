"use client"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import ApartmentsFilters from "./components/ApartmentsFilters";
import ApartmentListingBox from "./components/ApartmentListingBox";
import { useQuery } from "@tanstack/react-query";

// const apartments = [
//   {
//     id: 1,
//     imageUrl: "/images/apt_001.webp",
//     title: "Cozy Apartment",
//     bedrooms: 2,
//     price: "1,800",
//     location: "New York",
//     amenities: ["Dishwasher", "Washer/Dryer", "Balcony", "Gym", "Pool"],
//   },
//   {
//     id: 2,
//     imageUrl: "/images/apt_002.webp",
//     title: "Luxury Penthouse",
//     bedrooms: 3,
//     price: "3,500",
//     location: "Los Angeles",
//     amenities: ["Dishwasher", "Washer/Dryer", "Balcony", "Gym", "Pool"],
//   },
//   {
//     id: 3,
//     imageUrl: "/images/apt_003.webp",
//     title: "Studio Apartment",
//     bedrooms: 2,
//     price: "1,200",
//     location: "Chicago",
//     amenities: ["Dishwasher", "Washer/Dryer", "Balcony", "Gym", "Pool"],
//   },
//   {
//     id: 4,
//     imageUrl: "/images/apt_004.webp",
//     title: "Spacious Loft",
//     bedrooms: 1,
//     price: "2,200",
//     location: "San Francisco",
//     amenities: ["Dishwasher", "Washer/Dryer", "Balcony", "Gym", "Pool"],
//   },
//   {
//     id: 5,
//     imageUrl: "/images/apt_005.webp",
//     title: "Modern Apartment",
//     bedrooms: 2,
//     price: "2,500",
//     location: "Miami",
//     amenities: ["Dishwasher", "Washer/Dryer", "Balcony", "Gym", "Pool"],
//   },
//   {
//     id: 6,
//     imageUrl: "/images/apt_006.webp",
//     title: "Charming Cottage",
//     bedrooms: 1,
//     price: "1,500",
//     location: "New York",
//     amenities: ["Dishwasher", "Washer/Dryer", "Balcony", "Gym", "Pool"],
//   }
// ]

const fetchApartments = async () => {
  const response = await fetch('http://localhost:3296/properties');
  const data = await response.json();
  return data;
};

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
            {apartments.map((apartment) => (<ApartmentListingBox key={apartment.id} apartment={apartment} />))}
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