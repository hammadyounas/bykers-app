import React from 'react';

export default function Comparison() {
  return (
    <div className="mx-auto mt-10 w-[95%] sm:mt-20 sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Comparison
      </h1>

      <div className="mt-5">
        <div className="flex w-[100%] justify-between border border-gray-300 p-5 max-sm:flex-col lg:w-[80%] lg:p-10">
          <div className="sm:w-[70%] ">
            <div className="flex items-center justify-center">
              <div className="">
                <img
                  src="/assets/Images/bike5.png"
                  alt="bike 1"
                  className="w-[60%]"
                />
                <p className="mt-5 text-sm font-semibold text-red-600 sm:text-lg">
                  Suzuki Sprinter ECO
                </p>
              </div>
              <div className="pr-5 sm:-ml-12">
                <p className="rounded-full bg-red-700 p-2 font-bold text-white max-sm:text-sm sm:p-4">
                  VS
                </p>
              </div>
              <div className="">
                <img
                  src="/assets/Images/bike5.png"
                  alt="bike 1"
                  className="w-[60%]"
                />
                <p className="mt-5 text-sm font-semibold text-red-600 sm:text-lg">
                  Suzuki Sprinter ECO
                </p>
              </div>
            </div>
            <div className="mt-4 w-[90%]">
              <button className="w-full border border-red-600 p-1 max-sm:text-sm">
                View Comparison
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between max-sm:text-sm sm:w-[30%] sm:flex-col sm:justify-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-2">Unique UD 100</h2>
              <span className="rounded-full bg-red-700 px-2 py-1 text-sm font-semibold text-white ">
                VS
              </span>
              <h2 className="mt-2">Honda Pridor</h2>
            </div>
            <div className="flex flex-col items-center justify-center sm:mt-5">
              <h2 className="mb-2">Suzuki Raider 10</h2>
              <span className="rounded-full bg-red-700 px-2 py-1 text-sm font-semibold text-white ">
                VS
              </span>
              <h2 className="mt-2">Honda Pridor</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
