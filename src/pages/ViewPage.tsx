import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import {
  RiFacebookBoxFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setSelectedProduct } from "../store/productSlice";
import { SaleItems } from "../components/Links/SaleItemsLink";
import { AccessoriesLink } from "../components/Links/ImageLinks";

const ViewPage = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const productData = [...SaleItems, ...AccessoriesLink];

  const { productId } = useParams<{ productId?: string }>();

  const selectedProduct = useSelector(
    (state: RootState) => state.products.selectedProduct
  );

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

  useEffect(() => {
    const product = productData.find((product) => {
      return product.id === productId;
    });
    dispatch(setSelectedProduct(product || null));
  }, [dispatch, productId, productData]);

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
              src={selectedProduct?.images[selectedImage].mainImage}
              alt="pinkcap"
            />
          </div>
          <div>
            {[...Array(7)].map((_, index) => (
              <div key={index} className="mt-1">
                <div className="grid grid-cols-8 gap-2">
                  {selectedProduct?.images
                    .slice(index * 8, (index + 1) * 8)
                    .map((link: { previewImage: string }, subIndex: number) => {
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
            {selectedProduct?.title}
          </p>
          <div className="flex justify-center items-center">
            <p className="text-[#D5D5D5] text-2xl px-2 font-monsterrat text-center ">
              $ {selectedProduct?.discountedPrice} USD
            </p>
            <p className="text-[#D5D5D5] text-2xl px-2 py-3 text-center font-regular line-through">
              $ {selectedProduct?.originalPrice} USD
            </p>
          </div>
          <div className="flex justify-center items-start flex-col">
            <p className="text-black text-sm px-2 py-1 font-monsterrat text-center ">
              Color
            </p>
            <div className="flex px-2 py-1 justify-center items-center">
              {selectedProduct?.colors?.map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 mr-2 border rounded-full bg-[${color.value}] cursor-pointer relative group`}
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                >
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <div className="border border-black bg-white text-black text-xs px-2 py-0.5 mt-2 rounded-sm">
                      {color.name}
                    </div>
                  </div>
                </div>
              ))}
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
            <p className="font-bold text-lg text-[#999999]">
              {selectedProduct?.productStatus}
            </p>
          </div>
          <div className="ml-2 pr-32 flex justify-center items-center mt-6 w-full">
            <p
              className="font-monsterrat"
              style={{ letterSpacing: "0.4px", lineHeight: "1.2" }}
            >
              {selectedProduct?.description}
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
              {selectedProduct?.details.map((detail: string, index: number) => (
                <li key={index}>{detail}</li>
              ))}
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
      <div className="flex">
        {selectedProduct?.recentlyViewed.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center w-1/4 border border-r-black border-b-black"
          >
            <Link to={`/viewpage/${item.id}`}>
              <div className="border-b border-black">
                <img
                  src={item.image}
                  alt="cap"
                  className="w-[600px] h-[400px] object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-sm py-4" style={{ letterSpacing: "0.6px" }}>
                  {item.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full bg-black h-auto">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ViewPage;
