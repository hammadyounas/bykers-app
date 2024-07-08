import React from 'react';

export default function ProsAndCons() {
  return (
    <div className="mx-auto mt-10 w-[95%] sm:mt-20 sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Honda Pridor Pros & Cons
      </h1>

      <div className="mt-5 grid w-full grid-cols-2 border border-gray-300 p-5 lg:p-10">
        <div className="col-span-2 sm:col-span-1">
          <ul className="text-xs lg:text-sm">
            <li className="text-lg font-semibold">
              <i className="fa-solid fa-thumbs-up mr-3 rounded-full bg-slate-200 p-2 text-green-700"></i>
              What we like
            </li>
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
            <li className="text-lg font-semibold">
              <i className="fa-solid fa-thumbs-down mr-3 rounded-full bg-slate-200 p-2 text-red-700"></i>
              What we don&apos;t like
            </li>
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
