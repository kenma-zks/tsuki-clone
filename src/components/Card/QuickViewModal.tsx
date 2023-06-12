import React, { useState } from "react";

const QuickViewModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [selectedImage, setSelectedImage] = useState(0);

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

  const imageLinks2 = [
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_1_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_1_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_1_3000x.jpg?v=1665576057",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_1_small_cropped.jpg?v=1665576057",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_1_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_1_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/eeee_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/eeee_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/IMG_4479_1_1_441a0f90-fcd0-474d-a744-e4d52f5fa3e6_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/IMG_4479_1_1_441a0f90-fcd0-474d-a744-e4d52f5fa3e6_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_2_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_2_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_2_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_2_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_3_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_3_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_4_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_4_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_5_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_WHITE_5_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/41_3000x.jpg?v=1669120603",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/41_small_cropped.jpg?v=1669120603",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_5_3000x.jpg?v=1642512537",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_5_small_cropped.jpg?v=1642512537",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_6_3000x.jpg?v=1642512537",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_6_small_cropped.jpg?v=1642512537",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_3_3000x.jpg?v=1642512537",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_3_small_cropped.jpg?v=1642512537",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_2_3000x.jpg?v=1619016090",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_2_small_cropped.jpg?v=1619016090",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_3_3000x.jpg?v=1619016090",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_3_small_cropped.jpg?v=1619016090",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_4_3000x.jpg?v=1619016090",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_4_small_cropped.jpg?v=1619016090",
    },
    {
      mainImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_5_3000x.jpg?v=1619016090",
      previewImage:
        "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_5_small_cropped.jpg?v=1619016090",
    },
  ];

  return (
    <React.Fragment>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
        onClick={onClose}
      ></div>
      <div className="fixed top-2 bottom-2 left-0 right-0 bg-white mx-auto max-w-[62%] z-50 p-4 ">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-9 h-9"
            color="gray"
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
            className="w-9 h-9"
            color="gray"
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
            className="w-9 h-9"
            color="gray"
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
            <div className="flex justify-center items-center mb-20">
              <img
                className="w-96 h-96 object-contain"
                src={imageLinks2[selectedImage].mainImage}
                alt="pinkcap"
              />
            </div>
            <div className="mr-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mt-1">
                  <div className="grid grid-cols-5 gap-2">
                    {imageLinks2
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
                            <img src={link.previewImage} />
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
              Tsuki Logo Embroidered Cap
            </p>
            <div className="flex justify-center items-center">
              <p className="text-black text-xl px-2 font-monsterrat text-center ">
                $ 10.00 USD
              </p>
              <p className="text-gray-500 text-xl px-2 py-3 text-center font-regular line-through">
                $ 36.00 USD
              </p>
            </div>
            <div className="flex justify-center items-start flex-col">
              <p className="text-black text-sm px-2 py-1 font-monsterrat text-center ">
                Color
              </p>
              <div className="flex px-2 py-1 justify-center items-center">
                <div className="w-6 h-6 border rounded-full bg-[#FFD9DF] cursor-pointer relative group">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      Pink
                    </div>
                  </div>
                </div>

                <div className="w-6 h-6 border border-gray-600 rounded-full bg-white mx-2 cursor-pointer relative group">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      White
                    </div>
                  </div>
                </div>

                <div className="w-6 h-6 border rounded-full bg-[#656565] cursor-pointer relative group">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      Black
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Top off your look with our twill 6 panel curved brim cap. This
                hat is available in three different colour blocks, all detailed
                with our kanji logo on front and...{" "}
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

export default QuickViewModal;
