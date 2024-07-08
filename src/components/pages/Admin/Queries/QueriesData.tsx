import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationUI from '@/components/ui/PaginationUI';

const ITEMS_PER_PAGE = 8;

interface Query {
  _id: string;
  name: string;
  email: string;
  images: string[]; // Assuming images are URLs
  phone_number: string;
  description: string;
  status?: string;
}

const QueriesData: React.FC = () => {
  const [query, setQueries] = useState<Query[]>([]);
  const [dropdownsVisibleStatus, setDropdownsVisibleStatus] = useState<boolean[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  // const [editedStatusIndex, setEditedStatusIndex] = useState<number | null>(null);
  // const [localData, setLocalData] = useState<any[]>(queriesData as Queries[]); // Assuming queriesData is defined elsewhere

  useEffect(() => {
    fetchQueries(); // Initial fetch when component mounts
  }, []);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/inquiries`, {
        params: {
          page: currentPage, // Adjusted to fetch based on currentPage
          limit: ITEMS_PER_PAGE,
        },
      });
      const fetchedQueries: Query[] = response.data; // Assuming response directly provides an array of queries
      setQueries(fetchedQueries);
      setDropdownsVisibleStatus(new Array<boolean>(fetchedQueries.length).fill(false));
    } catch (error) {
      console.error('Error fetching queries:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdownStatus = (index: number) => {
    setDropdownsVisibleStatus(prev => {
      const newDropdownsVisibleStatus = [...prev];
      newDropdownsVisibleStatus[index] = !prev[index];
      return newDropdownsVisibleStatus;
    });
  };

  const totalPages = Math.ceil(query.length / ITEMS_PER_PAGE);
  const currentData = query.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleStatusChange = async (bikeId: string, index?: number, newStatus?: string) => {
    try {
      if (!newStatus) return; // Exit early if newStatus is undefined

      // Update bike approval status based on newStatus
      const isResolved = newStatus === 'Resolved';
      const updatedApprovedStatus = isResolved ? true : false;

      // Patch request to update bike approval status
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/inquiry/${bikeId}`);
      console.log(response, updatedApprovedStatus, index)
      // if (response.status === 200) {
      //   setQueries(prevBikes => {
      //     const updatedQueries = [...prevBikes];
      //     if (index !== undefined && updatedQueries[index]) {
      //       updatedQueries[index].status? = updatedApprovedStatus;
      //     }
      //     return updatedQueries;
      //   });
      //   fetchQueries();
      // }
    } catch (error) {
      console.error('Error approving bike:', error);
      // Handle error state or notification here
    }
  };


  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page and fetch new data
    fetchQueries();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="sm:w-full w-full mx-auto overflow-x-auto">
      <div className="w-full">
        <ul className="flex justify-between items-center mt-10 lg:text-sm sm:text-[0.6rem] text-[0.5rem] font-semibold text-gray-700">
          <div className="flex justify-between items-center w-full">
            <li className="w-1/6 border-t lg:py-6 py-2 px-1">Name</li>
            <li className="max-sm:hidden w-1/6 border-t lg:py-6 py-2 px-1">Email</li>
            <li className="max-sm:hidden w-1/6 border-t lg:py-6 py-2 px-1">Contact</li>
            <li className="sm:w-1/3 w-1/2 border-t lg:py-6 py-2 px-1">Description</li>
            <li className="w-1/6 border-t lg:py-6 px-1 py-2 text-center">Status</li>
            <li className="w-1/6 border-t lg:py-6 px-1 py-2 text-center">Free Ride</li>
          </div>
          <li className="w-[10%] border-t lg:py-6 px-1 py-2 text-center">Action</li>
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
        {currentData.map((query, index) => (
          <ul key={query._id} className="flex items-center sm:justify-center border-t justify-between lg:text-sm sm:text-[0.6rem] text-[0.5rem] text-gray-900 cursor-pointer">
            <div className="flex w-full items-center justify-between">
              <li className="w-1/6 lg:py-6 px-1 py-2">{query.name}</li>
              <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2">{query.email}</li>
              <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2">{query.phone_number}</li>
              <li className="sm:w-1/3 w-1/2 lg:py-6 px-1 py-2">{query.description}</li>
              <li className={`w-1/6 relative text-center lg:py-6 px-1 py-2 font-semibold ${query.status === 'Resolved' ? 'text-green-600' : 'text-orange-600'}`} onClick={() => toggleDropdownStatus(index)}>
                {query.status === 'pending for contact'? 'Pending' : 'Approved'}
                <i className="fa-solid fa-chevron-down ml-3 relative"></i>
                {dropdownsVisibleStatus[index] && (
                  <ul className="absolute w-32 left-0 mt-2 font-normal text-gray-800 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <li className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer" onClick={() => handleStatusChange(query._id, index, 'Resolved')}>
                      Resolved
                    </li>
                    <li className="px-8 py-2 hover:bg-secondary-light hover:text-white cursor-pointer" onClick={() => handleStatusChange(query._id, index, 'Pending')}>
                      Pending
                    </li>
                    {/* Add other options here */}
                  </ul>
                )}
              </li>
              <li className={`w-1/6 text-center lg:py-6 px-1 py-2 font-semibold ${query.status === 'pending for contact' ? 'text-green-600' : 'text-red-600'}`}>
                {query.status === 'pending for contact' ? 'Yes' : 'No'}
              </li>
            </div>
            <li className="relative w-[10%] lg:py-6 px-1 py-2 cursor-pointer text-center">
              <i className="fa-solid fa-ellipsis-vertical lg:text-lg"></i>
              {dropdownsVisibleStatus[index] && (
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
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default QueriesData;
