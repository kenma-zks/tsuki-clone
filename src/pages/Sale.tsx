import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { SaleItems } from "../components/Links/SaleItemsLink";
import SaleItemsModal from "../components/Card/SaleItemsModal";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../store/productSlice";
import { Link } from "react-router-dom";

const Sale = () => {
  const dispatch = useDispatch();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(
    null
  );

  const handleItemHover = (itemId: string) => {
    setHoveredItem(itemId);
  };

  const handleModalOpen = (index: number) => {
    setIsModalOpen(true);
    setSelectedModalIndex(index);
  };

  const handleModalClose = () => {
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

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      <Banner />
      <Header />
      <Navbar />
      <div className="w-full mt-24 mb-10">
        <div className="grid grid-cols-3">
          {SaleItems.map((item, index) => (
            <div
              className={`relative flex flex-col items-center justify-center ${
                index >= 7 ? "border-b border-black" : ""
              }`}
              key={item.id}
              onMouseEnter={() => handleItemHover(item.id)}
              onMouseLeave={handleItemLeave}
              onClick={() => handleModalOpen(index)}
            >
              <div className="border-r border-t border-b border-black ">
                <img src={item.image} alt="pinkcap" />
                <div
                  className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
                  style={{ letterSpacing: "2px" }}
                >
                  SALE
                </div>
              </div>
              <div className="border-r border-black relative text-center w-full">
                <Link to={`/viewpage/${item.id}`}>
                  <p className="text-black text-sm px-2 pb-1 pt-5 font-montserrat">
                    {item.title}
                  </p>
                  <p
                    className="text-black text-sm px-2 pb-4 font-montserrat"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    Sold Out
                  </p>
                </Link>
                {hoveredItem === item.id && (
                  <div
                    className="absolute bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest cursor-pointer"
                    style={{
                      top: "-62%",
                      left: "0",
                      width: "100%",
                      textAlign: "center",
                      letterSpacing: "2px",
                    }}
                    onClick={() => {
                      setIsModalOpen(true);
                      dispatch(setSelectedProduct(item));
                    }}
                  >
                    QUICK VIEW
                  </div>
                )}
              </div>
            </div>
          ))}
          {selectedModalIndex !== null && (
            <SaleItemsModal
              onClose={handleModalClose}
              onPrevious={handlePreviousModal}
              onNext={handleNextModal}
              selectedProduct={SaleItems[selectedModalIndex]}
            />
          )}
        </div>
      </div>
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Sale;
