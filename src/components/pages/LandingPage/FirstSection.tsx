import React, { useState } from 'react';

interface SearchParams {
  model: string;
  condition: string;
  // min_price?: string;
  // max_price?: string;
}

interface FirstSectionProps {
  setSearchParams: (params: Partial<SearchParams>) => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({ setSearchParams }) => {
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('');
  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');

  const handleSearchClick = () => {
    setSearchParams({ model, condition });
    // setSearchParams({ model, min_price: minPrice, max_price: maxPrice });
  };

  return (
    <>
      <div
        className="flex h-[90vh] items-center justify-between px-5 max-sm:flex-col max-sm:pt-16 sm:px-10 lg:px-20"
        style={{
          backgroundImage: "url('/assets/Images/bg1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white">
          <h1 className="w-[60%] -skew-x-12 bg-secondary-light py-2 text-center font-semibold italic sm:text-lg lg:w-[45%] lg:text-xl">
            Start Adventure
          </h1>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-6xl">
            Bikers
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl">
            Find Your Perfect Bike and
            <span className="text-red-600"> Start Your Journey Now!</span>
          </p>
        </div>
      </div>

      <div
        className={
          'mx-auto mt-10 flex w-[90%] justify-around bg-gray-200 py-4 shadow-lg shadow-gray-700 max-lg:flex-col max-sm:text-sm sm:-mt-10 sm:w-[90%] lg:w-[100%] lg:px-5 xl:w-[90%] 2xl:w-[80%]'
        }
      >
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="input-style flex cursor-pointer border-2 px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <input
          type="text"
          name="condition"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="input-style flex cursor-pointer border-2 px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <input
          type="text"
          name="max-price"
          placeholder="Max Price"
          // value={maxPrice}
          // onChange={(e) => setMaxPrice(e.target.value)}
          className="input-style flex cursor-pointer border px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <input
          type="text"
          name="min-price"
          placeholder="Min Price"
          // value={minPrice}
          // onChange={(e) => setMinPrice(e.target.value)}
          className="input-style flex cursor-pointer border-2 px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <a href='/#browse'>
        <button
          className={'bg-secondary-light px-4 py-2 font-semibold text-white max-lg:mx-3 max-lg:mt-2'}
          onClick={handleSearchClick}
        >
          Search
        </button>
        </a>
      </div>
    </>
  );
};

export default FirstSection;
