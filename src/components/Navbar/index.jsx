import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-24 flex-cc bg-dark">
      <div className="container flex-bc py-6 w-full">
        <div className="flex-cc">
          <h1 className="text-2xl font-semibold">Gigih Exercise</h1>
          <div className="w-0.5 mx-4 h-8 bg-white opacity-30"></div>
          <h2 className="text-[#fff5] text-2xl">Giphy Client</h2>
        </div>
        <div className="flex-cc gap-4">
          <Link
            to="/"
            className="block px-3 hover:bg-[#fff3] py-2 rounded-md border"
          >
            Home
          </Link>
          <Link
            to="/trending"
            className="block px-3 hover:bg-[#fff3] py-2 rounded-md border"
          >
            Trending
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
