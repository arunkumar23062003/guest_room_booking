import { Button } from "@/components/ui/button";
import { Merriweather } from "next/font/google";
import { BiSolidHomeSmile } from "react-icons/bi";
import { RiStarSmileFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { IoBag } from "react-icons/io5";

import {
  Sheet,
  SheetContent, 
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoReorderThreeSharp } from "react-icons/io5";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function NavbarSheet() {
  const divStyle = `flex flex-row gap-2 items-center`;
  const iconStyle = `text-2xl text-[#003C43]`;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-[#003C43] p-0">
          <IoReorderThreeSharp className="text-2xl sm:text-3xl" />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-16 bg-gray-200">
        <div className={`${merriweather.className} space-y-5`}>
          <div className={divStyle}>
            <BiSolidHomeSmile className={iconStyle} />
            <h1>My Reservation</h1>
          </div>
          <div className={divStyle}>
            <IoBag className={iconStyle}/>
            <h1>My order</h1>
          </div>
          <div className={divStyle}>
            <RiStarSmileFill className={iconStyle}/>
            <h1>Favourites</h1>
          </div>
          <div className={divStyle}>
            <WiStars className={iconStyle}/>
            <h1>Wishlist</h1>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
