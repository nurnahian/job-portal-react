import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkActive = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="max-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="./index.html"
            >
              <img className="h-10 w-auto" src="" alt="Logo" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </a>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  className="bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  href="./index.html"
                >
                  Home
                </a>
                <a
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  href="./jobs.html"
                >
                  Jobs
                </a>
                <a
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  href="./adjob.html"
                >
                  Add Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
