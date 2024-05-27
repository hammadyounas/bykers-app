import React from "react";

export default function Specifications() {
  return (
    <div className="mx-auto mt-10 w-[95%] sm:mt-20 sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Specifications
      </h1>

      <div className="mt-5 grid grid-cols-2">
        <div className="col-span-2  w-full md:col-span-1 md:pr-4">
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Price</p>
            <p className="max-lg:text-sm">$ 10000</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Engine</p>
            <p className="max-lg:text-sm">4-Stroke OHC Air-Cooled</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Clutch</p>
            <p className="max-lg:text-sm">Multiple wet plates</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Horsepower</p>
            <p className="max-lg:text-sm">7.5 HP @ 8500.0 RPM</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Bore & Stroke</p>
            <p className="max-lg:text-sm">50.0 x 49.5 mm</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Petrol Capacity</p>
            <p className="max-lg:text-sm">9.7L</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Starting</p>
            <p className="max-lg:text-sm">Kick start</p>
          </div>
        </div>

        <div className="col-span-2  w-full md:col-span-1 md:pl-4">
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">
              Dimension (Lxwxh)
            </p>
            <p className="max-lg:text-sm">1986 x 718 x 1050 mm</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Displacement</p>
            <p className="max-lg:text-sm">100 cc</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Transmission</p>
            <p className="max-lg:text-sm">4-speed</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Torque</p>
            <p className="max-lg:text-sm">7.2 Nm @ 5500.0 RPM</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">
              Compression Ratio
            </p>
            <p className="max-lg:text-sm">9.0:1</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Fuel Average</p>
            <p className="max-lg:text-sm">45.0 KM/L</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Top Speed</p>
            <p className="max-lg:text-sm">100 KM/H</p>
          </div>
        </div>
      </div>
    </div>
  );
}
