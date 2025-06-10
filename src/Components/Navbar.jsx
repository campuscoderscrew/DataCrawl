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
            <Link to="/Search" className="text-white hover:text-gray-400">
              Search
            </Link>
          </li>
          <li>
            <Link to="/Results" className="text-white hover:text-gray-400">
              Results
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
