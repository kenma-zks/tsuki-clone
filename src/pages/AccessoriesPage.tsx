import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ViewModal from "../components/Card/ViewModal";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../store/productSlice";
import { Link } from "react-router-dom";
import { AccessoriesItemsLink } from "../Links/AccesoriesLinks";

const AccessoriesPage = () => {
  const dispatch = useDispatch();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(
    null
  );

  const handleItemHover = (itemId: string) => {
    setHoveredItem(itemId);
  };

  const handleModalOpen = (index: number) => {
    setIsModalOpen(true);
    setSelectedModalIndex(index);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedModalIndex(null);
  };

  const handlePreviousModal = () => {
    if (selectedModalIndex !== null) {
      if (selectedModalIndex === 0) {
        setSelectedModalIndex(2);
      } else {
        setSelectedModalIndex(selectedModalIndex - 1);
      }
    }
  };

  const handleNextModal = () => {
    if (selectedModalIndex !== null) {
      if (selectedModalIndex === 2) {
        setSelectedModalIndex(0);
      } else {
        setSelectedModalIndex(selectedModalIndex + 1);
      }
    }
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      <Banner />
      <Header />
      <Navbar />
      <div
        id="accessories-items"
        className="w-full grid grid-cols-3 pb-10 pt-24 "
      >
        {AccessoriesItemsLink.map((item, index) => {
          return (
            <div className="w-full" key={item.id}>
              <div
                className={`relative flex flex-col items-center justify-center ${
                  index === 3 ? "border-b" : ""
                } ${index >= 4 ? "border-black" : ""} ${
                  index === 0 ? "border-t" : ""
                }`}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={handleItemLeave}
                onClick={() => {
                  handleModalOpen(index);
                }}
              >
                <div className="border-r border-t border-b border-black w-full">
                  <img src={item.image} alt="pinkcap" className="w-full" />
                  <div
                    className="absolute top-0 left-0 bg-black text-white py-2.5 px-6 font-montserrat font-regular text-xs tracking-widest"
                    style={{ letterSpacing: "2px" }}
                  >
                    SALE
                  </div>
                  {hoveredItem === item.id && (
                    <div
                      className="absolute border-l bg-[#F4E0EA] text-black border-t border-black py-4 px-6 font-montserrat font-regular text-xs tracking-widest"
                      style={{
                        bottom: "1px",
                        left: "-1px",
                        width: "100%",
                        textAlign: "center",
                        letterSpacing: "2px",
                      }}
                      onClick={() => {
                        setIsModalOpen(true);
                        dispatch(setSelectedProduct(item));
                      }}
                    >
                      QUICK VIEW
                    </div>
                  )}
                </div>
              </div>
              <div className="border-r border-b border-black relative text-center w-full">
                <Link
                  to={`/viewpage/${item.id}`}
                  onClick={() => {
                    console.log(item);
                    dispatch(setSelectedProduct(item));
                  }}
                >
                  <p className="text-black text-sm px-2 pb-1 pt-5 text-center font-montserrat">
                    {item.title}
                  </p>
                  <p
                    className="text-black text-sm px-2 pb-4 text-center font-montserrat"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    Sold Out
                  </p>
                </Link>
              </div>
            </div>
          );
        })}

        {selectedModalIndex !== null && (
          <ViewModal
            onClose={handleModalClose}
            onPrevious={handlePreviousModal}
            onNext={handleNextModal}
            selectedProduct={AccessoriesItemsLink[selectedModalIndex]}
          />
        )}
      </div>
      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default AccessoriesPage;
