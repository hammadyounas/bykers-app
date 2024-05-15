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
      className="absolute right-0 top-1/2 z-50 flex -translate-y-2/3 items-center bg-gray-300 text-2xl font-bold text-red-600 opacity-60 lg:text-3xl"
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 z-50 flex -translate-y-2/3 items-center bg-gray-300 text-2xl font-bold text-red-600 opacity-60 lg:text-3xl"
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
    <div className="relative mx-3 bg-white p-2 sm:mx-10 sm:p-10 lg:w-[100%]">
      <div className="mx-auto lg:w-[70%]">
        <h1 className=" text-base font-semibold text-black sm:text-lg lg:text-2xl">
          Honda 2024 Pridor Price, Pictures & Specs
        </h1>
      </div>
      <div className="mx-auto mt-5 flex border border-gray-300 p-2 max-lg:flex-col sm:p-10 lg:w-[70%]">
        <div className="sm:mt-10">
          <h1 className="text-xl font-bold text-red-600 lg:text-2xl">
            Price $100000
          </h1>
          <p className="mt-2 text-xs text-gray-700">
            21 Used Honda Pridor for Sale
          </p>
          <p className="mt-2 text-xs text-gray-700">37 Review | Write Review</p>
        </div>
        <div className="ml-auto w-[100%] max-lg:mt-5 lg:w-[50%]">
          <Slider ref={sliderRef} {...settings}>
            {images.map((src, index) => (
              <div
                key={index}
                className=" h-[55vh] w-full max-[425px]:h-[35vh] sm:h-[40vh]"
              >
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="size-full object-cover"
                />
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
            <img
              src={src}
              alt={`Thumbnail ${index}`}
              className="size-full object-cover"
            />
          </div>
        ))}
          </div>
        </div>
      </div>

      <div className="mx-auto lg:w-[70%]">
        <ul className=" flex w-full justify-between text-xs sm:text-sm lg:text-base">
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
    </div>
  );
};

export default ImageSlider;
