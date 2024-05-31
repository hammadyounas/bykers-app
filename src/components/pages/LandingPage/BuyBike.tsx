import { BuyBikesConstant } from "constant/BuyBikeConstant";
import { newBikeConstant } from "constant/OldAndNewBikesConstant";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BuyBike() {
  const images = [
    '/assets/Images/bike1.png',
    '/assets/Images/bike14.jpg',
    '/assets/Images/bike12.jpg',
    '/assets/Images/bike2.png',
    '/assets/Images/bike6.png',
  ];

  const handleThumbnailClick = (index: any) => {
    setCurrentSlide(index);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderField = (item: { name: string; type: string; label: string }) => {
    switch (item.type) {
      case "textarea":
        return (
          <>
            <label className="font-medium text-gray-700">{item.label}</label>
            <textarea
              className="mt-2 h-20 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              name={item.name}
              required
            />
          </>
        );
      case "checkbox":
        return (
          <>
            <input
              type="checkbox"
              className="mt-2 mr-2 rounded caret-gray-900 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              name={item.name}
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
              required
            />
          </>
        );
    }
  };

  const handleSubmit = async () => {
    toast.success(`Admin will contact you soon.`, {
      position: "top-center",
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="flex max-lg:flex-col w-full justify-between lg:pt-32 sm:pt-20 xl:min-h-[90vh] 2xl:min-h-[95vh] xl:px-20 lg:px-10 px-5">
        <div className="mx-auto flex flex-col max-md:pt-20 max-lg:flex-col xl:w-[60%] lg:w-[70%] w-full">
          {/* Display bike details */}

          {newBikeConstant.slice(0, 1).map((bike, index) => (
            <div
              key={index}
              className="mt-5 xl:w-[90%] md:w-[90%] w-full sm:mt-0 lg:text-base sm:text-sm text-xs mx-auto"
            >
              <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
                Specifications
              </h1>
              <div className="flex flex-col justify-center items-center w-full mt-10">
                <div className="h-[55vh] max-[425px]:h-[35vh] sm:h-[50vh]">
                  <img
                    src={images[currentSlide]}
                    alt={`image ${currentSlide}`}
                    className="size-full "
                  />
                </div>
                <div className="flex mt-4">
                  {images.map((src, index) => (
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
                      {bike.price}
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
                      Displacement
                    </p>
                    <p className="max-lg:text-sm max-md:text-xs">
                      {bike.displacement}
                    </p>
                  </div>

                </div>
                <div className="col-span-2  w-full xl:col-span-1 md:pr-4">
                  <div className="flex justify-between border-b-2 py-2">
                    <p className="text-xs text-gray-700 lg:text-sm">
                      Horse Power
                    </p>
                    <p className="max-lg:text-sm max-md:text-xs">
                      7.5 HP @ 8500.0 RPM
                    </p>
                  </div>
                  <div className="flex justify-between border-b-2 py-2">
                    <p className="text-xs text-gray-700 lg:text-sm">
                      Petrol Capacity
                    </p>
                    <p className="max-lg:text-sm max-md:text-xs">
                      {bike.petrolCapacity}
                    </p>
                  </div>
                  <div className="flex justify-between border-b-2 py-2">
                    <p className="text-xs text-gray-700 lg:text-sm">
                      Fuel Average
                    </p>
                    <p className="max-lg:text-sm max-md:text-xs">
                      {bike.fuelAverage}
                    </p>
                  </div>
                  <div className="flex justify-between border-b-2 py-2">
                    <p className="text-xs text-gray-700 lg:text-sm">
                      Top Speed
                    </p>
                    <p className="max-lg:text-sm">100 KM/H</p>
                  </div>
                  <div className="flex justify-between border-b-2 py-2">
                    <p className="text-xs text-gray-700 lg:text-sm">
                      Registered In
                    </p>
                    <p className="max-lg:text-sm">Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add other bike details as needed */}
        </div>
        <div className="mx-auto flex flex-col max-lg:pt-5 max-md:pt-10 max-lg:flex-col xl:w-[40%] lg:w-[60%] w-full">
          <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
            Contact Us For Buy Bike
          </h1>

          <div className="mt-5 w-[100%] sm:mt-10">
            <form className="-mx-4 flex  flex-wrap text-xs sm:text-sm lg:text-base xl:w-[90%]" onSubmit={handleSubmit}>
              {BuyBikesConstant.map((item) => (
                <div
                  className="mb-4 w-full px-4  lg:w-full sm:w-1/2"
                  key={item.name}
                >
                  {renderField(item)}
                </div>
              ))}

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
    </>
  );
}
