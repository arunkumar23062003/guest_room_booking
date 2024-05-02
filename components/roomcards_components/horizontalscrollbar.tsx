import { CarouselData } from "@/jsondata/carousel";
import Image from "next/image";

const HorizontalScrollBar = () => {
  return (
    <div className="flex flex-row w-full h-full gap-4">
      {CarouselData.map((data, index) => {
        return (
          <div
            key={index}
            className="w-full h-full flex flex-col items-center gap-[5px] justify-center"
          >
            <div className="w-10 h-[50%]">
              <Image
                src={data.img}
                alt={data.Label}
                className="w-full h-full"
              />
            </div>
            <p className="text-[10px] whitespace-nowrap">{data.Label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScrollBar;
