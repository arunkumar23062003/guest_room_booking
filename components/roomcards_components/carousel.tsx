import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselData } from "@/jsondata/carousel";
import Image from "next/image";

const RoomCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full w-full"
    >
      <CarouselContent className="flex flex-row ">
        {CarouselData.map((data, index) => (
          <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/6">
            <div className="w-full h-full flex flex-col items-center gap-[5px] justify-center">
              <div className="w-10 h-[50%]">
                <Image
                  src={data.img}
                  alt={data.Label}
                  className="w-full h-full"
                />
              </div>
              <p className="text-[10px] whitespace-nowrap">{data.Label}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RoomCarousel;
