import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-transparent text-white w-full flex justify-between items-center absolute top-0 z-1000">
      {/* Logo & Company Name */}
      <div className="ml-15 flex items-center space-x-1">
        <img src = "Logo-basic.svg" alt="" />
        <Link to="/" className="text-white hover:text-gray-400">
          <h1>DataCrawl</h1>
        </Link>
      </div>

      {/* Menu Items with Background Button */}
      <div className="mr-15 bg-[#313131] rounded-full baseline">
        <a href="#" class="p-3 px-6 pt-2 text-white">
          <ul className="grid grid-cols-5 gap-20">
            <li>
              <Link to="/Usage" className="text-white hover:text-gray-400">
                Usage
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/Support" className="text-white hover:text-gray-400">
                Support
              </Link>
            </li>
            <li>
              <Link to="/Investors" className="text-white hover:text-gray-400">
                Investors
              </Link>
            </li>
            <li>
              <Link to="/Team" className="text-white hover:text-gray-400">
                Team
              </Link>
            </li>
          </ul>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
