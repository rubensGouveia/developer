'use client'
import { BrandsProps } from "@/types/blocks";
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

export const Brands: React.FC<BrandsProps> = ({ brands }) => {
  return (
    <section className="bg-black py-10">
      <div className="mx-auto flex max-w-full gap-4">
        <Carousel opts={{loop:true}} plugins={[
        Autoplay({
          delay: 2000,
          
        }),
      ]}className="w-full ">
          <CarouselContent className="-ml-1">
            {brands?.map((brand) => (
              <CarouselItem key={brand.id} className="flex basis-1/6 items-center justify-center pl-1 lg:basis-1/12 ">
                <div className="relative h-16 w-24">
                <Image src={brand.url} alt={brand.title} fill />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
