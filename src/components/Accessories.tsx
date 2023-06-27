import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../store/productSlice";
import { AccessoriesLink } from "./Links/ImageLinks";
import { useDispatch } from "react-redux";
import ViewModal from "./Card/ViewModal";

const Accessories = () => {
  const dispatch = useDispatch();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(
    null
  );

  const handleItemHover = (itemId: string) => {
    setHoveredItem(itemId);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

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
      <div id="accessories-items" className="w-full grid grid-cols-3 pb-10 ">
        {AccessoriesLink.map((item, index) => {
          return (
            <div className="w-full" key={item.id}>
              <div
                className="relative flex flex-col items-center"
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={handleItemLeave}
                onClick={() => {
                  openModal(index);
                }}
              >
                <div className="border-r border-t border-b border-black w-full">
                  <img src={item.image} alt="pinkcap" className="w-full" />
                  <div
                    className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
                    style={{ letterSpacing: "2px" }}
                  >
                    SALE
                  </div>
                  {hoveredItem === item.id && (
                    <div
                      className="absolute border-l bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest"
                      style={{
                        bottom: "1px",
                        left: "-1px",
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
              <div className="border-r border-b border-black relative text-center w-full">
                <Link
                  to={`/viewpage/${item.id}`}
                  onClick={() => {
                    console.log(item);
                    dispatch(setSelectedProduct(item));
                  }}
                >
                  <p className="text-black text-sm px-2 pb-1 pt-5 text-center font-montserrat">
                    {item.title}
                  </p>
                  <p
                    className="text-black text-sm px-2 pb-4 text-center font-montserrat"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    Sold Out
                  </p>
                </Link>
              </div>
            </div>
          );
        })}

        {selectedModalIndex !== null && (
          <ViewModal
            onClose={closeModal}
            onPrevious={handlePreviousModal}
            onNext={handleNextModal}
            selectedProduct={AccessoriesLink[selectedModalIndex]}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Accessories;
