import {
  AddBikesConstant,
  AddOldBikesConstant,
} from 'constant/AddBikeConstant';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dropdown from '@/components/ui/Dropdown';

import Footer from '../Footer/Footer';

export default function AddBikes() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [formType, setFormType] = useState<string>('new');
  const allTypes = [
    { value: 'new', label: 'New' },
    { value: 'old', label: 'Old' },
  ];

  const handleSubmit = async () => {
    toast.success(`Admin will contact you soon.`, {
      position: "top-center",
    });
  }


  const renderField = (item: { name: string; type: string; label: string }) => {
    switch (item.type) {
      case 'select':
        return (
          <Dropdown
            label={item.label}
            options={allTypes}
            selected={selectedType}
            setSelected={setSelectedType}
          />
        );
      case 'textarea':
        return (
          <textarea
            className="mt-2 h-20 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
            name={item.name}
            required
          />
        );
      case 'file':
        return (
          <input
            className="mt-2 w-full rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
            type="file"
            name={item.name}
            multiple
            required
          />
        );
      default:
        return (
          <input
            className="mt-2 w-full rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
            type={item.type}
            name={item.name}
            required
          />
        );
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="mx-auto flex w-[95%] flex-col items-center justify-center pt-20 max-lg:flex-col sm:w-[90%] sm:pt-32 lg:w-[70%] xl:w-[50%]">
        <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
          Add Bike Details
        </h1>

        <div className="mt-5 flex w-full justify-center text-center sm:mt-10">
          <h1
            className={`w-1/2 cursor-pointer rounded border border-red-600 px-8 py-2 text-xs font-semibold hover:bg-secondary-light hover:text-white sm:text-base xl:text-xl ${formType === 'new' ? 'bg-secondary-light text-white' : ''}`}
            onClick={() => setFormType('new')}
          >
            New Bikes
          </h1>
          <h1
            className={`ml-4 w-1/2 cursor-pointer rounded border border-red-600 px-8 py-2 text-xs font-semibold hover:bg-secondary-light hover:text-white sm:text-base xl:text-xl ${formType === 'old' ? 'bg-secondary-light text-white' : ''}`}
            onClick={() => setFormType('old')}
          >
            Old Bikes
          </h1>
        </div>

        <div className="mt-5 w-[100%] sm:mt-10">
          <form className="-mx-4 flex flex-wrap text-xs sm:text-sm lg:text-base" onSubmit={handleSubmit}>
            {(formType === 'new' ? AddBikesConstant : AddOldBikesConstant).map(
              (item) => (
                <div className="mb-4 w-full px-4 sm:w-1/2" key={item.name}>
                  <label className="font-medium text-gray-700">
                    {item.label}
                  </label>
                  {renderField(item)}
                </div>
              ),
            )}

            <div className="mx-4 mt-5 w-full">
              <button
                className="w-full rounded bg-secondary py-2 font-semibold text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
