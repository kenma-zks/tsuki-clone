import React, { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import Footer from "../components/Footer";

const CapViewPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
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
      <Banner />
      <Header />
      <Navbar />
      <div>
        <nav
          className="flex px-10 py-10 text-xs font-montserrat font-regular "
          style={{ letterSpacing: "1.5px" }}
        >
          <Link to="/" className="mr-2 hover:text-[#FFD9DF]">
            HOME
          </Link>
          <span className="mr-2">{">"}</span>
          <Link to="/accessories" className="mr-2 hover:text-[#FFD9DF]">
            ACCESSORIES
          </Link>
          <span className="mr-2">{">"}</span>
          <Link to="/accessories" className="mr-2 hover:text-[#FFD9DF]">
            TSUKI LOGO EMBROIDERED CAP
          </Link>
        </nav>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center w-1/2 h-full flex-col ">
          <div className="flex justify-center items-center mb-2 pl-6">
            <img
              className="w-[900px] h-[900px] object-contain"
              src={imageLinks2[selectedImage]?.mainImage}
              alt="pinkcap"
            />
          </div>
          <div>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="mt-1">
                <div className="grid grid-cols-8 gap-2">
                  {imageLinks2
                    .slice(index * 8, (index + 1) * 8)
                    .map((link, subIndex) => {
                      const imageIndex = index * 8 + subIndex;

                      return (
                        <div
                          key={subIndex}
                          className={`w-20 h-20 cursor-pointer ${
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
        <div className="flex justify-start items-start w-1/2 flex-col pl-32 mb-auto">
          <p
            className="text-black text-3xl px-2 font-monsterrat "
            style={{ letterSpacing: "1px" }}
          >
            Tsuki Logo Embroidered Cap
          </p>
          <div className="flex justify-center items-center">
            <p className="text-[#D5D5D5] text-2xl px-2 font-monsterrat text-center ">
              $ 10.00 USD
            </p>
            <p className="text-[#D5D5D5] text-2xl px-2 py-3 text-center font-regular line-through">
              $ 36.00 USD
            </p>
          </div>
          <div className="flex justify-center items-start flex-col">
            <p className="text-black text-sm px-2 py-1 font-monsterrat text-center ">
              Color
            </p>
            <div className="flex px-2 py-1 justify-center items-center">
              <div
                className="w-6 h-6 border rounded-full bg-[#FFD9DF] cursor-pointer relative group"
                onClick={() => {
                  setSelectedImage(0);
                }}
              >
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                    Pink
                  </div>
                </div>
              </div>

              <div
                className="w-6 h-6 border border-gray-600 rounded-full bg-white mx-2 cursor-pointer relative group"
                onClick={() => {
                  setSelectedImage(2);
                }}
              >
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                    White
                  </div>
                </div>
              </div>

              <div
                className="w-6 h-6 border rounded-full bg-[#656565] cursor-pointer relative group"
                onClick={() => {
                  setSelectedImage(1);
                }}
              >
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
          <div className="ml-2 pr-32 flex justify-center items-center mt-6 w-full">
            <p
              className="font-monsterrat"
              style={{ letterSpacing: "0.4px", lineHeight: "1.2" }}
            >
              Top off your look with our twill 6 panel curved brim cap. This hat
              is available in three different colour blocks, all detailed with
              our kanji logo on front and Tsuki logo on back.
            </p>
          </div>
          <div className="ml-2 pr-32 flex justify-start items-start mt-10 w-full">
            <p
              className="font-monsterrat underline"
              style={{ letterSpacing: "0.4px", lineHeight: "1.2" }}
            >
              DETAILS:
            </p>
          </div>
          <div
            className="ml-10 pr-32 flex justify-start items-start mt-2 w-full font-montserrat text-sm"
            style={{ letterSpacing: "0.4px", lineHeight: "1.4" }}
          >
            <ul className="list-disc list-inside">
              <li className="mb-1">Adjustable band with metal clasp closure</li>
              <li className="mb-1">
                Embroidery Details on front and back, made of 100% cotton
              </li>
              <li className="mb-1">
                Care Instructions: Hand wash with soap and water and air dry. Do
                not put in the washer/dryer
              </li>
            </ul>
          </div>
          <hr className="ml-2 w-10/12 mt-4 border border-black border-t-0 border-l-0 border-r-0 border-b-1 " />
          <div className="ml-2 flex justify-start items-center mt-6">
            <a
              href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Ftsuki.market%2Fproducts%2Ftsuki-cap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mr-4 cursor-pointer hover:text-blue-800 ">
                <RiFacebookBoxFill className="w-8 h-8 mr-2 " />
                <p
                  className="text-xs font-bold
              "
                  style={{ letterSpacing: "1.5px" }}
                >
                  SHARE
                </p>
              </div>
            </a>

            <a
              href="https://twitter.com/intent/tweet?text=Tsuki%20Logo%20Embroidered%20Cap&url=https://tsuki.market/products/tsuki-cap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center mr-4 cursor-pointer hover:text-blue-500">
                <RiTwitterFill className="w-8 h-8 mr-2 " />
                <p
                  className="text-xs font-bold
              "
                  style={{ letterSpacing: "1.5px" }}
                >
                  TWEET
                </p>
              </div>
            </a>

            <a
              href="https://www.pinterest.com/pin-builder/?description=Tsuki+Logo+Embroidered+Cap&media=%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2321%2F0267%2Fproducts%2FCAP_PINK_BLACK_1_1024x1024.jpg%3Fv%3D1669120603&method=button&url=https%3A%2F%2Ftsuki.market%2Fproducts%2Ftsuki-cap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center  cursor-pointer hover:text-red-700">
                <RiPinterestFill className="w-8 h-8 mr-2" />
                <p
                  className="text-xs font-bold
              "
                  style={{ letterSpacing: "1.5px" }}
                >
                  PIN IT
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full border border-black">
        <p className="font-thin text-2xl py-4">Recently Viewed</p>
      </div>
      <div className="flex justify-start items-center w-1/4 border border-r-black border-b-black">
        <img
          src="//cdn.shopify.com/s/files/1/2321/0267/products/TSUKIFINALBEIGECORDCAP_600x.jpg"
          alt="cap"
          className="w-[600px] h-[400px] object-cover"
        />
      </div>
      <div className="flex justify-center items-center w-1/4 border border-r-black border-b-black">
        <p className="text-sm py-4" style={{ letterSpacing: "0.6px" }}>
          Corduroy Tsuki Cap
        </p>
      </div>
      <div className="w-full bg-black h-auto">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default CapViewPage;
