import React from 'react';

export default function Footer() {
  return (
    <div className="w-100 mt-10 flex items-center justify-between bg-black py-1 text-gray-50 max-sm:flex-col sm:px-10 lg:py-2">
      <div className="flex items-center">
        <img
          src="/assets/Images/logo.png"
          alt="Logo"
          className="w-12 invert sepia"
        />
        <h1 className=" text-center text-sm font-semibold italic text-red-600 sm:text-lg md:text-xl">
          Bikers
        </h1>
      </div>
      <ul className="flex w-full justify-around sm:w-96">
        <li className="cursor-pointer text-xs hover:text-red-600 hover:underline lg:text-sm">
          Home
        </li>
        <li className="cursor-pointer text-xs hover:text-red-600 hover:underline lg:text-sm">
          About
        </li>
        <li className="cursor-pointer text-xs hover:text-red-600 hover:underline lg:text-sm">
          Contact Us
        </li>
        <li className="cursor-pointer text-xs hover:text-red-600 hover:underline lg:text-sm">
          News
        </li>
        <li className="cursor-pointer text-xs hover:text-red-600 hover:underline lg:text-sm">
          Privacy Policy
        </li>
      </ul>
    </div>
  );
}
