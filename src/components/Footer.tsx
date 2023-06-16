import React from "react";
import { FiStar } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full grid grid-cols-2 px-12 pt-20 gap-10 ">
        <div>
          <div className="flex items-center">
            <p
              className="text-white font-nunito text-sm font-extrabold"
              style={{ letterSpacing: "1px" }}
            >
              NEWSLETTER
            </p>
          </div>
          <hr className="border-white border-t-0.5 my-4 w-auto " />
          <p
            className="text-white font-monserrat text-sm pt-1"
            style={{ width: "90%", letterSpacing: "1px" }}
          >
            Subscribe to be the first to hear about our latest collections,
            offers and news about the brand.
          </p>
          <div className="flex items-center mt-4">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-white bg-black rounded-r-sm border-l-white border-l-1 border border-gray-white focus:none dark:bg-black dark:border-l-white  dark:border-white  dark:text-white"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-bold text-black bg-black rounded-r-sm border border-white hover:bg-white focus:none focus:outline-none focus:none dark:bg-white dark:hover:bg-white dark:focus:white"
                style={{ letterSpacing: "1.5px" }}
              >
                <p className="">JOIN</p>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <p
              className="text-white font-nunito text-sm font-extrabold"
              style={{ letterSpacing: "1px" }}
            >
              GET SOCIAL WITH US
            </p>
          </div>
          <hr className="border-white  border-t-0.5 my-4 w-auto" />
          <div className="flex items-center mt-5 ">
            <div className="flex items-center pt-1">
              <a href="https://www.facebook.com/tsukimarket">
                <AiFillFacebook className="text-white text-md mr-6 cursor-pointer" />
              </a>

              <a href="https://twitter.com/tsuki_market">
                <FaTwitter className="text-white text-md mr-6 cursor-pointer" />
              </a>
              <a href="https://www.pinterest.ca/tsuki_market/_saved/">
                <BsPinterest className="text-white text-md mr-6 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/tsuki_market/">
                <IoLogoInstagram className="text-white text-md mr-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-12 pt-20 pb-10">
        <div className="flex items-center justify-between">
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            © TSUKI MARKET 2023
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            CUSTOMER SUPPORT & SHIPPING INFORMATION
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            ABOUT
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            COLLABORATIONS
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            WHOLESALERS & RETAILERS
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            TERMS & CONDITIONS
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            PRIVACY POLICY
          </p>
          <p
            className="text-white font-monserrat text-xs"
            style={{ letterSpacing: "1px" }}
          >
            POWERED BY SHOPIFY
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
