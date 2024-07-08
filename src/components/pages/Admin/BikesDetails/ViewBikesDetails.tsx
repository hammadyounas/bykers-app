import React, { useEffect, useState } from 'react';

import Title from '@/components/ui/Title';
import { useRouter } from 'next/router';
import axios from 'axios';

interface BikeDetailsProps {
  id: string;
  _id: string;
  title: string;
  model: string;
  images: string[]; // Assuming images are URLs
  selling_price: string;
  condition: string;
  engine: string;
  total_mileage: string;
  petrol_capacity_per_litre: string;
  location: string;
  purchased_year: string;
  registered_in: string;
  type: string; // Assuming this represents the bike type
  contact?: {
    name: string;
    mobile_info: string;
    email: string;
  };
  [key: string]: any; // Add this to allow any additional properties
}

export default function ViewBikesDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bike, setBike] = useState<BikeDetailsProps>({ // Initialize with an empty object
    id: '',
    _id: '',
    title: '',
    model: '',
    images: [],
    selling_price: '',
    condition: '',
    engine: '',
    total_mileage: '',
    petrol_capacity_per_litre: '',
    location: '',
    purchased_year: '',
    registered_in: '',
    type: '',
    contact: {
      name: '',
      mobile_info: '',
      email: '',
    },
  });
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

        // Ensure fetchedBike has images and handle accordingly
        const images = fetchedBike.images || [];
        const fetchedImages = await Promise.all(
          images.map(async (imageId: string) => {
            try {
              const imageResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image/${imageId}`, {
                responseType: 'blob',
              });
              return URL.createObjectURL(imageResponse.data);
            } catch (imageError) {
              console.error('Error fetching image:', imageError);
              return null; // Handle image fetching error gracefully
            }
          })
        );

        setBike({ ...fetchedBike, images: fetchedImages });
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

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBike({ ...bike, [name]: value });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setBike((prevState) => ({
        ...prevState,
        images: [...prevState.images, result],
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen flex-col py-20 max-lg:flex-col pt-10 mx-auto bg-white shadow-md items-center lg:p-5 p-2">
      <Title title="Admin Dashboard" />
      {bike && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10">
          {/* left */}
          <div className="flex flex-col items-center w-full">
            <div className="h-[55vh] w-full max-[425px]:h-[35vh] sm:h-[50vh]">
              <img
                src={bike.images[currentSlide]}
                alt={`image ${currentSlide}`}
                className="size-full"
              />
            </div>
            <div className="flex mt-4">
              {bike.images.map((src, index) => (
                <div
                  key={index}
                  className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index}`}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="flex shadow-md p-5 w-full">
            <div className="w-full">
              <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
                {bike.title}
              </h1>
              <div className="mt-5 w-full">
                {isEditing ? (
                  <form>
                    {Object.entries(bike).map(
                      ([key, value]) =>
                        key !== 'title' &&
                        key !== 'images' &&
                        key !== '_id' &&
                        key !== 'approved' && (
                          <div key={key} className="flex justify-between py-2">
                            <label className="text-xs text-gray-700 lg:text-sm capitalize">
                              {key}
                            </label>
                            {key === 'images' ? (
                              <div className="flex flex-col">
                                <input
                                  type="file"
                                  name={key}
                                  onChange={handleFileChange}
                                  className="max-lg:text-sm border py-1 rounded border-secondary-light px-6 mb-2"
                                />
                                <div className="flex">
                                  {bike.images.map((src, index) => (
                                    <div
                                      key={index}
                                      className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                                      onClick={() => handleThumbnailClick(index)}
                                    >
                                      <img
                                        src={src}
                                        alt={`Thumbnail ${index}`}
                                        className="w-full object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : typeof value === 'object' ? (
                              <div>
                                {/* Render object properties */}
                                {Object.entries(value).map(([objKey, objValue]) => (
                                  <div key={objKey} className="flex justify-between py-1">
                                    <span className="text-xs text-gray-700 lg:text-sm capitalize">
                                      {objKey}
                                    </span>
                                    <span className="max-lg:text-sm">{String(objValue)}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <input
                                type="text"
                                name={key}
                                value={value}
                                onChange={handleInputChange}
                                className="max-lg:text-sm border py-1 rounded border-secondary-light px-6"
                              />
                            )}
                          </div>
                        )
                    )}
                    <div className="mt-5">
                      <button
                        type="button"
                        className="px-10 py-2 bg-green-600 text-white font-medium rounded"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <div className="container mx-auto">
                      <div className="mt-5 grid grid-cols-2">
                        <div className="col-span-2  w-full xl:col-span-1 md:pr-8">
                          <div className="flex justify-between border-b-2 py-2 capitalize">
                            <p className="text-xs text-gray-700 lg:text-sm ">Name</p>
                            <p className="max-lg:text-sm max-md:text-xs ">
                              {bike.contact?.name}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2 capitalize">
                            <p className="text-xs text-gray-700 lg:text-sm ">Phone No</p>
                            <p className="max-lg:text-sm max-md:text-xs ">
                              {bike.contact?.mobile_info}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm ">Email</p>
                            <p className="max-lg:text-sm max-md:text-xs ">
                              {bike.contact?.email}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">Price</p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.selling_price}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">Model</p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.model}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">Engine</p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.engine}
                            </p>
                          </div>

                        </div>
                        <div className="col-span-2  w-full xl:col-span-1 md:pr-4">
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">
                              Condition
                            </p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.condition}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">
                              Petrol Capacity
                            </p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.petrol_capacity_per_litre}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">
                              Purchased Year
                            </p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.purchased_year}
                            </p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">
                              Location
                            </p>
                            <p className="max-lg:text-sm">{bike.location}</p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">
                              Registered In
                            </p>
                            <p className="max-lg:text-sm">{bike.registered_in}</p>
                          </div>
                          <div className="flex justify-between border-b-2 py-2">
                            <p className="text-xs text-gray-700 lg:text-sm">
                              Total Mileage
                            </p>
                            <p className="max-lg:text-sm max-md:text-xs">
                              {bike.total_mileage}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between border-b-2 py-2">
                        <p className="text-xs text-gray-700 lg:text-sm">
                          Description
                        </p>
                        <p className="max-lg:text-sm max-md:text-xs pl-2">{bike.description}</p>
                      </div>
                    </div>
                    <div className="mt-5 lg:text-base sm:text-sm text-xs">
                      <button
                        className="px-10 sm:py-2 py-1 bg-green-600 text-white font-medium rounded"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
