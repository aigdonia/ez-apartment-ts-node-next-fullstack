"use client";
import { BedIcon, BathIcon, RulerIcon, OptionIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { fetchApartment } from "@/services/apartment.service";
import { useParams } from "next/navigation";

const useApartmentDetails = (apartmentId: string) => {
  return useQuery({
    queryKey: ["apartmentDetails", apartmentId],
    queryFn: () => fetchApartment(apartmentId)
  });
}

export default function ApartmentPage() {
  const apartmentId = useParams().id as string;

  const { data: apartment } = useApartmentDetails(apartmentId);
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Button size="sm" className="w-full sm:w-auto" variant="ghost" asChild>
              <Link href="/">
                <ArrowLeftIcon className="w-5 h-7 text-primary" />
              </Link>
            </Button>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {apartment?.title}
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <BedIcon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{apartment?.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <BathIcon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{apartment?.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <RulerIcon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{apartment?.spaceArea} sq meter</span>
            </div>
            <div className="flex items-center gap-2">
              <OptionIcon className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">0.5 Acres</span>
            </div>
          </div>
          {apartment?.description && 
          <div className="prose text-muted-foreground">
            <p>
              {apartment?.description}
            </p>
          </div>}
          <Button size="lg" className="w-full sm:w-auto">
            Schedule a Viewing
          </Button>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 7 }, (_, index) => index + 1).map((image, index) => (
              <Image
                key={index}
                width={400}
                height={400}
                src={`/images/apt_00${image}.webp`}
                alt="Property Image"
                className="rounded-lg object-cover aspect-[3/2]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}