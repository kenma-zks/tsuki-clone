import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import Slideelements from "./Slideelements";

const Carousel = () => {
  const items = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/2321/0267/files/D11DB67A-D146-48C3-90D0-1FF7CAA53B15.jpg?v=1663788694",
      title: "Embroidered Logo T-Shirt",
      price: "Sold Out",
      productImage:
        "https://cdn.shopify.com/s/files/1/2321/0267/products/TSHIRT_PINK_1_540x.jpg?v=1663798932",
    },

    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/2321/0267/files/1A9D1787-8415-48EC-80C4-7F1B3CCDA952.jpg?v=1663788694",
      title: "Example Title",
      price: "$99.00 USD",
      productImage:
        "https://cdn.shopify.com/s/files/1/2321/0267/products/TSHIRT_PINK_1_540x.jpg?v=1663798932",
    },
    {
      id: 3,
      image:
        "https://cdn.shopify.com/s/files/1/2321/0267/files/7B0DACF2-3B7F-4AC3-810C-0DA9B5185E3E.jpg?v=1663798139",
      title: "Example Title",
      price: "$99.00 USD",
      productImage:
        "https://cdn.shopify.com/s/files/1/2321/0267/products/TSHIRT_PINK_1_540x.jpg?v=1663798932",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const handlePrev = () => {
    setDirection("prev");
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    setDirection("next");
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <React.Fragment>
      <div id="carousel" className="mb-8 flex h-[99vh] relative">
        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${direction === "prev" ? "100%" : "0%"})`,
            }}
          >
            <div className="w-1/2">
              <img
                src={items[activeIndex].image}
                alt="carousel"
                className="h-full w-full"
              />
            </div>
            <div className="w-1/2 bg-[#F9F1F4]">
              <div className="flex flex-col justify-center items-center h-full">
                <p
                  className="text-xs font-monsterrat tracking-widest text-center pb-10 -mt-10"
                  style={{ letterSpacing: "3px" }}
                >
                  SHOP THE LOOK
                </p>
                <div className="flex justify-center items-center border border-black w-72 relative">
                  <div className="flex flex-col justify-center items-center">
                    <img src={items[activeIndex].productImage} alt="product" />
                    <div
                      className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
                      style={{ letterSpacing: "2px" }}
                    >
                      SALE
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center border-r border-b border-l border-black w-72 relative bg-white">
                  <div className="relative flex flex-col items-center justify-center">
                    <p
                      className="text-black text-xs px-2 pb-2 pt-5 text-center font-montserrat -mt-2 "
                      style={{ letterSpacing: "0.2px" }}
                    >
                      {items[activeIndex].title}
                    </p>
                    <p
                      className="text-black text-xs px-2 pb-4 text-center font-montserrat"
                      style={{ letterSpacing: "0.2px" }}
                    >
                      {items[activeIndex].price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChevronLeftIcon
          className="h-20 w-20 text-[#D0D0D0] absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
          onClick={handlePrev}
        />
        <ChevronRightIcon
          className="h-20 w-20 text-[#D0D0D0] absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </React.Fragment>
  );
};

export default Carousel;
