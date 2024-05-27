import { BuyBikesConstant } from 'constant/BuyBikeConstant';
import React from 'react'

export default function BuyBike() {
    const renderField = (item: { name: string; type: string; label: string }) => {
        switch (item.type) {
          case 'textarea':
            return (
              <textarea
                className="mt-2 h-20 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
                name={item.name}
              />
            );
          case 'checkbox':
            return (
              <input
                type='checkbox'
                className="mt-2 ml-2 rounded caret-gray-900 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
                name={item.name}
              />
            );
          default:
            return (
              <input
                className="mt-2 w-full rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
                type={item.type}
                name={item.name}
              />
            );
        }
      };
    
  return (
    <>
    <div className="mx-auto min-h-[90vh] flex w-[95%] flex-col items-center justify-center pt-20 max-lg:flex-col sm:w-[90%] sm:pt-32 lg:w-[70%] xl:w-[50%]">
      <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
        Add Bike Details
      </h1>


      <div className="mt-5 w-[100%] sm:mt-10">
        <form className="-mx-4 flex flex-wrap text-xs sm:text-sm lg:text-base">
          {BuyBikesConstant.map(
            (item) => (
              <div className="mb-4 w-full px-4 sm:w-1/2" key={item.name}>
                <label className="font-medium text-gray-700">
                  {item.label}
                </label>
                {renderField(item)}
              </div>
            ),
          )}

          <div className="mx-4 mt-5 w-full">
            <button
              className="w-full rounded bg-secondary py-2 font-semibold text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  </>
  )
}
