import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
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

  const images = [
    '/assets/Images/bike10.jpg',
    '/assets/Images/bike11.jpg',
    '/assets/Images/bike12.jpg',
    '/assets/Images/bike2.png',
    '/assets/Images/bike6.png',
  ];

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="relative mx-3 border-2 border-gray-200 bg-white p-2 sm:mx-10 sm:p-10 lg:w-[50%] xl:w-[45%]">
      <h1 className=" text-base font-bold text-black sm:text-lg lg:text-2xl">
        Honda CG 125 2024
      </h1>
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
        {images.map((src, index) => (
          <div
            key={index}
            className="mt-5 h-[55vh] max-[425px]:h-[35vh] sm:h-[55vh]"
          >
            <img src={src} alt={`Slide ${index}`} className="size-full" />
          </div>
        ))}
      </Slider>
      <div className="mt-5 flex w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={src} alt={`Thumbnail ${index}`} className="size-full " />
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
            5 Stroke
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
            <li>Standard</li>
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
  );
};

export default ImageSlider;
