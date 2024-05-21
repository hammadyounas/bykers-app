import React, { useState } from 'react';

import Dropdown from '@/components/ui/Dropdown';

const ComparisonDropdown: React.FC = () => {
  const [selectedChineseBike, setSelectedChineseBike] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  const chineseBikes = [
    { value: 'cfmoto', label: 'CFMoto' },
    { value: 'benelli', label: 'Benelli' },
    { value: 'zongshen', label: 'Zongshen' },
  ];

  const allModels = [
    { value: 'honda-pridor', label: 'Honda Pridor' },
    { value: 'yamaha-ybr', label: 'Yamaha YBR' },
    { value: 'suzuki-gixxer', label: 'Suzuki Gixxer' },
  ];

  return (
    <div className="mx-auto mt-10 w-full bg-slate-100 py-10 sm:mt-20">
      <div className="mx-auto w-[95%] bg-white p-3 sm:w-[90%] lg:w-[70%] lg:p-10 xl:w-[60%]">
        <h1 className="text-sm font-semibold text-black sm:text-xl lg:text-lg">
          Compare Honda Pridor With Other Bikes
        </h1>
        <div className="mt-5 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Dropdown
            label="Chinese Bikes"
            options={chineseBikes}
            selected={selectedChineseBike}
            setSelected={setSelectedChineseBike}
          />
          <Dropdown
            label="All Models"
            options={allModels}
            selected={selectedModel}
            setSelected={setSelectedModel}
          />
          <div className="w-full  max-sm:text-xs">
            <button className="mt-1 block w-full rounded-md border border-gray-300 bg-secondary-light py-2 pl-3  pr-10 text-center font-semibold text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm lg:py-3">
              Comparisons
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDropdown;
