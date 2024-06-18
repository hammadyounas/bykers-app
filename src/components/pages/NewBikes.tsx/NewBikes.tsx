import React, { useState } from 'react';

import Dropdown from '@/components/ui/Dropdown';
import Title from '@/components/ui/Title';

import Alternatives from './Alternatives';
import BikesAds from './BikesAds';
import Colors from './Colors';
import Comparison from './Comparison';
import ComparisonDropdown from './ComparisonDropdown';
import Discussion from './Discussion';
import Faq from './Faq';
import ImageSlider from './ImageSlider';
import Overview from './Overview';
import Price from './Price';
import ProsAndCons from './ProsAndCons';
import Reviews from './Reviews';
import Specifications from './Specifications';

export default function NewBikes() {
  const [selectedTypes, setSelectedTypes] = useState<string>('');
  const allTypes = [
    { value: 'old-bikes', label: 'Old Bikes' },
    { value: 'new-bikes', label: 'New Bikes' },
  ];
  return (
    <div className="flex min-h-screen flex-col justify-center py-20 max-lg:flex-col pt-10 mx-auto bg-white shadow-md w-[95%] items-center lg:w-[100%] lg:p-5 p-2">
      <Title title="Admin Dashboard" />
      <div className="flex max-sm:flex-col justify-between items-center w-full mt-10">
        <div className="lg:w-[20%] w-[40%] max-sm:mb-2">
          <h1 className="sm:text-base text-sm font-medium text-gray-800 lg:text-xl">
            New Bikes
          </h1>
        </div>
        <div className="xl:w-[50%] lg:w-[75%] flex max-sm:flex-wrap w-[100%]">
          <input
            type="search"
            placeholder="Search..."
            className="input-style w-full rounded bg-white border border-gray-300 text-sm focus:outline-none px-4 py-2"
          />
          <div className="sm:w-[50%] sm:ml-4 max-sm:mr-4">
            <Dropdown
              label={'Filter'}
              options={allTypes}
              selected={selectedTypes}
              setSelected={setSelectedTypes}
            />
          </div>
        </div>
      </div>
      <ImageSlider />
      <Price />
      <ProsAndCons />
      <Overview />
      <Specifications />
      <Colors />
      <Comparison />
      <ComparisonDropdown />
      <Reviews />
      <Discussion />
      <Faq />
      <Alternatives />
      <BikesAds />
      {/* <Footer /> */}
    </div>
  );
}
