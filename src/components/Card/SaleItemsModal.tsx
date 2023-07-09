import React, { useState } from "react";
import { Product } from "../../types/Types";

const SaleItemsModal = ({
  onClose,
  onPrevious,
  onNext,
  selectedProduct,
}: {
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  selectedProduct: Product;
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const closeModal = () => {
    onClose();
  };

  const previousModal = () => {
    onPrevious();
  };

  const nextModal = () => {
    onNext();
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <React.Fragment>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
        onClick={closeModal}
      ></div>
      <div className="fixed top-2 bottom-2 left-0 right-0 bg-white mx-auto max-w-[62%] z-50 p-4 ">
        <div className="flex justify-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-9 h-9 hover:cursor-pointer hover:text-gray-200"
            color="gray"
            onClick={previousModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-9 h-9 hover:cursor-pointer hover:text-gray-200"
            color="gray"
            onClick={nextModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-9 h-9 hover:cursor-pointer hover:text-gray-200"
            color="gray"
            onClick={closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex w-full max-h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="flex justify-center items-center w-1/2 h-full flex-col">
            <div className="flex justify-center items-center mb-2">
              <img
                className="w-[500px] h-[500px] object-contain"
                src={selectedProduct?.images[selectedImage]?.mainImage}
                alt="pinkcap"
              />
            </div>
            <div className="mr-12 pb-10">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mt-1">
                  <div className="grid grid-cols-5 gap-2">
                    {selectedProduct?.images
                      .slice(index * 5, (index + 1) * 5)
                      .map((link, subIndex) => {
                        const imageIndex = index * 5 + subIndex;

                        return (
                          <div
                            key={subIndex}
                            className={`w-16 h-16 cursor-pointer ${
                              selectedImage === imageIndex
                                ? "border border-black"
                                : ""
                            }`}
                            onClick={() => handleImageClick(imageIndex)}
                          >
                            <img
                              src={link.previewImage}
                              className="w-full h-full object-cover"
                              alt=""
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start w-1/2 flex-col">
            <p
              className="text-black text-2xl px-2 font-monsterrat "
              style={{ letterSpacing: "1px" }}
            >
              {selectedProduct?.title}
            </p>
            <div className="flex justify-center items-center">
              <p className="text-[#373737] text-xl px-2 font-monsterrat text-center ">
                $ {selectedProduct?.discountedPrice} USD
              </p>
              <p className="text-[#4B4B4B] text-xl px-2 py-3 text-center font-regular line-through">
                $ {selectedProduct?.originalPrice} USD
              </p>
            </div>
            {selectedProduct?.colors && selectedProduct.colors.length > 0 && (
              <div className="flex justify-center items-start flex-col">
                <p className="text-black text-sm px-2 py-1 font-monsterrat text-center">
                  Color
                </p>
                <div className="flex px-2 py-1 justify-center items-center">
                  {selectedProduct.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 mr-2 border rounded-full bg-[${color.value}] cursor-pointer relative group`}
                      onClick={() => {
                        setSelectedImage(index);
                      }}
                    >
                      {selectedImage === index && (
                        <div className="absolute w-8 h-8 border-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      )}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                        <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                          {color.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedProduct?.size && selectedProduct.size.length > 0 && (
              <div className="flex justify-center items-start flex-col">
                <p className="text-black text-sm px-2 py-1 font-monsterrat text-center mt-1">
                  Size
                </p>
                <div className="ml-2 py-2 mt-2 flex items-center border border-black w-96 relative">
                  <select
                    className="outline-none cursor-pointer bg-transparent appearance-none pl-4 pr-8 font-monsterrat text-black w-full"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {selectedProduct.size.map((size, index) => (
                      <option key={index} value={size.name}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div className="ml-2 py-2 mt-4 flex items-center border border-black w-32 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
                onClick={handleDecrement}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
              {quantity}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2"
                onClick={handleIncrement}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="ml-2 py-2 flex justify-center items-center mt-6 w-48 bg-[#E6E6E6]">
              <p className="font-bold text-lg text-[#999999]"> Sold Out</p>
            </div>
            <div className="ml-2 pr-10 flex justify-center items-center mt-6 w-full">
              <p
                className="font-monsterrat "
                style={{ letterSpacing: "0.4px", lineHeight: "1.2" }}
              >
                {selectedProduct?.description}
              </p>
            </div>
            <hr className="ml-2 w-11/12 mt-4 border border-black border-t-0 border-l-0 border-r-0 border-b-1 " />
            <div className="ml-2 flex justify-center items-center mt-4">
              <p
                className=" text-black font-monsterrat py-2 hover:text-[#FFD9DF] cursor-pointer"
                style={{ letterSpacing: "0.1px", lineHeight: "1.2" }}
              >
                View Product →
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SaleItemsModal;
