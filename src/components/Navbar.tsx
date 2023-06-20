import React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isSaleHovered, setIsSaleHovered] = useState(false);
  const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);
  return (
    <React.Fragment>
      <div
        id="nav"
        className="flex justify-center font-montserrat items-center mt-10 border-black border-t border-b relative"
      >
        <div className="relative">
          <div
            className="group"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
          >
            <p
              className={`text-black text-md px-2 py-3 w-60 text-center font-regular
              ${isHomeHovered ? "text-blue-500" : "text-black"}`}
              style={{ letterSpacing: "-0.8px" }}
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
                  <Link to="/responsibility">
                    <p
                      className="py-2 px-4 text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                      style={{ letterSpacing: "-0.2px" }}
                    >
                      OUR RESPONSIBILITY
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <p
          className="text-black text-md px-2 py-3 w-40 text-center font-regular "
          style={{ letterSpacing: "-0.8px" }}
        >
          SALE 大売り出し
        </p>

        <div className="relative">
          <div
            className="group"
            onMouseEnter={() => setIsSaleHovered(true)}
            onMouseLeave={() => setIsSaleHovered(false)}
          >
            <p
              className={`text-black text-md px-2 py-3 w-60 text-center font-regular 
              ${isSaleHovered ? "text-blue-500" : "text-black"}`}
              style={{ letterSpacing: "-0.8px" }}
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
                    className="py-2 pb-0 px-4  text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    SALE
                  </p>
                  <p
                    className="py-1 px-4 text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    ACCESSORIES
                  </p>
                  <p
                    className=" py-1 px-4 text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    T-SHIRTS
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <div
            className="group"
            onMouseEnter={() => setIsCollectionsHovered(true)}
            onMouseLeave={() => setIsCollectionsHovered(false)}
          >
            <p
              className={`text-black text-md px-2 py-3 w-60 text-center font-regular
              ${isCollectionsHovered ? "text-blue-500" : "text-black"}`}
              style={{ letterSpacing: "-0.8px" }}
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
                    className="py-2 pb-0 px-4  text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    BASICS
                  </p>
                  <p
                    className="py-1 px-4 text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    MELT
                  </p>
                  <p
                    className=" py-1 px-4 text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    MISCHIEF
                  </p>
                  <p
                    className=" py-1 px-4 text-black text-md tracking-widest font-regular hover:text-white cursor-pointer"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    KNITS
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
