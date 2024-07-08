import React from 'react';

export default function Price() {
  return (
    <div className="mx-auto mt-10 w-full bg-slate-100 py-10 sm:mt-20">
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[70%] xl:w-[60%]">
        <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
          Honda Pridor Price
        </h1>
        <p className="mt-5 text-xs lg:text-sm">
          The current price of Honda Pridor is $ 18900
        </p>

        {/* prices */}
        <div>
          <ul className="mt-2 flex text-xs text-red-600 max-sm:flex-wrap lg:text-sm">
            <a href="#" className="hover:text-gray-700">
              <li>Honda Pridor 2023 Price |</li>
            </a>
            <a href="#" className="hover:text-gray-700">
              <li> Honda Pridor 2022 Price | </li>
            </a>

            <a href="#" className="hover:text-gray-700">
              <li> Honda Pridor 2021 Price | </li>
            </a>

            <a href="#" className="hover:text-gray-700">
              <li> Honda Pridor 2020 Price</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
