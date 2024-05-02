"use client";
import RoomCarousel from "@/components/roomcards_components/carousel";
import FilterAndSort from "@/components/roomcards_components/filterandsort";
import HorizontalScrollBar from "@/components/roomcards_components/horizontalscrollbar";
import SideBar from "@/components/roomcards_components/sidebar";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

const RoomCards = () => {
  const [openModel, setOpenModel] = useState(true);

  return (
    <div className="w-full h-full">
      <div className="h-[10%] w-full px-4 overflow-x-auto md:hidden">
        <HorizontalScrollBar />
      </div>
      <div className="md:flex w-full h-[10%] items-center justify-between px-2">
        <div className="h-full hidden md:flex cursor-pointer justify-center items-center">
          <div
            className="bg-gray-300 rounded-sm px-2 py-1"
            onClick={() => setOpenModel(!openModel)}
          >
            <AlignJustify />
          </div>
        </div>
        <div className="h-full hidden md:flex w-[50%] lg:w-[60%]">
          <RoomCarousel />
        </div>
        <div className="h-full px-2">
          <FilterAndSort />
        </div>
      </div>
      <div
        className={`hidden md:flex h-[90%] ${
          openModel ? "w-[25%] lg:w-[17%]" : "w-[7%] lg:w-[4%]"
        } bg-gray-300 transition-all duration-500`}
      >
        <SideBar model={openModel} />
      </div>
    </div>
  );
};

export default RoomCards;
