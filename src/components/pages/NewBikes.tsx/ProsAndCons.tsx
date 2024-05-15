import React from 'react';

export default function ProsAndCons() {
  return (
    <div className="mx-auto mt-20 w-[95%] sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-lg font-semibold text-black sm:text-xl lg:text-2xl">
        Honda Pridor Pros & Cons
      </h1>

      <div className="mt-5 grid w-full grid-cols-2 border border-gray-300 p-5 lg:p-10">
        <div className="col-span-2 sm:col-span-1">
          <ul className="text-xs lg:text-sm">
            <li className="text-lg font-semibold">What we like</li>
            <li className="mb-3 mt-5">
              <i className="fa-solid fa-check mr-2 font-semibold text-green-700"></i>{' '}
              Quick Resale because of Brand Name
            </li>
            <li className="mb-3">
              <i className="fa-solid fa-check mr-2 font-semibold text-green-700"></i>{' '}
              Easy Parts Availability
            </li>
            <li className="mb-3">
              <i className="fa-solid fa-check mr-2 font-semibold text-green-700"></i>{' '}
              Comfortable Ride Quality
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <ul className="text-xs lg:text-sm">
            <li className="text-lg font-semibold">What we dont't like</li>
            <li className="mb-3 mt-5">
              <i className="fa-solid fa-times mr-2 font-semibold text-red-700"></i>{' '}
              Compact Exterior Looks{' '}
            </li>
            <li className="mb-3">
              <i className="fa-solid fa-times mr-2 font-semibold text-red-700"></i>{' '}
              Same Shape from a Decade
            </li>
            <li className="mb-3">
              <i className="fa-solid fa-times mr-2 font-semibold text-red-700"></i>{' '}
              Lag in Power
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
