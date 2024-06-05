import { sellBikeDataConstant } from 'constant/SellBikeConstant';
import React, { useState } from 'react';

import Title from '@/components/ui/Title';

export default function SellBikeQueriesDetails() {
  const [formData, setFormData] = useState({ ...sellBikeDataConstant[0] });
  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    // Here you would typically send the updated data to your server
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen flex-col py-20 bg-white shadow-md lg:p-5 p-2">
      <Title title="Admin Dashboard" />
      <div className="flex flex-col lg:flex-row lg:space-x-10 mt-10 w-full">
        {/* Images Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <div className="flex flex-col items-center w-full">
            <div className="h-[55vh] w-full max-[425px]:h-[35vh] sm:h-[50vh]">
              <img
                src={formData.images[currentSlide]}
                alt={`image ${currentSlide}`}
                className="w-full h-full object-cover rounded shadow-md"
              />
            </div>
            <div className="flex mt-4">
              {formData.images.map((src: string, index: number) => (
                <div
                  key={index}
                  className={`w-[20%] cursor-pointer p-1 ${currentSlide === index ? 'border-2 border-red-600' : 'border'}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bike Details Section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
            {formData.title}
          </h1>
          <div className="w-full">
            <div className="mt-5 xl:w-[100%] w-full">
              {isEditing ? (
                <form>
                  <p className="text-red-600 sm:text-sm text-xs mb-2">
                    * Change the Status Only
                  </p>
                  {Object.entries(formData).map(
                    ([key, value]) =>
                      key !== 'title' &&
                      key !== 'images' && (
                        <div key={key} className="flex justify-between py-2">
                          <label className="text-xs text-gray-700 lg:text-sm capitalize">
                            {key}
                          </label>
                          <input
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleInputChange}
                            disabled={key !== 'status'}
                            className={`max-lg:text-sm border py-1 rounded shadow-lg border-gray-500 px-6 ${key !== 'status' ? ' border-none shadow-none' : ''}`}
                          />
                        </div>
                      ),
                  )}
                  <div className="mt-5">
                    <button
                      type="button"
                      className="px-10 py-2 bg-green-600 text-white font-medium rounded"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="container mx-auto">
                    <div className="grid gap-4 max-sm:grid-cols-1 xl:grid-cols-2 max-lg:grid-cols-2">
                      {Object.entries(formData).map(
                        ([key, value]) =>
                          key !== 'title' &&
                          key !== 'images' && (
                            <div
                              key={key}
                              className="flex justify-between border-b-2 py-2"
                            >
                              <p className="text-xs text-gray-700 lg:text-sm capitalize">
                                {key}
                              </p>
                              <p
                                className={`max-lg:text-sm pl-7 max-sm:text-xs ${value === 'Resolved' ? 'text-green-600 font-medium' : ''}`}
                              >
                                {value}
                              </p>
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                  <div className="mt-5 lg:text-base sm:text-sm text-xs">
                    <button
                      className="px-10 sm:py-2 py-1 bg-green-600 text-white font-medium rounded"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
