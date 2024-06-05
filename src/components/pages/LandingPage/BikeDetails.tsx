import {
  newBikeConstant,
  oldBikeConstant,
} from 'constant/OldAndNewBikesConstant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

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
import BikeDetailSection from '../OldBikes/BikeDetailSection';
import SimilarAds from '../OldBikes/SimilarAds';

export default function BikeDetailsPage() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
    sliderRef.current?.slickGoTo(index);
  };
  const router = useRouter();
  const { alt } = router.query; // Get the bike title from the URL parameter

  let bike: any;
  if (alt) {
    bike = newBikeConstant.find((item) => item.alt === alt);
    if (!bike) {
      bike = oldBikeConstant.find((item) => item.alt === alt);
    }
  }

  // State to track the currently selected image
  const [selectedImage] = useState(bike?.src[0] || '');

  // const handleImageClick = (image: any) => {
  //   // Update the selected image when any map image is clicked
  //   setSelectedImage(image);
  // };

  if (!bike) {
    // Handle case where bike is not found
    return <div>Bike not found</div>;
  }

  return (
    <>
      {bike.type === 'Old' ? (
        <div>
          <div className="flex min-h-screen w-full justify-center bg-slate-50 max-lg:flex-col mt-20 ">
            <div className="relative mx-3 border-2 border-gray-200 bg-white p-2 sm:mx-10 sm:p-10 lg:w-[50%] xl:w-[45%]">
              <div className="flex justify-between">
                <h1 className=" text-base font-bold text-black sm:text-lg lg:text-2xl">
                  {bike.title}
                </h1>
                {/* buy a bike */}
                <div className="">
                  <Link href={'/buyBikes'}>
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
                {bike.src.map((image: any, index: any) => (
                  <div
                    key={index}
                    className="mt-5 h-[55vh] w-full max-[425px]:h-[35vh] sm:h-[55vh]"
                  >
                    <img
                      src={selectedImage || image}
                      alt={`Slide ${index}`}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-5 flex w-full">
                {bike.src.map((image: any, index: any) => (
                  <div
                    key={index}
                    className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <ul className="mt-5 flex w-full justify-between text-xs sm:text-sm lg:text-base">
                  <li className="w-full border border-gray-300 py-2 text-center">
                    <p>
                      <i className="fa-solid fa-calendar-days text-lg text-red-600"></i>
                    </p>
                    2024
                  </li>
                  <li className="w-full border border-gray-300 py-2 text-center">
                    <p>
                      <i className="fa-solid fa-gauge text-lg text-red-600"></i>
                    </p>
                    550 KM
                  </li>
                  <li className="w-full border border-gray-300 py-2 text-center">
                    <p>
                      <i className="fa-solid fa-gas-pump text-lg text-red-600"></i>
                    </p>
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
                <h2 className="font-semibold sm:text-lg lg:text-xl">
                  Seller&apos;s Comments
                </h2>
                <p className="mt-3 text-xs sm:text-sm">First owner</p>
                <p className="text-xs sm:text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <BikeDetailSection price={bike.price} />
          </div>

          <div className=" mx-auto w-full bg-slate-100 py-10  lg:py-20">
            <SimilarAds />
          </div>
        </div>
      ) : (
        <div>
          <div className="relative mx-3 bg-white p-2 sm:mx-10 mt-20 sm:p-10 lg:w-[100%]">
            <div className="mx-auto lg:w-[70%]">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <h1 className=" text-base font-semibold text-black sm:text-lg lg:text-2xl">
                  {bike.title}
                </h1>
                {/* buy a bike */}
                <div className="">
                  <Link href={'/buyBikes'}>
                    <p className="bg-secondary-light text-white px-6 py-1 rounded font-medium">
                      Buy A Bike
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 flex border border-gray-300 p-2 max-lg:flex-col sm:p-10 lg:w-[70%]">
              <div className="sm:mt-10">
                <h1 className="text-xl font-bold text-red-600 lg:text-2xl">
                  Price {bike.price}
                </h1>
                <Rating />
                <p className="mt-2 text-xs text-gray-700">
                  21 Used Honda Pridor for Sale
                </p>
                <p className="mt-2 text-xs text-gray-700">
                  37 Review | Write Review
                </p>
              </div>
              <div className="relative ml-auto w-[100%] max-lg:mt-5 lg:w-[50%]">
                <Slider ref={sliderRef} {...settings}>
                  {bike.src.map((image: any, index: any) => (
                    <div
                      key={index}
                      className=" h-[55vh] max-[425px]:h-[35vh] sm:h-[40vh]"
                    >
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="size-full"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="mt-5 flex w-full">
                  {bike.src.map((image: any, index: any) => (
                    <div
                      key={index}
                      className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto lg:w-[70%]">
              <ul className=" flex w-full justify-between text-xs max-sm:flex-col sm:text-sm lg:text-base">
                <li className="flex w-full justify-center border border-gray-300 py-2 text-center">
                  <p className="pr-5">
                    <i className="fa-solid fa-gauge rounded-full bg-slate-100 p-3 text-xl text-red-600"></i>
                  </p>
                  <div>
                    <p className="text-xs">Fuel Average</p>
                    <p className="lg:text-lg">{bike.fuelAverage}</p>
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
                    <p className="lg:text-lg">{bike.petrolCapacity}</p>
                  </div>
                </li>
                <li className="flex w-full justify-center border border-gray-300 py-2 text-center">
                  <p className="pr-5">
                    <i className="fa-solid fa-gas-pump rounded-full bg-slate-100 p-3 text-xl text-red-600"></i>
                  </p>
                  <div>
                    <p className="text-xs">Engine</p>
                    <p className="lg:text-lg">{bike.engine}</p>
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

      {/* extra */}
      {/* <div className="mx-auto flex w-full justify-center max-lg:flex-col lg:mt-20 lg:h-screen">
      <div className="h-[50vh] w-[100%] max-lg:mx-auto lg:w-[50%]  xl:h-[70vh]">
        <div className="h-[45vh] overflow-hidden object-fill p-5 max-[375px]:h-[40vh] sm:h-[70vh] lg:h-[50vh] lg:w-[90%] xl:h-[60vh]">
          <img
            src={selectedImage}
            alt={bike.alt}
            className="mx-auto object-cover sm:w-[80%] lg:w-[100%]"
          />
        </div>

        <div className="mx-auto  mt-5 flex items-center max-sm:justify-center sm:mt-10 sm:w-[30%] lg:w-[60%]">
          {bike.src.map((image: any, index: any) => (
            <img
              key={index}
              src={image}
              alt={bike.alt}
              className="mr-5 size-14 cursor-pointer border-2 border-red-600 lg:size-20"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      <div className="mx-5 mt-20 flex flex-col max-lg:mt-52 max-sm:mt-20 sm:mx-10 sm:w-[70%] lg:w-[40%] ">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-4xl">
          {bike.title}
        </h1>
        <div className="mt-5 grid grid-cols-3 text-xs shadow-md shadow-gray-500 sm:text-sm lg:text-base">
          <div className="col-span-1 flex flex-col font-semibold text-red-600 ">
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              Price:{' '}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              Location:{' '}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              Model:{' '}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              Brand:{' '}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              Posted At:{' '}
            </p>
            <p className="py-2 pl-2 sm:pl-3 lg:py-3">Description: </p>
          </div>
          <div className="col-span-2">
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              $ {bike.price}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              {bike.location}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              {bike.model}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              {bike.brand}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              {bike.postedAt}
            </p>
            <p className="py-2 pl-2 shadow-md shadow-gray-500 sm:pl-3 lg:py-3">
              {bike.description}
            </p>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}
