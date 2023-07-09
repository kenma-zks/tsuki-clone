import React, { useState } from "react";
import { UserIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    setSearchValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
    setSearchValue("");
  };

  return (
    <React.Fragment>
      {openSearch && (
        <div
          className="absolute w-full border-b border-black top-0 right-0 h-16 mt-10 transition-all duration-300"
          style={{ opacity: openSearch ? 1 : 0 }}
        >
          <input
            type="text"
            placeholder="Search our store"
            value={searchValue}
            onChange={handleInputChange}
            className="w-full h-10 pl-10 pr-12 font-monsterrat active:outline-none focus:outline-none"
          />
          <FiX
            onClick={handleCloseSearch}
            className="absolute top-4 right-8 cursor-pointer w-6 h-6"
          />
        </div>
      )}
      <div
        id="header"
        className={`flex ${
          openSearch ? "mt-28" : "mt-12"
        } justify-between items-center w-full transition-all duration-300`}
      >
        <div className="flex-grow">
          <p
            className="text-6xl font-playfair tracking-widest text-center pl-40 "
            style={{ letterSpacing: "-2px" }}
          >
            Tsuki
          </p>
        </div>
        <div className="flex items-center pr-4">
          <Link to="/login">
            <UserIcon className="h-6 w-6 mr-4 cursor-pointer hover:text-[#F4E0EA]" />
          </Link>
          <MagnifyingGlassIcon
            onClick={handleOpenSearch}
            className={`h-6 w-6 mr-4 cursor-pointer ${
              openSearch ? "text-[#F4E0EA]" : ""
            }`}
          />
          <ShoppingCartIcon className="h-6 w-6 mr-4 cursor-pointer hover:text-[#F4E0EA]" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
