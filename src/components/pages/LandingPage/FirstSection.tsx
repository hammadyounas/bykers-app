import React, { useState } from 'react';

interface SearchParams {
  model: string;
  condition: string;
  min_price?: number;
  max_price?: number;
}

interface FirstSectionProps {
  setSearchParams: (params: Partial<SearchParams>) => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({ setSearchParams }) => {
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('');
  const [min_price, setMinPrice] = useState('');
  const [max_price, setMaxPrice] = useState('');

  const handleSearchClick = () => {
    const params: Partial<SearchParams> = {
      model,
      condition,
      min_price: min_price ? parseFloat(min_price) : undefined,
      max_price: max_price ? parseFloat(max_price) : undefined,
    };
    setSearchParams(params);
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

      <div className="mx-auto mt-10 flex w-[90%] justify-around bg-gray-200 py-4 shadow-lg shadow-gray-700 max-xl:flex-col max-sm:text-sm sm:-mt-10 sm:w-[90%] lg:w-[70%] lg:px-5 xl:w-[90%] 2xl:w-[80%]">
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="input-style flex cursor-pointer border-2 xl:mr-2 px-2 max-xl:my-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <select
          name="condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="xl:w-[20%] input-style flex cursor-pointer border-2 xl:mx-2 max-xl:my-2 px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        >
          <option value="">Select Condition</option>
          <option value="Used">Used</option>
          <option value="New">New</option>
        </select>
        <input
          type="text"
          name="min-price"
          placeholder="Min Price"
          value={min_price}
          onChange={(e) => setMinPrice(e.target.value)}
          className="xl:w-[20%] input-style flex cursor-pointer border-2 xl:mx-2 max-xl:my-2 px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <input
          type="text"
          name="max-price"
          placeholder="Max Price"
          value={max_price}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="xl:w-[20%] input-style flex cursor-pointer border xl:mx-2 max-xl:my-2 px-2 font-semibold max-lg:mx-3 max-lg:mt-2 max-lg:items-center max-lg:justify-center max-lg:hover:bg-secondary max-lg:hover:text-white max-sm:w-[90%] max-sm:py-1 sm:py-3 lg:mr-3 lg:hover:text-secondary"
        />
        <a href='/#browse' className='flex justify-center items-center xl:ml-2' >
        <button
          className={'bg-secondary-light px-4 py-2 max-xl:my-2 font-semibold text-white max-lg:mx-3 max-lg:mt-2'}
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
