import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Rosario } from "next/font/google";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeSharp } from "react-icons/io5";
import { NavbarSheet } from "./navbarsheet";
import { MyAccountButton } from "./navbarpopover";
import Image from "next/image";
import logo from "../../assests/Logo.png";
import { Input } from "../ui/input";

const rosario = Rosario({
  weight: "400",
  subsets: ["latin"],
});

const TopNavBar = () => {
  //mobileView
  const MobileView = () => {
    return (
      <div
        className={`bg-[#003C43] text-white ${rosario.className} px-2 w-full h-full`}
      >
        <div className="flex w-full h-full justify-between items-center ">
          <div className="flex w-full h-full flex-row gap-2 items-center">
            <div className="md:hidden">
              <NavbarSheet />
            </div>
            <div className="hidden md:flex">
              <Image
                alt="logo"
                src={logo}
                width={50}
                height={0}
                style={{ height: "50%" }}
              />
            </div>
            <h1 className="text-xl sm:text-2xl">Stayease</h1>
            <div className="hidden sm:flex h-[70%] w-[50%] max-w-3xl flex justify-center items-center bg-white rounded-xl">
              <div className="text-black w-full h-full flex items-center">
                <div className="border-r border-[#003C43] h-full flex w-[10%] items-center">
                  <FaSearch className="text-xl w-full flex justify-center items-center" />
                </div>
                <Input
                  isRing={false}
                  className="px-2 flex w-full h-full"
                  placeholder="Search here... "
                />
              </div>
            </div>
          </div>
          <div className="flex h-full flex-row gap-2 lg:gap-3 items-center justify-end">
            <FaSearch className="text-xl sm:hidden" />
            <FaShoppingCart className="text-xl sm:text-2xl md:text-3xl" />
            <MyAccountButton />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <MobileView />
    </div>
  );
};

export default TopNavBar;
