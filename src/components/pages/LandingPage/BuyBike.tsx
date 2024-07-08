import { BuyBikesConstant } from 'constant/BuyBikeConstant';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
}

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  description: string;
  interested_in_test_ride: boolean;
  [key: string]: string | boolean;// Index signature for dynamic keys
}


export default function BuyBike() {
  const router = useRouter();
  const { id } = router.query;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [info, setInfo] = useState('');
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
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_number: '',
    description: '',
    interested_in_test_ride: false,
  })

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (info) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);

      // Cleanup the timer on component unmount or when info changes
      return () => clearTimeout(timer);
    }
    // Add a return statement to satisfy the requirement of returning a value
    return;
  }, [info]);

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



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Fetch the id from router.query

    if (!id) {
      toast.error('Error: Bike ID not found.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          bike_id: id,
        }), // Include bikeId in the request body as JSON string
      });

      if (response.ok) {
        const responseData = await response.json();
        setInfo('Interest submitted successfully!');
        // toast.success(`Interest submitted successfully!`, {
        //   position: 'top-center',
        // });
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          description: '',
          interested_in_test_ride: false,
        });
        console.log(responseData);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Network or other error:', error);
      toast.error(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    }
  };


  const handleThumbnailClick = (index: any) => {
    setCurrentSlide(index);
  };

  const renderField = (item: { name: string; type: string; label: string }) => {
    switch (item.type) {
      case 'textarea':
        return (
          <>
            <label className="font-medium text-gray-700">{item.label}</label>
            <textarea
              className="mt-2 h-20 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              name={item.name}
              value={formData[item.name] as string}
              onChange={handleChange}
              required
            />
          </>
        );
      case 'checkbox':
        return (
          <>
            <input
              type="checkbox"
              className="mt-2 mr-2 rounded caret-gray-900 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              name={item.name}
              checked={formData[item.name] as boolean}
              onChange={handleChange}
            />
            <label className="font-medium text-gray-700">{item.label}</label>
          </>
        );
      default:
        return (
          <>
            <label className="font-medium text-gray-700">{item.label}</label>
            <input
              className="mt-2 w-full rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              type={item.type}
              name={item.name}
              value={formData[item.name] as string}
              onChange={handleChange}
              required
            />
          </>
        );
    }
  };


  return (
    <>
      <div className='lg:pt-32 sm:pt-20 pt-10'>
        {/* <ToastContainer /> */}
        <div className="flex max-lg:flex-col w-full justify-between xl:min-h-[90vh] 2xl:min-h-[95vh] xl:px-20 lg:px-10 px-5">
          <div className="mx-auto flex flex-col max-md:pt-20 max-lg:flex-col xl:w-[60%] lg:w-[70%] w-full">
            {/* Display bike details */}

            {bike &&
              <div
                className="mt-5 xl:w-[90%] md:w-[90%] w-full sm:mt-0 lg:text-base sm:text-sm text-xs mx-auto"
              >
                <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
                  Specifications
                </h1>
                <div className="flex flex-col justify-center items-center w-full mt-10">
                  <div className="h-[55vh] max-[425px]:h-[35vh] sm:h-[50vh]">
                    <img
                      src={bike.images[currentSlide]}
                      alt={`image ${currentSlide}`}
                      className="size-full "
                    />
                  </div>
                  <div className="flex mt-4">
                    {bike.images.map((src: any, index: any) => (
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

                <div className="mt-5 grid grid-cols-2">
                  <div className="col-span-2  w-full xl:col-span-1 md:pr-8">
                    <div className="flex justify-between border-b-2 py-2">
                      <p className="text-xs text-gray-700 lg:text-sm">Title</p>
                      <p className="max-lg:text-sm max-md:text-xs">
                        {bike.title}
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
                    <div className="flex justify-between border-b-2 py-2">
                      <p className="text-xs text-gray-700 lg:text-sm">
                        Total Mileage
                      </p>
                      <p className="max-lg:text-sm max-md:text-xs">
                        {bike.total_mileage}
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
                  </div>
                </div>
              </div>
            }

            {/* Add other bike details as needed */}
          </div>
          <div className="mx-auto flex flex-col max-lg:pt-5 max-md:pt-10 max-lg:flex-col xl:w-[40%] lg:w-[60%] w-full">
            <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
              Contact Us For Buy Bike
            </h1>

            <div className="mt-5 w-[100%] sm:mt-10">
              <form
                className="-mx-4 flex  flex-wrap text-xs sm:text-sm lg:text-base xl:w-[90%]"
                onSubmit={handleSubmit}
              >
                {BuyBikesConstant.map((item) => (
                  <div
                    className="mb-4 w-full px-4  lg:w-full sm:w-1/2"
                    key={item.name}
                  >
                    {renderField(item)}
                  </div>
                ))}

                {visible && (
                  <div className='text-base text-green-600 text-center font-semibold sm:ml-5'>
                    {info}
                  </div>
                )}



                <div className="mx-4 mt-5 w-full">
                  <button
                    className="sm:w-[20%] w-full rounded bg-secondary py-2 font-semibold text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
