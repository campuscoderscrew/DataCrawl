import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white w-full flex justify-between items-center absolute top-0">
      <div className="ml-15">
        <Link to="/" className="text-white hover:text-gray-400">
          <h1>DataCrawl</h1>
        </Link>
      </div>

      <div className="mr-15">
        <ul className="grid grid-cols-3 gap-25">
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
      </div>
    </nav>
  );
}

export default Navbar;
