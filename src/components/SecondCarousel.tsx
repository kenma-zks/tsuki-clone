import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { GiPlainCircle } from "react-icons/gi";

const SecondCarousel = () => {
  const items = [
    {
      id: 1,
      image:
        "https://cdn.shopify.com/s/files/1/2321/0267/files/2_2048x_09058975-aaee-42e8-804b-f61655eb1150_1950x.jpg?v=1642523302",
      title: "ALWAYS ETHICALLY SOURCED",
      message:
        "We ensure that all our products are ethically sourced and made from excellent quality materials.",
      button: "READ MORE",
    },
    {
      id: 2,
      image:
        "https://cdn.shopify.com/s/files/1/2321/0267/files/Screen_Shot_2022-09-08_at_10.01.13_AM_1950x.png?v=1662642084",
      title: "SOCKS RESTOCKED",
      message: "Our two must-have Tsuki Sock styles are back in stock:",
      button: "SHOP NOW",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const [currentItem, setCurrentItem] = useState(0);

  const handlePrev = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  const handleNext = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  return (
    <React.Fragment>
      <div id="carousel" className="mb-10 flex h-[76vh] relative">
        <div className="w-full overflow-hidden relative">
          <div className="flex transition-transform duration-700 ease-in-out">
            <div className="w-full">
              <img
                src={items[currentItem].image}
                alt="carousel"
                className="h-full w-full -my-10"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[900px] h-1/2 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <p
                    className="text-black text-4xl px-2 pb-2 pt-16 text-center font-montserrat -mt-2 "
                    style={{ letterSpacing: "-1.6px" }}
                  >
                    {items[currentItem].title}
                  </p>
                  <p
                    className="text-black px-20 pb-2 pt-3 text-center font-montserrat -mt-2 "
                    style={{ letterSpacing: "0.2px" }}
                  >
                    {items[currentItem].message}
                  </p>
                  {isHovered ? (
                    <button
                      className="border border-black bg-black text-white  text-xs px-4 py-3 mt-4 w-36"
                      style={{ letterSpacing: "2.2px" }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {items[currentItem].button}
                    </button>
                  ) : (
                    <button
                      className="border border-black text-xs px-4 py-3 mt-4 w-36"
                      style={{ letterSpacing: "2.2px" }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {items[currentItem].button}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChevronLeftIcon
          className="h-20 w-20 text-black absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
          onClick={handlePrev}
        />
        <ChevronRightIcon
          className="h-20 w-20 text-black absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleNext}
        />
        <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index === currentItem ? (
                <GiPlainCircle className="h-4 w-4 text-white mx-1" />
              ) : (
                <GiPlainCircle className="h-4 w-4 text-black mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondCarousel;
