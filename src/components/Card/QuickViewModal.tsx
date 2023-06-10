import React, { useState } from "react";

const QuickViewModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedColor, setSelectedColor] = useState("Pink");

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
        <div className="flex w-full">
          <div className="flex justify-center items-center w-1/2">
            <img
              src="https://cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_1_540x.jpg?v=1669120603"
              alt="pinkcap"
            />
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
                    <div className="border border-black text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      Pink
                    </div>
                  </div>
                </div>

                <div className="w-6 h-6 border border-gray-600 rounded-full bg-white mx-2 cursor-pointer relative group">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <div className="border border-black text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      White
                    </div>
                  </div>
                </div>

                <div className="w-6 h-6 border rounded-full bg-[#656565] cursor-pointer relative group">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <div className="border border-black text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      Black
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuickViewModal;
