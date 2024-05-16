import React from 'react';

export default function Colors() {
  return (
    <div className="mx-auto mt-10 w-full bg-slate-100 py-10 sm:mt-20">
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[70%] xl:w-[60%]">
        <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
          Colors
        </h1>
        <p className="mt-5 text-xs lg:text-sm">
          Honda Pridor is available in 3 different colours - Black, Blue, and
          Red
        </p>
        <div className="mt-5 w-full bg-white p-3 text-xs lg:p-10 lg:text-sm">
          <div className="flex items-center justify-between sm:w-[50%] lg:w-[30%]">
            <div>
              <p className="size-12 rounded-full bg-black"></p>
              <p className="ml-2 mt-2">Black</p>
            </div>
            <div>
              <p className="size-12 rounded-full bg-blue-800"></p>
              <p className="ml-2 mt-2">Blue</p>
            </div>
            <div>
              <p className="size-12 rounded-full bg-red-600"></p>
              <p className="ml-3 mt-2">Red</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
