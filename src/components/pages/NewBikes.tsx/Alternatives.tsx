import { similarAdsConstant } from 'constant/SimilarAdsConstant';
import React, { useState } from 'react';
import Slider from 'react-slick';

import Rating from '@/components/ui/Rating';

export default function Alternatives() {
  const [currentSlide, setCurrentSlide] = useState(0);

  interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

  const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/2 z-50 flex -translate-y-2/3 items-center bg-white px-1 text-2xl font-bold text-red-600 lg:px-2 lg:text-3xl"
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 z-50 flex -translate-y-2/3 items-center bg-white px-1 text-2xl font-bold text-red-600 lg:px-2 lg:text-3xl"
      onClick={onClick}
    >
      &lt;
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto mt-10 w-full bg-slate-100 py-10 sm:mt-20">
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[70%] xl:w-[60%]">
        <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
          Alternatives
        </h1>
        <Slider {...settings}>
          {similarAdsConstant.map((item, index) => (
            <div
              className="mt-5 w-full sm:w-[50%] md:w-[25%] lg:w-[25%]"
              key={index}
            >
              <div className="mr-2 rounded bg-white shadow max-sm:mt-5">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover sm:h-[25vh]"
                />
                <div className="p-3 text-center">
                  <h2 className="text-sm font-semibold text-red-600 lg:text-base">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    $ {item.price}
                  </p>
                  <div className="mt-2 flex justify-center">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
