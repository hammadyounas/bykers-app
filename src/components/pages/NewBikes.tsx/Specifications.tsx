import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface BikeDetailsProps {
  id: string;
  _id: string;
  title: string;
  model: string;
  selling_price: string;
  condition: string;
  engine: string;
  total_mileage: string;
  petrol_capacity_per_litre: string;
  location: string;
  purchased_year: string;
  registered_in: string;
  type: string;
  [key: string]: any; // Assuming this represents the bike type
}

export default function Specifications() {
  const router = useRouter();
  const { id } = router.query;
  const [bike, setBike] = useState<BikeDetailsProps>({ // Initialize with an empty object
    id: '',
    _id: '',
    title: '',
    model: '',
    selling_price: '',
    condition: '',
    engine: '',
    total_mileage: '',
    petrol_capacity_per_litre: '',
    location: '',
    purchased_year: '',
    registered_in: '',
    type: '',
  });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBike = async () => {
      setLoading(true);
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/bike/${id}`;
        console.log('API URL:', apiUrl);

        const response = await axios.get(apiUrl);
        console.log('API Response:', response);

        // Check if response.data has the expected structure
        if (!response.data || !response.data._id) {
          console.error('Invalid API response:', response.data);
          setLoading(false);
          return;
        }

        // Assuming 'bike' object is directly nested in response.data
        const fetchedBike = response.data;
        console.log('Fetched bike:', fetchedBike);


        setBike({ ...fetchedBike });
      } catch (error) {
        console.error('Error fetching bike:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBike();
    }
  }, [id]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div className="mx-auto mt-10 w-[95%] sm:mt-20 sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Specifications
      </h1>
      {bike && (
        <div className="mt-5 grid grid-cols-2 capitalize">
          <div className="col-span-2 w-full md:col-span-1 md:pr-4">
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Title</p>
              <p className="max-lg:text-sm">{bike.title}</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Price</p>
              <p className="max-lg:text-sm">{bike.selling_price}</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Model</p>
              <p className="max-lg:text-sm">{bike.model}</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Engine</p>
              <p className="max-lg:text-sm">{bike.engine}</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Total Mileage</p>
              <p className="max-lg:text-sm">{bike.total_mileage}</p>
            </div>
            {/* <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Bore & Stroke</p>
            <p className="max-lg:text-sm">50.0 x 49.5 mm</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Petrol Capacity</p>
            <p className="max-lg:text-sm">9.7L</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Starting</p>
            <p className="max-lg:text-sm">Kick start</p>
          </div> */}
          </div>

          <div className="col-span-2 w-full md:col-span-1 md:pl-4">
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">
                Petrol Capacity
              </p>
              <p className="max-lg:text-sm">{bike.petrol_capacity_per_litre} L</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Location</p>
              <p className="max-lg:text-sm">{bike.location}</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Perchased Year</p>
              <p className="max-lg:text-sm">{bike.purchased_year}</p>
            </div>
            <div className="flex justify-between border-b-2 py-2">
              <p className="text-xs text-gray-700 lg:text-sm">Registered In</p>
              <p className="max-lg:text-sm">{bike.registered_in}</p>
            </div>
            {/* <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">
              Compression Ratio
            </p>
            <p className="max-lg:text-sm">9.0:1</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Fuel Average</p>
            <p className="max-lg:text-sm">45.0 KM/L</p>
          </div>
          <div className="flex justify-between border-b-2 py-2">
            <p className="text-xs text-gray-700 lg:text-sm">Top Speed</p>
            <p className="max-lg:text-sm">100 KM/H</p>
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
