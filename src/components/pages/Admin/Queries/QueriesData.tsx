import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaginationUI from '@/components/ui/PaginationUI';
// import { useRouter } from 'next/router';

const ITEMS_PER_PAGE = 8;

interface Query {
  _id: string;
  name: string;
  email: string;
  images: string[]; // Assuming images are URLs
  phone_number: string;
  description: string;
  status?: string;
  interested_in_test_ride: boolean;
}

const QueriesData: React.FC = () => {
  const [query, setQueries] = useState<Query[]>([]);
  const [statusDropdownsVisible, setStatusDropdownsVisible] = useState<boolean[]>([]);
  const [actionDropdownsVisible, setActionDropdownsVisible] = useState<boolean[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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
      setActionDropdownsVisible(new Array<boolean>(fetchedQueries.length).fill(false));
      setStatusDropdownsVisible(new Array<boolean>(fetchedQueries.length).fill(false));
    } catch (error) {
      console.error('Error fetching queries:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDropdownStatus = (index: number) => {
    setStatusDropdownsVisible(prev => {
      const newDropdownsVisibleStatus = [...prev];
      newDropdownsVisibleStatus[index] = !prev[index];
      return newDropdownsVisibleStatus;
    });
  };

  const toggleDropdownAction = (index: number) => {
    setActionDropdownsVisible(prev => {
      const newDropdownsVisibleStatus = [...prev];
      newDropdownsVisibleStatus[index] = !prev[index];
      return newDropdownsVisibleStatus;
    });
  };

  const totalPages = Math.ceil(query.length / ITEMS_PER_PAGE);
  const currentData = query.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  
  const handleStatusChange = async (inquiryId: string, newStatus?: string) => {
    // if (!newStatus) return; // Exit early if newStatus is undefined
  
    try {
      // Patch request to update inquiry status
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/inquiry/${inquiryId}`,
        { status: newStatus } // Send the new status in the request body
      );
  
      if (response.status === 200) {
        // Update local state after successful API response
        console.log("Query status updated successfully");
        fetchQueries(); 
        // setQueries(prevQueries => prevQueries.map((query, idx) => {
        //   if (idx === index) {
        //     return { ...query, status: newStatus }; // Update status for the specific query
        //   }
        //   return query; // Return unchanged query for other indices
        // }));
      } else {
        console.error('Failed to update inquiry status:', response.data);
        // Handle error state or notification here
      }
    } catch (error) {
      console.error('Error updating inquiry status:', error);
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

  // const handleItemClick = (bikeId: string) => {
  //   router.push(`/admin/buyBikeQueries/details/${bikeId}`);
  // };

  return (
    <div className="sm:w-full w-full mx-auto overflow-x-auto">
      <div className="w-full">
        <ul className="flex justify-between items-center mt-10 lg:text-sm sm:text-[0.6rem] text-[0.5rem] font-semibold text-gray-700">
          <div className="flex justify-between items-center w-full">
            <li className="w-1/6 border-t lg:py-6 py-2 px-1">Name</li>
            <li className="max-sm:hidden w-1/4 border-t lg:py-6 py-2 px-1">Email</li>
            <li className="max-sm:hidden w-1/6 border-t lg:py-6 py-2 px-1">Contact</li>
            <li className="sm:w-1/3 w-1/2 border-t lg:py-6 py-2 px-1">Description</li>
            <li className="w-1/6 border-t lg:py-6 px-1 py-2 text-center">Status</li>
            <li className="w-[10%] border-t lg:py-6 px-1 py-2 text-center">Free Ride</li>
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
          <ul key={query._id} className="flex items-center sm:justify-center border-t justify-between xl:text-sm lg:text-xs sm:text-[0.6rem] text-[0.5rem] text-gray-900 cursor-pointer">
            <div className="flex w-full items-center justify-between"
              // onClick={() => handleItemClick(query._id)}
              >
              <li className="w-1/6 lg:py-6 px-1 py-2">{query.name}</li>
              <li className="max-sm:hidden w-1/4 lg:py-6 px-1 py-2">{query.email}</li>
              <li className="max-sm:hidden w-1/6 lg:py-6 px-1 py-2">{query.phone_number}</li>
              <li className="sm:w-1/3 w-1/2 lg:py-6 px-1 py-2">{query.description}</li>
              <li className={`w-1/6 relative text-center lg:py-6 px-1 py-2 font-semibold ${query.status === 'Resolved' ? 'text-green-600' : 'text-orange-600'}`} onClick={() => toggleDropdownStatus(index)}>
                {query.status === 'pending for contact'? 'Pending' : 'Resolved'}
                <i className="fa-solid fa-chevron-down ml-3 relative"></i>
                {statusDropdownsVisible[index] && (
                  <ul className="absolute w-32 left-0 mt-2 font-normal text-gray-800 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <li className="px-6 py-2 hover:bg-secondary-light hover:text-white cursor-pointer" onClick={() => handleStatusChange(query._id, 'Resolved')}>
                      Resolved
                    </li>
                    <li className="px-8 py-2 hover:bg-secondary-light hover:text-white cursor-pointer" onClick={() => handleStatusChange(query._id, 'pending for contact')}>
                      Pending
                    </li>
                    {/* Add other options here */}
                  </ul>
                )}
              </li>
              <li className={`w-[10%] text-center lg:py-6 px-1 py-2 font-semibold ${query.status === 'pending for contact' ? 'text-green-600' : 'text-red-600'}`}>
                {query.interested_in_test_ride === true ? 'Yes' : 'No'}
              </li>
            </div>
            <li className="relative w-[10%] lg:py-6 px-1 py-2 cursor-pointer text-center">
              <i className="fa-solid fa-ellipsis-vertical lg:text-lg" onClick={() => toggleDropdownAction(index)}></i>
              {actionDropdownsVisible[index] && (
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
