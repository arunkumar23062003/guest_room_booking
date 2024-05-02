import { Merriweather } from "next/font/google";
import { BiSolidHomeSmile } from "react-icons/bi";
import { RiStarSmileFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { IoBag } from "react-icons/io5";

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SideBar = ({ model }: { model: boolean }) => {
  const divStyle = `w-full flex flex-row items-center px-2 ${
    model ? "gap-2" : "gap-0"
  }`; 
  const iconStyle = `text-3xl text-[#003C43] cursor-pointer`;
  const h1Style = `overflow-hidden whitespace-nowrap`;
  return (
    <div className={`w-full h-full space-y-3 py-2 ${merriweather.className}`}>
      <div className={divStyle}>
        <div className={iconStyle}>
          <BiSolidHomeSmile />
        </div>
        {model && <h1 className={h1Style}>My Reservation</h1>}
      </div>
      <div className={divStyle}>
        <div className={iconStyle}>
          <IoBag />
        </div>
        {model && <h1 className={h1Style}>My order</h1>}
      </div>
      <div className={divStyle}>
        <div className={iconStyle}>
          <RiStarSmileFill />
        </div>
        {model && <h1 className={h1Style}>Favourites</h1>}
      </div>
      <div className={divStyle}>
        <div className={iconStyle}>
          <WiStars />
        </div>
        {model && <h1 className={h1Style}>Wishlist</h1>}
      </div>
    </div>
  );
};

export default SideBar;
