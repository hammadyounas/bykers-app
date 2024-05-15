import {
  cruiselMotorcyclesConstant,
  sportsBikeConstant,
  standardBikeConstant,
  touringMotorcyclesConstant,
} from 'constant/BikeTypeConstant'; // Import your bike data
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BikeDetailsPage() {
  const router = useRouter();
  const { alt } = router.query; // Get the bike title from the URL parameter

  let bike: any;
  if (alt) {
    bike = standardBikeConstant.find((item) => item.alt === alt);
    if (!bike) {
      bike = sportsBikeConstant.find((item) => item.alt === alt);
    }
    if (!bike) {
      bike = cruiselMotorcyclesConstant.find((item) => item.alt === alt);
    }
    if (!bike) {
      bike = touringMotorcyclesConstant.find((item) => item.alt === alt);
    }
  }

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(bike?.src[0] || '');

  const handleImageClick = (image: any) => {
    // Update the selected image when any map image is clicked
    setSelectedImage(image);
  };

  if (!bike) {
    // Handle case where bike is not found
    return <div>Bike not found</div>;
  }

  return (
    <div className="mx-auto flex w-full justify-center max-lg:flex-col lg:mt-20 lg:h-screen">
      <div className="h-[50vh] w-[100%] max-lg:mx-auto lg:w-[50%]  xl:h-[70vh]">
        {/* Display the selected image */}
        <div className="h-[45vh] overflow-hidden object-fill p-5 max-[375px]:h-[40vh] sm:h-[70vh] lg:h-[50vh] lg:w-[90%] xl:h-[60vh]">
          <img
            src={selectedImage}
            alt={bike.alt}
            className="mx-auto object-cover sm:w-[80%] lg:w-[100%]"
          />
        </div>

        <div className="mx-auto  mt-5 flex items-center max-sm:justify-center sm:mt-10 sm:w-[30%] lg:w-[60%]">
          {/* Display other images */}
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
    </div>
  );
}
