import React, { useState } from "react";
import { BedIcon, DollarSignIcon, HouseIcon, MapPinIcon } from "@/components/icons";
import Filter from "./Filter";

const locations = [
  { label: "Azure", value: "azure" },
  { label: "New Caire", value: "new-caire" }
]

const bedrooms = [
  { label: "Studio", value: "studio" },
  { label: "1 Bedroom", value: "1" },
  { label: "2 Bedrooms", value: "2" },
  { label: "3+ Bedrooms", value: "3+" }
]

const types = [
  { label: "Apartment", value: "apartment" },
  { label: "Villa", value: "villa" },
  { label: "Twinhouse", value: "twinhouse" },
  { label: "Loft", value: "loft" },
  { label: "Townhouse", value: "townhouse" }
]

const priceRanges = [
  { label: "Under $1M", value: "0:1" },
  { label: "$1M - $3M", value: "1:3" },
  { label: "$3M - $7M", value: "3:7" },
  { label: "$7M+", value: "7:100" }
]

interface filters {
  bedrooms?: string,
  location?: string,
  priceRange?: string,
  type?: string
}

export default function ApartmentsFilters() {
  const [filters, setFilters] = useState<filters>({})
  
  return (
  <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between gap-4">
    <div className="relative flex-1">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-50 h-5 text-muted-foreground text-gray-700">E.Z. Apartments</div>
      <div className="pl-10 w-full rounded-md" />
    </div>
    <div className="flex items-center gap-4">
      <Filter label="Bedrooms" dits={bedrooms} placeholder="Bedrooms" icon={<BedIcon className="w-5 h-5" />} onChange={(value => console.log(value))} />

      <Filter placeholder="Location" dits={locations} icon={<MapPinIcon className="w-5 h-5" />} />
      <Filter placeholder="Price Range" dits={priceRanges} icon={<DollarSignIcon className="w-5 h-5" />} />

      <Filter dits={types} placeholder="Type" icon={<HouseIcon className="w-5 h-5" />} />
    </div>
  </header>)
}