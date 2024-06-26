import { bikesData } from 'constant/viewBikeData';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import PaginationUI from '@/components/ui/PaginationUI';

const ITEMS_PER_PAGE = 8;

const ViewBikesData: React.FC = () => {
  const [dropdownsVisible, setDropdownsVisible] = useState<boolean[]>(
    new Array(bikesData.length).fill(false),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const toggleDropdown = (index: number) => {
    setDropdownsVisible((prev) => {
      const newDropdownsVisible = [...prev];
      newDropdownsVisible[index] = !newDropdownsVisible[index];
      return newDropdownsVisible;
    });
  };

  const totalPages = Math.ceil(bikesData.length / ITEMS_PER_PAGE);
  const currentData = bikesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleItemClick = (bike: any) => {
    if (bike.type === 'New') {
      router.push(`/admin/viewBikes/details`);
    } else if (bike.type === 'Old') {
      router.push(`/admin/viewBikes/details`);
    }
  };

  return (
    <div className="sm:w-full w-full mx-auto">
      <div className="w-full">
        <ul className="flex justify-between border-t items-center mt-10 lg:text-sm sm:text-[0.6rem] text-[0.5rem] font-semibold text-gray-700">
          <div className="flex justify-between items-center w-full">
            <li className="w-1/5 lg:py-6 py-2 px-1">Title</li>
            <li className="w-1/4 lg:py-6 py-2 px-1">Model</li>
            <li className="w-1/6 lg:py-6 py-2 px-1">Price</li>
            <li className="max-sm:hidden w-1/4 border-t lg:py-6 py-2 px-1">
              Engine
            </li>
            <li className="sm:w-1/5 w-1/5 lg:py-6 py-2 px-1">Displacement</li>
            <li className="max-sm:hidden w-1/6  lg:py-6 py-2 px-1">
              Petrol Capacity
            </li>
            <li className="w-1/6 lg:py-6 py-2 px-1 text-center">Type</li>
          </div>
          <li className="w-[10%] lg:py-6 py-2 px-1 text-center">Action</li>
        </ul>
      </div>
      <div>
        {currentData.map((bike, index: number) => (
          <ul
            key={index}
            className="flex  lg:text-sm border-t sm:text-[0.6rem] text-[0.5rem] text-gray-900 cursor-pointer"
          >
            <div
              className="flex w-full items-center justify-between"
              onClick={() => handleItemClick(bike)}
            >
              <li className="w-1/5 lg:py-6 px-1 py-2">{bike.title}</li>
              <li className="w-1/4 lg:py-6 px-1 py-2">{bike.model}</li>
              <li className="w-1/6 lg:py-6 px-1 py-2">{bike.price}</li>
              <li className="max-sm:hidden w-1/4 lg:py-6 px-1 py-2">
                {bike.engine}
              </li>
              <li className="sm:w-1/5 w-1/5 lg:py-6 px-1 py-2">
                {bike.displacement}
              </li>
              <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2 ">
                {bike.petrolCapacity}
              </li>
              <li
                className={`w-1/6 lg:py-1 py-1 px-1 rounded-full font-semibold text-center ${bike.type === 'New' ? 'text-green-600' : 'text-red-600'}`}
              >
                {bike.type}
              </li>
            </div>
            <li
              className="relative w-[10%] lg:py-6 px-1 py-2 cursor-pointer text-center"
              onClick={() => toggleDropdown(index)}
            >
              <i className="fa-solid fa-ellipsis-vertical lg:text-lg"></i>
              {dropdownsVisible[index] && (
                <ul className="absolute w-32 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <li
                    className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer"
                    onClick={() => handleItemClick(bike)}
                  >
                    <i className="fa-regular fa-eye mr-2"></i> View
                  </li>
                  {/* <li className="px-8 py-2 hover:bg-secondary-light hover:text-white cursor-pointer">
                    <i className="fa-regular fa-pen-to-square mr-2"></i> Edit
                  </li> */}
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

export default ViewBikesData;
