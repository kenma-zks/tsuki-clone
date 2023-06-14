import React, { useState } from "react";
import pinkcap from "../images/cap_black_pink.webp";
import corduroycap from "../images/corduroy_cap.webp";
import whitesocks from "../images/white_socks.webp";
import CapQuickViewModal from "./Card/CapQuickViewModal";
import CorduroyQuickViewModal from "./Card/CorduroyQuickViewModal";
import SocksQuickViewModal from "./Card/SocksQuickViewModal";

const Accessories = () => {
  const [isItem1Hovered, setIsItem1Hovered] = useState(false);
  const [isItem2Hovered, setIsItem2Hovered] = useState(false);
  const [isItem3Hovered, setIsItem3Hovered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  return (
    <React.Fragment>
      <div
        id="accessories"
        className="flex justify-center items-center mt-5 mb-5"
      >
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-black text-3xl px-2 py-3 text-center font-regular"
            style={{ letterSpacing: "-0.2px" }}
          >
            Shop Accessories
          </p>
        </div>
      </div>
      <div
        id="accessories-items"
        className="w-full grid grid-cols-3 border-t border-b  border-black"
      >
        <div
          className="border-r border-black relative flex items-center "
          onMouseEnter={() => setIsItem1Hovered(true)}
          onMouseLeave={() => setIsItem1Hovered(false)}
        >
          <img src={pinkcap} alt="pinkcap" />
          <div
            className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
            style={{ letterSpacing: "2px" }}
          >
            SALE
          </div>
          {isItem1Hovered && (
            <div
              className="absolute bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest"
              style={{
                bottom: "0",
                left: "0",
                width: "100%",
                textAlign: "center",
                letterSpacing: "2px",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              QUICK VIEW
            </div>
          )}
          {isModalOpen && (
            <CapQuickViewModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>

        <div
          className="border-r border-black relative flex items-center"
          onMouseEnter={() => setIsItem2Hovered(true)}
          onMouseLeave={() => setIsItem2Hovered(false)}
        >
          <img src={corduroycap} alt="pinkcap" />
          <div
            className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
            style={{ letterSpacing: "2px" }}
          >
            SALE
          </div>
          {isItem2Hovered && (
            <div
              className="absolute bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest"
              style={{
                bottom: "0",
                left: "0",
                width: "100%",
                textAlign: "center",
                letterSpacing: "2px",
              }}
              onClick={() => setIsModalOpen2(true)}
            >
              QUICK VIEW
            </div>
          )}
          {isModalOpen2 && (
            <CorduroyQuickViewModal onClose={() => setIsModalOpen2(false)} />
          )}
        </div>

        <div
          className="border-r border-black relative flex items-center"
          onMouseEnter={() => setIsItem3Hovered(true)}
          onMouseLeave={() => setIsItem3Hovered(false)}
        >
          <img src={whitesocks} alt="pinkcap" />
          <div
            className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
            style={{ letterSpacing: "2px" }}
          >
            SALE
          </div>
          {isItem3Hovered && (
            <div
              className="absolute bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest"
              style={{
                bottom: "0",
                left: "0",
                width: "100%",
                textAlign: "center",
                letterSpacing: "2px",
              }}
              onClick={() => setIsModalOpen3(true)}
            >
              QUICK VIEW
            </div>
          )}
          {isModalOpen3 && (
            <SocksQuickViewModal onClose={() => setIsModalOpen3(false)} />
          )}
        </div>
      </div>
      <div
        id="accessories-info"
        className="w-full grid grid-cols-3 border-b border-black mb-6"
      >
        <div className="border-r border-black relative flex flex-col items-center justify-center">
          <p className="text-black text-sm px-2 pb-1 pt-5 text-center font-montserrat">
            Tsuki Logo Embroidered Cap
          </p>
          <p
            className="text-black text-sm px-2 pb-4 text-center font-montserrat"
            style={{ letterSpacing: "-0.2px" }}
          >
            Sold Out
          </p>
        </div>

        <div className="border-r border-black relative flex flex-col items-center justify-center">
          <p className="text-black text-sm px-2 pb-1 pt-5 text-center font-montserrat">
            Conduroy Tsuki Cap
          </p>
          <p
            className="text-black text-sm px-2 pb-4 text-center font-montserrat"
            style={{ letterSpacing: "-0.2px" }}
          >
            Sold Out
          </p>
        </div>
        <div className="border-r border-black relative flex flex-col items-center justify-center">
          <p className="text-black text-sm pb-1 pt-5 text-center font-montserrat">
            Tsuki Socks
          </p>
          <p
            className="text-black text-sm px-2 pb-4 text-center font-montserrat"
            style={{ letterSpacing: "-0.2px" }}
          >
            Sold Out
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accessories;
