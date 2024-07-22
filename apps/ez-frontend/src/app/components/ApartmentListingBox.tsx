import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BedIcon, DollarSignIcon } from "@/components/icons";
import React from "react";
interface ComponentProps {
  children: React.ReactNode;
};

export default function ApartmentListingBox({ apartment }: { apartment: any }) {
  return (<>
    <div className="bg-background rounded-lg overflow-hidden shadow-sm">
      <Image
        src={apartment.imageUrl || "/images/apt_001.webp"}
        width={400}
        height={300}
        alt="Apartment Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{apartment.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground">
          <BedIcon className="w-5 h-5" />
          <span>{apartment.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <DollarSignIcon className="w-5 h-5" />
          <span>${apartment.price}</span>
        </div>
        <Button variant="outline" className="mt-4 w-full">
          View Details
        </Button>
      </div>
    </div>
  </>)
}