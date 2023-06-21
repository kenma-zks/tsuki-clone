import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const SaleItems = [
  {
    id: 1,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/TSHIRT_PINK_1_3000x.jpg?v=1663798932",
    name: "Embroidered Logo T-Shirt",
  },
  {
    id: 2,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/bhat_3000x.png?v=1675454228",
    name: "Smiley Embroidered Bucket Hat",
  },
  {
    id: 3,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_BLACK_PINK_1_3000x.jpg?v=1665576057",
    name: "Corduroy Tsuki Cap",
  },
  {
    id: 4,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/CAP_PINK_BLACK_1_3000x.jpg?v=1669120603",
    name: "Tsuki Logo Embroidered Cap",
  },
  {
    id: 5,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/IMG_9448_3000x.jpg?v=1675454799",
    name: "Melted Socks",
  },
  {
    id: 6,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/SOCKS_WHITE_1_3000x.jpg?v=1638976238",
    name: "Tsuki Socks",
  },
  {
    id: 7,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/meltedtotehero_3000x.jpg?v=1652110249",
    name: "Melted Tote Bag",
  },
  {
    id: 8,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/tmcorduroypants_3000x.jpg?v=1638456234",
    name: "Mischief Corduroy Trousers",
  },
  {
    id: 9,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/tsblacktshirt_3000x.jpg?v=1638455978",
    name: "Mischief Pocket T-Shirt",
  },
  {
    id: 10,
    image:
      "//cdn.shopify.com/s/files/1/2321/0267/products/tmflannel_3000x.jpg?v=1638457194",
    name: "Mischief Flannel Button Up",
  },
];

const Sale = () => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  const handleItemHover = (itemId: number) => {
    setHoveredItemId(itemId);
  };

  const handleItemLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <div>
      <Banner />
      <Header />
      <Navbar />
      <div className="w-full mt-24 mb-10">
        <div className="grid grid-cols-3">
          {SaleItems.map((item, index) => (
            <div
              className={`relative flex flex-col items-center justify-center ${
                index >= 7 ? "border-b border-black" : ""
              }`}
              key={item.id}
              onMouseEnter={() => handleItemHover(item.id)}
              onMouseLeave={handleItemLeave}
            >
              <div className="border-r border-t border-b border-black ">
                <img src={item.image} alt="pinkcap" />
                <div
                  className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
                  style={{ letterSpacing: "2px" }}
                >
                  SALE
                </div>
              </div>
              <div className="border-r border-black relative text-center w-full">
                <p className="text-black text-sm px-2 pb-1 pt-5 font-montserrat">
                  {item.name}
                </p>
                <p
                  className="text-black text-sm px-2 pb-4 font-montserrat"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Sold Out
                </p>
                {hoveredItemId === item.id && (
                  <div
                    className="absolute bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest"
                    style={{
                      top: "-62%",
                      left: "0",
                      width: "100%",
                      textAlign: "center",
                      letterSpacing: "2px",
                    }}
                  >
                    QUICK VIEW
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Sale;
