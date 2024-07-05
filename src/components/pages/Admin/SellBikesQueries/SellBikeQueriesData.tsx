import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationUI from '@/components/ui/PaginationUI';

const ITEMS_PER_PAGE = 8;

interface Bike {
  _id: string;
  title: string;
  model: string;
  images: string[]; // Assuming images are URLs
  selling_price: string;
  engine: string;
  purchased_year: string;
  contact?: {
    name: string;
    mobile_info: string;
  };
  approved?: boolean;
}

const SellBikeQueriesData: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [dropdownsVisibleStatus, setDropdownsVisibleStatus] = useState<boolean[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchBikes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bikes/list`, {
        params: {
          page: 1,
          limit: 10,
        },
      });
      const fetchedBikes: Bike[] = response.data.bikes.map((bike: Bike) => ({
        ...bike,
        images: [], // Replace with actual image loading logic
      }));
      setBikes(fetchedBikes);
      setDropdownsVisibleStatus(new Array<boolean>(fetchedBikes.length).fill(false));
    } catch (error) {
      console.error('Error fetching bikes:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBikes();
  }, []);

  const toggleDropdownStatus = (index: number) => {
    setDropdownsVisibleStatus(prev => {
      const newDropdownsVisibleStatus = [...prev];
      newDropdownsVisibleStatus[index] = !prev[index];
      return newDropdownsVisibleStatus;
    });
  };

  const handleStatusChange = async (bikeId: string, index?: number, newStatus?: string) => {
    try {
      if (!newStatus || index === undefined) return; // Exit early if newStatus is undefined or index is undefined
  
      // Update bike approval status based on newStatus
      const isResolved = newStatus === 'Resolved';
      const updatedApprovedStatus = isResolved ? true : false;
  
      // Patch request to update bike approval status
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/approve/${bikeId}`);
      if (response.status === 200) {
        setBikes(prevBikes => {
          const updatedBikes = [...prevBikes];
          if (updatedBikes[index]) { // Ensure index is defined here
            updatedBikes[index].approved = updatedApprovedStatus;
          }
          return updatedBikes;
        });
        fetchBikes();
      }
    } catch (error) {
      console.error('Error approving bike:', error);
      // Handle error state or notification here
    }
  };
  

  const handleItemClick = (bikeId: string) => {
    router.push(`/admin/sellBikeQueriesDetails/details/${bikeId}`);
  };

  const totalPages = Math.ceil(bikes.length / ITEMS_PER_PAGE);
  const currentData = bikes.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="sm:w-full w-full mx-auto">
      <div className="w-full">
        <ul className="flex justify-between border-t items-center mt-10 lg:text-sm sm:text-[0.6rem] text-[0.5rem] font-semibold text-gray-700">
          <div className="flex justify-between items-center w-full">
            <li className="sm:w-1/5 w-1/5 lg:py-6 py-2 px-1">Seller Name</li>
            <li className="max-sm:hidden w-1/6 lg:py-6 py-2 px-1">Contact No</li>
            <li className="w-1/5 lg:py-6 py-2 px-1 text-center">Bike Title</li>
            <li className="w-1/4 lg:py-6 py-2 px-1">Model</li>
            <li className="w-1/6 lg:py-6 py-2 px-1">Price</li>
            <li className="max-sm:hidden w-1/4 lg:py-6 py-2 px-1">Engine</li>
            <li className="w-1/6 lg:py-6 py-2 px-1 text-center">Year</li>
          </div>
          <li className="w-1/6 lg:py-6 py-2 px-1 text-center">Status</li>
          <li className="w-[10%] lg:py-6 py-2 px-1 text-center">Action</li>
        </ul>
      </div>
      <div>
        {currentData.map((bike, index) => (
          <ul key={index} className="flex capitalize lg:text-sm border-t sm:text-[0.6rem] text-[0.5rem] text-gray-900 cursor-pointer">
            <div className="flex w-full items-center justify-between" onClick={() => handleItemClick(bike._id)}>
              <li className="sm:w-1/5 w-1/5 lg:py-6 px-1 py-2">{bike.contact?.name}</li>
              <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2 ">{bike.contact?.mobile_info}</li>
              <li className="w-1/5 lg:py-6 px-1 py-2 text-center">{bike.title}</li>
              <li className="w-1/4 lg:py-6 px-1 py-2">{bike.model}</li>
              <li className="w-1/6 lg:py-6 px-1 py-2">{bike.selling_price}</li>
              <li className="max-sm:hidden w-1/4 lg:py-6 px-1 py-2">{bike.engine}</li>
              <li className={`w-1/6 lg:py-1 py-1 px-1 rounded-full text-center`}>{bike.purchased_year}</li>
            </div>
            <li className={`relative w-1/6 lg:py-1 py-1 px-1 rounded-full text-center capitalize flex justify-center items-center ${bike.approved ? 'text-green-600' : 'text-orange-600'}`} onClick={() => toggleDropdownStatus(index)}>
              {bike.approved ? 'Resolved' : 'Pending'}
              <i className="fa-solid fa-chevron-down ml-3 relative"></i>
              {dropdownsVisibleStatus[index] && (
                <ul className="absolute w-32 left-0 top-14 font-normal text-gray-800 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <li className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer" onClick={() => handleStatusChange(bike._id, index, 'Resolved')}>
                    Resolved
                  </li>
                  <li className="px-8 py-2 hover:bg-secondary-light hover:text-white cursor-pointer" onClick={() => handleStatusChange(bike._id, index, 'Pending')}>
                    Pending
                  </li>
                </ul>
              )}
            </li>
            <li className="relative w-[10%] lg:py-6 px-1 py-2 cursor-pointer text-center">
              <i className="fa-solid fa-ellipsis-vertical lg:text-lg" onClick={() => toggleDropdownStatus(index)}></i>
              {dropdownsVisibleStatus[index] && (
                <ul className="absolute w-32 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <li className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer"
                  onClick={() => handleItemClick(bike._id)}>
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
        <PaginationUI currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default SellBikeQueriesData;
