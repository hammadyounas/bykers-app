import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import BikeDetailSection from '../OldBikes/BikeDetailSection';
import SimilarAds from '../OldBikes/SimilarAds';

import Rating from '@/components/ui/Rating';
import Alternatives from '../NewBikes.tsx/Alternatives';
import BikesAds from '../NewBikes.tsx/BikesAds';
import Colors from '../NewBikes.tsx/Colors';
import Comparison from '../NewBikes.tsx/Comparison';
import ComparisonDropdown from '../NewBikes.tsx/ComparisonDropdown';
import Discussion from '../NewBikes.tsx/Discussion';
import Faq from '../NewBikes.tsx/Faq';
import Price from '../NewBikes.tsx/Price';
import ProsAndCons from '../NewBikes.tsx/ProsAndCons';
import Reviews from '../NewBikes.tsx/Reviews';
import Specifications from '../NewBikes.tsx/Specifications';


interface BikeDetailsProps {
  id: string;
  _id: string;
  title: string;
  images: string[]; // Assuming images are URLs
  selling_price: string;
  condition: string;
  engine: string;
  total_mileage: string;
  petrol_capacity_per_litre: string;
  type: string; // Assuming this represents the bike type
}

const BikeDetailsPage: React.FC<BikeDetailsProps> = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const [bike, setBike] = useState<BikeDetailsProps>({ // Initialize with an empty object
    id: '',
    _id: '',
    title: '',
    images: [],
    selling_price: '',
    condition: '',
    engine: '',
    total_mileage: '',
    petrol_capacity_per_litre: '',
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
    sliderRef.current?.slickGoTo(index);
  };

  interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

  const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/2 z-10 flex -translate-y-2/3 items-center bg-gray-300 text-2xl font-bold text-red-600 opacity-60 lg:text-3xl"
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 z-10 flex -translate-y-2/3 items-center bg-gray-300 text-2xl font-bold text-red-600 opacity-60 lg:text-3xl"
      onClick={onClick}
    >
      &lt;
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

  if (loading) {
    return <div>Loading...</div>; // Add your loading indicator here
  }

  return (
    <div>
      {bike?.condition === 'Old' ? (
        <div>
          <div className="flex min-h-screen w-full justify-center bg-slate-50 max-lg:flex-col mt-20 ">
            <div className="relative mx-3 border-2 border-gray-200 bg-white p-2 sm:mx-10 sm:p-10 lg:w-[50%] xl:w-[45%]">
              <div className="flex justify-between">
                <h1 className=" text-base font-bold text-black sm:text-lg lg:text-2xl">
                  {bike.title}
                </h1>
                <div>
                  <Link href={`/buyBikes?id=${bike._id}`}>
                    <p className="bg-secondary-light text-white px-6 py-1 rounded font-medium">
                      Buy A Bike
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-red-700">Washington, USA</h4>
                </div>
                <div>
                  <i className="fa-regular fa-heart text-lg text-red-600"></i>
                  <i className="fa-regular fa-bookmark ml-2 text-lg text-red-600"></i>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings}>
                {bike?.images.map((image: any, index: any) => (
                  <div key={index} className="mt-5 h-[55vh] w-full max-[425px]:h-[35vh] sm:h-[55vh]">
                    <img src={image} alt={`Slide ${index}`} className="size-full object-cover" />
                  </div>
                ))}
              </Slider>
              <div className="mt-5 flex w-full">
                {bike?.images.map((image: any, index: any) => (
                  <div
                    key={index}
                    className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index}`} className="size-full object-cover" />
                  </div>
                ))}
              </div>

              <div>
                <ul className="mt-5 flex w-full justify-between text-xs sm:text-sm lg:text-base">
                  <li className="w-full border border-gray-300 py-2 text-center">
                    <p><i className="fa-solid fa-calendar-days text-lg text-red-600"></i></p>
                    2024
                  </li>
                  <li className="w-full border border-gray-300 py-2 text-center">
                    <p><i className="fa-solid fa-gauge text-lg text-red-600"></i></p>
                    550 KM
                  </li>
                  <li className="w-full border border-gray-300 py-2 text-center">
                    <p><i className="fa-solid fa-gas-pump text-lg text-red-600"></i></p>
                    {bike.engine}
                  </li>
                </ul>
              </div>

              <div className="mt-5 grid w-full grid-cols-2 text-xs sm:text-sm">
                <div className="col-span-2 w-full sm:col-span-1 sm:pr-2">
                  <ul className="flex w-full justify-between border-y border-gray-300 py-1 sm:py-3">
                    <li>Registered In:</li>
                    <li>Lorem ipsum</li>
                  </ul>
                  <ul className="flex w-full justify-between border-y border-gray-300 py-1 sm:py-3">
                    <li>Body Type:</li>
                    <li>{bike.type}</li>
                  </ul>
                </div>
                <div className="col-span-2 w-full sm:col-span-1 sm:pl-2">
                  <ul className="flex w-full justify-between border-y border-gray-300 py-1 sm:py-3">
                    <li>Last Updated:</li>
                    <li>Feb 20, 2024</li>
                  </ul>
                  <ul className="flex w-full justify-between border-y border-gray-300 py-1 sm:py-3">
                    <li>Ad Ref #</li>
                    <li>342123</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="font-semibold sm:text-lg lg:text-xl">Seller&apos;s Comments</h2>
                <p className="mt-3 text-xs sm:text-sm">First owner</p>
                <p className="text-xs sm:text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <BikeDetailSection price={bike.selling_price} />
          </div>

          <div className="mx-auto w-full bg-slate-100 py-10 lg:py-20">
            <SimilarAds />
          </div>
        </div>
      ) : (
        <div>
          <div className="relative mx-3 bg-white p-2 sm:mx-10 mt-20 sm:p-10 lg:w-[100%]">
            <div className="mx-auto lg:w-[70%]">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <h1 className="text-base font-semibold text-black sm:text-lg lg:text-2xl">
                  {bike?.title}
                </h1>
                <div>
                  <Link href={`/buyBikes?id=${bike._id}`}>
                    <p className="bg-secondary-light text-white px-6 py-1 rounded font-medium">
                      Buy A Bike
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 flex border border-gray-300 p-2 max-lg:flex-col sm:p-10 lg:w-[70%]">
              <div className="sm:mt-10">
                <h1 className="text-xl font-bold text-red-600 lg:text-2xl">Price {bike?.selling_price}</h1>
                <Rating />
                <p className="mt-2 text-xs text-gray-700">21 Used Honda Pridor for Sale</p>
                <p className="mt-2 text-xs text-gray-700">37 Review | Write Review</p>
              </div>
              <div className="relative ml-auto w-[100%] max-lg:mt-5 lg:w-[50%]">
                <Slider ref={sliderRef} {...settings}>
                  {bike?.images.map((image: any, index: any) => (
                    <div key={index} className=" h-[55vh] max-[425px]:h-[35vh] sm:h-[40vh]">
                      <img src={image} alt={`Slide ${index}`} className="size-full" />
                    </div>
                  ))}
                </Slider>
                <div className="mt-5 flex w-full">
                  {bike?.images.map((image: any, index: any) => (
                    <div
                      key={index}
                      className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index}`} className="size-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto lg:w-[70%]">
              <ul className="flex w-full justify-between text-xs max-sm:flex-col sm:text-sm lg:text-base">
                <li className="flex w-full justify-center border border-gray-300 py-2 text-center">
                  <p className="pr-5">
                    <i className="fa-solid fa-gauge rounded-full bg-slate-100 p-3 text-xl text-red-600"></i>
                  </p>
                  <div>
                    <p className="text-xs">Mileage</p>
                    <p className="lg:text-lg">{bike?.total_mileage}</p>
                  </div>
                </li>
                <li className="flex w-full justify-center border border-gray-300 py-2 text-center">
                  <p className="pr-5">
                    <i className="fa-solid fa-gauge rounded-full bg-slate-100 p-3 text-xl text-red-600"></i>
                  </p>
                  <div>
                    <p className="text-xs">Transmission</p>
                    <p className="lg:text-lg">4- Speed</p>
                  </div>
                </li>
                <li className="flex w-full justify-center border border-gray-300 py-2 text-center">
                  <p className="pr-5">
                    <i className="fa-solid fa-gas-pump rounded-full bg-slate-100 p-3 text-xl text-red-600"></i>
                  </p>
                  <div>
                    <p className="text-xs">Fuel Tank Capacity</p>
                    <p className="lg:text-lg">{bike?.petrol_capacity_per_litre} L</p>
                  </div>
                </li>
                <li className="flex w-full justify-center border border-gray-300 py-2 text-center">
                  <p className="pr-5">
                    <i className="fa-solid fa-gas-pump rounded-full bg-slate-100 p-3 text-xl text-red-600"></i>
                  </p>
                  <div>
                    <p className="text-xs">Engine</p>
                    <p className="lg:text-lg">{bike?.engine}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Price />
          <ProsAndCons />
          <Specifications />
          <Colors />
          <Comparison />
          <ComparisonDropdown />
          <Reviews />
          <Discussion />
          <Faq />
          <Alternatives />
          <BikesAds />
        </div>
      )}
    </div>
  );
};

export default BikeDetailsPage;
