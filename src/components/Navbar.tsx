import React from "react";
import { useState } from "react";
import cover from "../images/cover.webp";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isSaleHovered, setIsSaleHovered] = useState(false);
  const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);
  const [isShopNowHovered, setIsShopNowHovered] = useState(false);
  return (
    <React.Fragment>
      <div
        id="nav"
        className="flex justify-center font-montserrat items-center mt-10 border-black border-t border-b relative"
      >
        <div className="relative">
          <p
            className={`text-black text-md px-2 py-3 w-60 text-center font-regular
            ${isHomeHovered ? "text-blue-500" : "text-black"}`}
            style={{ letterSpacing: "-0.8px" }}
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
          >
            HOME ホームページ
            <ChevronRightIcon
              className={`h-4 w-4 inline-block ml-1 ${
                isHomeHovered
                  ? "text-blue-500 transform rotate-90"
                  : "text-black"
              } transition-transform duration-300`}
            />
          </p>
          {isHomeHovered && (
            <div className="absolute w-full text-center z-20">
              <div className="bg-[#F4E0EA] border border-black border-t-0 pb-3">
                <p
                  className="py-2 px-4 text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  OUR RESPONSIBILITY
                </p>
              </div>
            </div>
          )}
        </div>

        <p
          className="text-black text-md px-2 py-3 w-40 text-center font-regular "
          style={{ letterSpacing: "-0.8px" }}
        >
          SALE 大売り出し
        </p>

        <div className="relative">
          <p
            className={`text-black text-md px-2 py-3 w-60 text-center font-regular 
            ${isSaleHovered ? "text-blue-500" : "text-black"}`}
            style={{ letterSpacing: "-0.8px" }}
            onMouseEnter={() => setIsSaleHovered(true)}
            onMouseLeave={() => setIsSaleHovered(false)}
          >
            SHOP ALL すべての商品
            <ChevronRightIcon
              className={`h-4 w-4 inline-block ml-1 ${
                isSaleHovered
                  ? "text-blue-500 transform rotate-90"
                  : "text-black"
              } transition-transform duration-300`}
            />
          </p>
          {isSaleHovered && (
            <div className="absolute w-50 text-left z-20">
              <div className="bg-[#F4E0EA] border border-black border-t-0 pb-3 pl-4">
                <p
                  className="py-2 pb-0 px-4  text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  SALE
                </p>
                <p
                  className="py-1 px-4 text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  ACCESSORIES
                </p>
                <p
                  className=" py-1 px-4 text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  T-SHIRTS
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <p
            className={`text-black text-md px-2 py-3 w-60 text-center font-regular
            ${isCollectionsHovered ? "text-blue-500" : "text-black"}`}
            style={{ letterSpacing: "-0.8px" }}
            onMouseEnter={() => setIsCollectionsHovered(true)}
            onMouseLeave={() => setIsCollectionsHovered(false)}
          >
            COLLECTIONS コレクション
            <ChevronRightIcon
              className={`h-4 w-4 inline-block ml-1 ${
                isCollectionsHovered
                  ? "text-blue-500 transform rotate-90"
                  : "text-black"
              } transition-transform duration-300`}
            />
          </p>
          {isCollectionsHovered && (
            <div className="absolute w-40 text-left z-20">
              <div className="bg-[#F4E0EA] border border-black border-t-0 pb-3 pl-4">
                <p
                  className="py-2 pb-0 px-4  text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  BASICS
                </p>
                <p
                  className="py-1 px-4 text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  MELT
                </p>
                <p
                  className=" py-1 px-4 text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  MISCHIEF
                </p>
                <p
                  className=" py-1 px-4 text-black text-md tracking-widest font-regular "
                  style={{ letterSpacing: "-0.2px" }}
                >
                  KNITS
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div id="bg-pic" className="flex justify-center items-center relative">
        <img
          src={cover}
          alt="Image A"
          style={{ width: "100%", height: "950px" }}
        />
        <button
          className={`absolute bottom-32 bg-black py-2 px-4 rounded-sm font-montserrat text-sm w-40  
          ${isShopNowHovered ? "text-white" : "text-black"}
          `}
          onMouseEnter={() => setIsShopNowHovered(true)}
          onMouseLeave={() => setIsShopNowHovered(false)}
        >
          SHOP NOW
        </button>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
