import React from "react";
import { FiStar } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full h-[68vh] bg-black">
        <div className="w-full grid grid-cols-3 px-10 pt-6 gap-10">
          <div>
            <div className="text-white flex items-center">
              <FiStar className="h-5 w-5 text-white" />
              <p
                className="ml-4 font-monserrat text-sm"
                style={{ letterSpacing: "0.4px" }}
              >
                THOUGHTFULLY DESIGNED
              </p>
            </div>
            <p
              className="ml-9 text-white font-monserrat text-sm mt-2"
              style={{ width: "80%", letterSpacing: "0.4px" }}
            >
              We design apparel and homeware that feature creative, fun designs
              for the daring individual.
            </p>
          </div>
          <div>
            <div className="text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>

              <p
                className="ml-4 font-monserrat text-sm"
                style={{ letterSpacing: "0.4px" }}
              >
                ETHICALLY SOURCED
              </p>
            </div>
            <p
              className="ml-9 text-white font-monserrat text-sm mt-2"
              style={{ width: "80%", letterSpacing: "0.4px" }}
            >
              We ensure that all our products are sourced responsibly and made
              from excellent quality materials.
            </p>
          </div>
          <div>
            <div className="text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              <p
                className="ml-4 font-monserrat text-sm"
                style={{ letterSpacing: "0.4px" }}
              >
                GET IN TOUCH
              </p>
            </div>
            <p
              className="ml-9 text-white font-monserrat text-sm mt-2"
              style={{ width: "80%", letterSpacing: "0.4px" }}
            >
              Do you have any questions? Please get in touch with us at any time
              and we'll be happy to assist you
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 px-12 pt-28 gap-10">
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
        <div className="w-full px-12 pt-20">
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
      </div>
    </React.Fragment>
  );
};

export default Footer;
