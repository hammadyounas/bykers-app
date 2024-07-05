import React from 'react';

import Title from '../../../ui/Title';
import SellBikeQueriesData from './SellBikeQueriesData';

export default function SellBikesQueries() {
  // const [selectedTypes, setSelectedTypes] = useState<string>("");
  // const allTypes = [
  //   { value: "old-bikes", label: "Old Bikes" },
  //   { value: "new-bikes", label: "New Bikes" },
  // ];
  
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center py-20 max-lg:flex-col pt-10 mx-auto bg-white shadow-md w-[95%] items-center lg:w-[100%] lg:p-5 p-2">
        <Title title="Admin Dashboard" />
        <div className="mt-10 mx-auto flex bg-white shadow-md w-[95%] flex-col items-center justify-center  max-lg:flex-col lg:w-[100%] lg:p-5 p-2">
          <div className="flex max-sm:flex-col justify-between items-center w-full">
            <div className="lg:w-[20%] sm:w-[40%] w-full max-sm:text-center max-sm:mb-2">
              <h1 className="sm:text-base text-sm font-medium text-gray-800 lg:text-xl">
                Sell Bike Queries
              </h1>
            </div>
            <div className="xl:w-[20%] lg:w-[75%] flex max-sm:flex-wrap w-[100%]">
              <input
                type="search"
                placeholder="Search..."
                className="input-style w-full rounded bg-white border border-gray-300 text-sm focus:outline-none px-4 py-2"
              />
            </div>
          </div>
          <SellBikeQueriesData />
        </div>
      </div>
    </>
  );
}
