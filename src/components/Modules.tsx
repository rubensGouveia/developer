"use client";
import React from "react";

import { ModulesProps } from "@/types/blocks";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export const Modules: React.FC<ModulesProps> = ({ title, description, cards }) => {
  return (
    <section className="bg-black py-10 pt-0 text-white md:py-20">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-6 lg:px-16">
        <Carousel opts={{loop:true}} className="w-full">
          <div className="flex items-center justify-between">
            <div className="mb-12 text-left">
              <h2 className="text-4xl ">{title}</h2>
              <p className="mt-4 max-w-xl text-lg">{description}</p>
            </div>
            <div>
              <CarouselPrevious className="relative left-auto hidden size-12 translate-x-0 translate-y-0 bg-foreground text-background md:inline-flex" />
              <CarouselNext className="relative right-auto ml-2 hidden size-12 translate-x-0 translate-y-0 bg-foreground text-background md:inline-flex" />
            </div>
          </div>

          <CarouselContent className="-ml-8 md:-ml-4">
            {cards?.map((card) => (
              <CarouselItem key={card.id} className="basis-[90%] pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-52 border-0 bg-card-foreground md:h-44">
                  <CardContent className="flex  items-center justify-center p-6">
                    <div>
                      <h3 className="mb-2  text-xl text-foreground">{card.title}</h3>
                      <p className="mb-4 text-base text-muted">{card.description}</p>
                      <Link href={card?.button?.url} className="text-base text-blue-400 hover:opacity-90">
                        {card?.button?.text}  <Image src='ic-arrow-up.svg' className="inline"  width={24} height={24} alt="icone de seta apontando para diagonal superior direita"/>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
