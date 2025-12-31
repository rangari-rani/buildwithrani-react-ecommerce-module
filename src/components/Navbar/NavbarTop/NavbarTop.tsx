import {type FC } from "react";
import RotatingQuote from "./RotatingQuote";
import PromoBanner from "./PromoBanner";
import UserSection from "./UserSection";

const NavbarTop: FC = () => (
  <>
    <div className="px-3 lg:px-16 font-poppins bg-green-100">
      <div className="flex flex-wrap justify-between items-center w-full min-h-12.5">
        <div className="md:flex flex-1"><RotatingQuote /></div>
        <div className="hidden md:flex justify-end flex-1"><PromoBanner /></div>
        <div className="flex justify-end flex-1"><UserSection /></div>
      </div>
    </div>
    <hr className="border-teal-500 border" />
  </>
);
export default NavbarTop;

