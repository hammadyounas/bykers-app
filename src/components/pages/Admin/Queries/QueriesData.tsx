import PaginationUI from "@/components/ui/PaginationUI";
import { queriesData } from "constant/QuriesDataConstant";
import React, { useState } from "react";

const ITEMS_PER_PAGE = 8;

const QueriesData: React.FC = () => {
  const [dropdownsVisible, setDropdownsVisible] = useState<boolean[]>(
    new Array(queriesData.length).fill(false)
  );
  const [dropdownsVisibleStatus, setDropdownsVisibleStatus] = useState<boolean[]>(
    new Array(queriesData.length).fill(false)
  );

  const [currentPage, setCurrentPage] = useState(1);

  const toggleDropdown = (index: number) => {
    setDropdownsVisible((prev) => {
      const newDropdownsVisible = [...prev];
      newDropdownsVisible[index] = !newDropdownsVisible[index];
      return newDropdownsVisible;
    });
  };

  const toggleDropdownStatus = (index: number) => {
    setDropdownsVisibleStatus((prev) => {
      const newDropdownsVisibleStatus = [...prev];
      newDropdownsVisibleStatus[index] = !newDropdownsVisibleStatus[index];
      return newDropdownsVisibleStatus;
    });
  };  


  const totalPages = Math.ceil(queriesData.length / ITEMS_PER_PAGE);
  const currentData = queriesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleItemClick = (index: number, status: string) => {
    console.log(index, status)
  };
  

  return (
    <div className="sm:w-full w-full mx-auto overflow-x-auto">
      <div className="w-full">
        <ul className="flex justify-between items-center  mt-10 lg:text-sm sm:text-[0.6rem] text-[0.5rem] font-semibold text-gray-700">
          <div className="flex justify-between items-center w-full">
          <li className="w-1/6 border-t lg:py-6 py-2 px-1">Name</li>
          <li className="max-sm:hidden w-1/6 border-t lg:py-6 py-2 px-1">Email</li>
          <li className="max-sm:hidden w-1/6 border-t lg:py-6 py-2 px-1">Contact</li>
          <li className=" sm:w-1/3 w-1/2 border-t lg:py-6 py-2 px-1">
            Description
          </li>
          <li className="w-1/6 border-t lg:py-6 px-1 py-2 text-center">
            Status
          </li>
          <li className="w-1/6 border-t lg:py-6 px-1 py-2 text-center">
            Free Ride
          </li>
          </div>
          <li className="w-[10%] border-t lg:py-6 px-1 py-2 text-center">
            Action
          </li>
        </ul>
      </div>
      <div>
        {currentData.map((bike, index: number) => (
          <ul
            key={index}
            className="flex items-center sm:justify-center border-t justify-between lg:text-sm sm:text-[0.6rem] text-[0.5rem] text-gray-900 cursor-pointer"
           
          >
            <div className="flex w-full items-center justify-between">
            <li className="w-1/6  lg:py-6 px-1 py-2">{bike.name}</li>
            <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2">{bike.email}</li>
            <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2">{bike.contact}</li>
            <li className="sm:w-1/3 w-1/2 lg:py-6 px-1 py-2">
              {bike.description}
            </li>
            <li
              className={`w-1/6 relative text-center lg:py-6 px-1 py-2  font-semibold ${bike.status === "Resolved" ? "text-green-600" : "text-orange-600"}` }
              onClick={() => toggleDropdownStatus(index)} >
              {bike.status}
              <i className="fa-solid fa-chevron-down ml-3 relative"></i>
              {dropdownsVisibleStatus[index] && (
                  <ul className="absolute w-32 left-0 mt-2 font-normal text-gray-800 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <li
                      className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer"
                      onClick={() => handleItemClick(index, 'Resolved')}
                    >
                      Resolved
                    </li>
                    <li
                      className="px-8 py-2 hover:bg-secondary-light hover:text-white cursor-pointer"
                      onClick={() => handleItemClick(index, 'Pending')}
                    >
                      Pending
                    </li>
                    <li
                      className="px-8 py-2 hover:bg-secondary-light hover:text-white cursor-pointer"
                      onClick={() => handleItemClick(index, 'Pending')}
                    >
                      Cancel
                    </li>
                    {/* Add other options here */}
                  </ul>
                )}
            </li>
            <li
              className={`w-1/6  text-center lg:py-6 px-1 py-2  font-semibold ${bike.freeRide === "Yes" ? "text-green-600" : "text-red-600"}`}
            >
              {bike.freeRide}
            </li>
            </div>
            <li
              className="relative w-[10%] lg:py-6 px-1 py-2 cursor-pointer text-center"
              onClick={() => toggleDropdown(index)}
            >
              <i className="fa-solid fa-ellipsis-vertical lg:text-lg"></i>
              {dropdownsVisible[index] && (
                <ul className="absolute w-32 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <li className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer">
                    <i className="fa-regular fa-eye mr-2"></i> View
                  </li>
                  <li className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer">
                    <i className="fa-solid fa-trash mr-2"></i> Delete
                  </li>
                </ul>
              )}
            </li>
          </ul>
        ))}
      </div>
      <div className="w-full flex justify-end items-end mt-5">
        <PaginationUI
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default QueriesData;
