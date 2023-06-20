import React, { useState } from "react";
import pinkcap from "../images/cap_black_pink.webp";
import corduroycap from "../images/corduroy_cap.webp";
import whitesocks from "../images/white_socks.webp";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../store/productSlice";
import {
  CorduroyCapDetails,
  PinkCapDetails,
  TsukiSocksDetails,
} from "./Links/ImageLinks";
import { useDispatch } from "react-redux";
import ViewModal from "./Card/ViewModal";

const Accessories = () => {
  const dispatch = useDispatch();

  const [isItem1Hovered, setIsItem1Hovered] = useState(false);
  const [isItem2Hovered, setIsItem2Hovered] = useState(false);
  const [isItem3Hovered, setIsItem3Hovered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModalIndex(null);
  };

  const handlePreviousModal = () => {
    if (selectedModalIndex !== null) {
      if (selectedModalIndex === 0) {
        setSelectedModalIndex(2);
      } else {
        setSelectedModalIndex(selectedModalIndex - 1);
      }
    }
  };

  const handleNextModal = () => {
    if (selectedModalIndex !== null) {
      if (selectedModalIndex === 2) {
        setSelectedModalIndex(0);
      } else {
        setSelectedModalIndex(selectedModalIndex + 1);
      }
    }
  };

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
          onClick={() => {
            openModal(0);
          }}
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
              onClick={() => {
                setIsModalOpen(true);
                dispatch(setSelectedProduct(PinkCapDetails));
              }}
            >
              QUICK VIEW
            </div>
          )}
        </div>

        <div
          className="border-r border-black relative flex items-center"
          onMouseEnter={() => setIsItem2Hovered(true)}
          onMouseLeave={() => setIsItem2Hovered(false)}
          onClick={() => {
            openModal(1);
          }}
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
              onClick={() => {
                setIsModalOpen(true);
                dispatch(setSelectedProduct(CorduroyCapDetails));
              }}
            >
              QUICK VIEW
            </div>
          )}
        </div>

        <div
          className="border-r border-black relative flex items-center"
          onMouseEnter={() => setIsItem3Hovered(true)}
          onMouseLeave={() => setIsItem3Hovered(false)}
          onClick={() => {
            openModal(2);
          }}
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
              onClick={() => {
                setIsModalOpen(true);
                dispatch(setSelectedProduct(TsukiSocksDetails));
              }}
            >
              QUICK VIEW
            </div>
          )}
        </div>
      </div>
      <div
        id="accessories-info"
        className="w-full grid grid-cols-3 border-b border-black mb-6"
      >
        <div className="border-r border-black relative flex flex-col items-center justify-center">
          <Link
            to={`/viewpage/${PinkCapDetails.id}`}
            onClick={() => dispatch(setSelectedProduct(PinkCapDetails))}
          >
            <p className="text-black text-sm px-2 pb-1 pt-5 text-center font-montserrat">
              {PinkCapDetails.title}
            </p>
            <p
              className="text-black text-sm px-2 pb-4 text-center font-montserrat"
              style={{ letterSpacing: "-0.2px" }}
            >
              {PinkCapDetails.productStatus}
            </p>
          </Link>
        </div>

        <div className="border-r border-black relative flex flex-col items-center justify-center">
          <Link
            to={`/viewpage/${CorduroyCapDetails.id}`}
            onClick={() => dispatch(setSelectedProduct(CorduroyCapDetails))}
          >
            <p className="text-black text-sm px-2 pb-1 pt-5 text-center font-montserrat">
              {CorduroyCapDetails.title}
            </p>
            <p
              className="text-black text-sm px-2 pb-4 text-center font-montserrat"
              style={{ letterSpacing: "-0.2px" }}
            >
              {CorduroyCapDetails.productStatus}
            </p>
          </Link>
        </div>
        <div className="border-r border-black relative flex flex-col items-center justify-center">
          <Link
            to={`/viewpage/${TsukiSocksDetails.id}`}
            onClick={() => dispatch(setSelectedProduct(TsukiSocksDetails))}
          >
            <p className="text-black text-sm pb-1 pt-5 text-center font-montserrat">
              {TsukiSocksDetails.title}
            </p>
            <p
              className="text-black text-sm px-2 pb-4 text-center font-montserrat"
              style={{ letterSpacing: "-0.2px" }}
            >
              {TsukiSocksDetails.productStatus}
            </p>
          </Link>
        </div>
      </div>
      {selectedModalIndex !== null && (
        <ViewModal
          onClose={closeModal}
          onPrevious={handlePreviousModal}
          onNext={handleNextModal}
          selectedProduct={
            selectedModalIndex === 0
              ? PinkCapDetails
              : selectedModalIndex === 1
              ? CorduroyCapDetails
              : TsukiSocksDetails
          }
        />
      )}
    </React.Fragment>
  );
};

export default Accessories;
