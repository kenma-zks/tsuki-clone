import React from "react";
import { UserIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <React.Fragment>
      <div
        id="header"
        className="flex mt-12 justify-between items-center w-full"
      >
        <div className="flex-grow">
          <p
            className="text-6xl font-playfair tracking-widest text-center pl-40"
            style={{ letterSpacing: "-2px" }}
          >
            Tsuki
          </p>
        </div>
        <div className="flex items-center pr-4">
          <UserIcon className="h-6 w-6 mr-4" />
          <MagnifyingGlassIcon className="h-6 w-6 mr-4" />
          <ShoppingCartIcon className="h-6 w-6 mr-4" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
