import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-6 px-4 bg-transparent text-white w-full flex justify-between items-center absolute top-0 z-1000">
      {/* Logo & Company Name */}
      <div className="ml-15 flex items-center space-x-3">
        <img src = "Logo-basic.svg" alt="" />

        <Link to="/" className="text-white hover:text-gray-400 font-semibold">
          <h1>DataCrawl</h1>
        </Link>
      </div>

      {/* Menu Items with Background Button */}
      <div className="mr-15 bg-[#313131] rounded-full px-6 py-3 text-white">
        <ul className="font-semibold flex space-x-12">
          <li>
            <span className="text-white hover:text-gray-400">
              Usage
            </span>
          </li>
          <li>
            <span className="text-white hover:text-gray-400">
              About
            </span>
          </li>
          <li>
            <span className="text-white hover:text-gray-400">
              Support
            </span>
          </li>
          <li>
            <span className="text-white hover:text-gray-400">
              Investors
            </span>
          </li>
          <li>
            <span className="text-white hover:text-gray-400">
              Team
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
