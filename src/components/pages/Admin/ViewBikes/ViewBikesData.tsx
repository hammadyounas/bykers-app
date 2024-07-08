import { bikesData } from 'constant/viewBikeData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import PaginationUI from '@/components/ui/PaginationUI';
import axios from 'axios';

const ITEMS_PER_PAGE = 8;
interface Bike {
  _id: string;
  name: string;
  images: string[];
  selling_price: string;
  condition: string;
  engine: string;
  total_mileage: string;
  petrol_capacity_per_litre: string;
  location: string;
  purchased_year: string;
  registered_in: string;
  type: string; 
  model: string;
  [key: string]: any;
}

const ViewBikesData: React.FC = () => {
  const [dropdownsVisible, setDropdownsVisible] = useState<boolean[]>(
    new Array(bikesData.length).fill(false),
  );
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bikes`, {
          params: {
            page: 1,
            limit: 10,
          },
        });
        const fetchedBikes = response.data.bikes;
        console.log('Fetched bikes:', fetchedBikes);

        // Fetch images for each bike
        const bikesWithImages = await Promise.all(
          fetchedBikes.map(async (bike: Bike) => {
            const images = await Promise.all(
              bike.images.map(async (imageId: string) => {
                const imageResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image/${imageId}`, {
                  responseType: 'blob',
                });
                return URL.createObjectURL(imageResponse.data);
              })
            );
            return { ...bike, images };
          })
        );

        setBikes(bikesWithImages);
      } catch (error) {
        console.error('Error fetching bikes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const toggleDropdown = (index: number) => {
    setDropdownsVisible((prev) => {
      const newDropdownsVisible = [...prev];
      newDropdownsVisible[index] = !newDropdownsVisible[index];
      return newDropdownsVisible;
    });
  };

  const totalPages = Math.ceil(bikes.length / ITEMS_PER_PAGE);
  const currentData = bikes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleItemClick = (bikeId: any) => {
      router.push(`/admin/viewBikes/details/${bikeId}`);
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
            <li className="sm:w-1/5 w-1/5 lg:py-6 py-2 px-1 text-center">Mileage</li>
            <li className="max-sm:hidden w-1/6  lg:py-6 py-2 px-1">
              Petrol Capacity
            </li>
            <li className="w-1/6 lg:py-6 py-2 px-1 text-center">Type</li>
          </div>
          <li className="w-[10%] lg:py-6 py-2 px-1 text-center">Action</li>
        </ul>
      </div>
      <div>
      {currentData.length === 0 && (
          <div className="flex justify-center items-center h-screen">
            <div className="text-center text-red-600">
              No Data Found
            </div>
          </div>
        )}
        {currentData.map((bike, index: number) => (
          <ul
            key={index}
            className="flex  lg:text-sm border-t sm:text-[0.6rem] text-[0.5rem] text-gray-900 cursor-pointer"
          >
            <div
              className="flex w-full items-center justify-between"
              onClick={() => handleItemClick(bike._id)}
            >
              <li className="w-1/5 lg:py-6 px-1 py-2">{bike.title}</li>
              <li className="w-1/4 lg:py-6 px-1 py-2">{bike.model}</li>
              <li className="w-1/6 lg:py-6 px-1 py-2">{bike.selling_price}</li>
              <li className="max-sm:hidden w-1/4 lg:py-6 px-1 py-2">
                {bike.engine}
              </li>
              <li className="sm:w-1/5 w-1/5 lg:py-6 px-1 py-2 text-center">
                {bike.total_mileage}
              </li>
              <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2 text-center">
                {bike.petrol_capacity_per_litre} L
              </li>
              <li
                className={`w-1/6 lg:py-1 py-1 px-1 rounded-full font-semibold text-center ${bike.condition === 'New' ? 'text-green-600' : 'text-red-600'}`}
              >
                {bike.condition}
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
                    onClick={() => handleItemClick(bike._id)}
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
