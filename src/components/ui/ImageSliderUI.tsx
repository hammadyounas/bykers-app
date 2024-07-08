import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 z-10 flex -translate-y-2/3 items-center bg-gray-300 px-1 text-2xl font-bold text-red-600 opacity-60 lg:px-2 lg:text-3xl"
    onClick={onClick}
  >
    &gt;
  </button>
);

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 z-10 flex -translate-y-2/3 items-center bg-gray-300 px-1 text-2xl font-bold text-red-600 opacity-60 lg:px-2 lg:text-3xl"
    onClick={onClick}
  >
    &lt;
  </button>
);

const ImageSliderUI: React.FC<{ images: string[] }> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
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

  return (
    <div className='relative mx-3 bg-white p-2 sm:mx-10 sm:p-10 lg:w-full'>
      <div className="relative ml-auto w-full max-lg:mt-5 lg:w-1/2">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, index) => (
            <div key={index} className="h-56 w-full max-[425px]:h-44 sm:h-64">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="mt-5 flex w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className={`w-1/5 cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderUI;
