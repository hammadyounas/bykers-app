import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { SellBikesConstant } from '../../../../constant/SellBikeConstant';
import { useSellBikeContext } from 'context/sellBike/SellBikeContext';

export default function SellBike() {
  const { formData, selectedFile, handleFileChange, handleChange, handleSubmit } = useSellBikeContext();
  // interface FormData {
  //   name: string;
  //   mobile_info: string;
  //   email: string;
  //   title: string;
  //   model: string;
  //   engine: string;
  //   registered_in: string;
  //   purchased_year: string;
  //   petrol_capacity_per_litre: string;
  //   total_mileage: string;
  //   location: string;
  //   selling_price: string;
  //   description: string;
  //   images: File | null;
  //   [key: string]: string | File | null;
  // }

  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [formData, setFormData] = useState<FormData>({
  //   name: '',
  //   mobile_info: '',
  //   email: '',
  //   title: '',
  //   model: '',
  //   engine: '',
  //   registered_in: '',
  //   purchased_year: '',
  //   petrol_capacity_per_litre: '',
  //   total_mileage: '',
  //   location: '',
  //   selling_price: '',
  //   description: '',
  //   images: null,
  // });

  const contactFields = SellBikesConstant.filter((item) =>
    ['name', 'mobile_info', 'email'].includes(item.name)
  );

  const bikeFields = SellBikesConstant.filter(
    (item) => !['name', 'mobile_info', 'email', 'status'].includes(item.name)
  );

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   setSelectedFile(file);
  //   if (file) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       images: file,
  //     }));
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  
  //   // const data = new FormData();
  //   // Object.entries(formData).forEach(([key, value]) => {
  //   //   if (key === 'images' && value) {
  //   //     data.append(key, value);
  //   //   } else if (key !== 'images') {
  //   //     data.append(key, String(value));
  //   //   }
  //   // });
  
  //   const json = JSON.stringify(formData);

  //   try {
  //     const response = await fetch('http://localhost:5000/sell/bike', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: json,
  //     });
  
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       toast.success(`Bike submitted successfully!`);
  //       console.log(responseData)
  //     } else {
  //       // Improved error handling for non-JSON responses
  //       const contentType = response.headers.get('content-type');
  //       if (contentType && contentType.includes('application/json')) {
  //         const errorData = await response.json();
  //         toast.error(`Error: ${errorData.message}`);
  //       } else {
  //         const errorText = await response.text();
  //         toast.error(`Error: ${errorText}`);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Network or other error:', error);
  //     toast.error(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    
  // }};

  const renderField = (item: { name: string; type: string; label: string }) => {
    switch (item.type) {
      case 'textarea':
        return (
          <div key={item.name}>
            <label className="font-medium text-gray-700">{item.label}</label>
            <textarea
              className="mt-2 h-28 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              name={item.name}
              value={formData[item.name] as string}
              onChange={handleChange}
            />
          </div>
        );
      case 'file':
        return (
          <div key={item.name}>
            <label className="font-medium text-gray-700">{item.label}</label>
            <div className="flex items-center justify-center w-full mt-2">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-700 dark:hover:bg-gray-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="sm:w-8 sm:h-8 h-5 w-5 mb-4 text-gray-500 dark:text-slate-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-slate-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-red-500 dark:text-slate-400">
                    SVG, PNG, JPG (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {selectedFile && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="sm:h-28 sm:w-28 h-16 w-16 object-cover rounded"
                />
              </div>
            )}
          </div>
        );

      default:
        return (
          <div key={item.name}>
            <label className="font-medium text-gray-700">{item.label}</label>
            <input
              className="mt-2 w-full rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
              type={item.type}
              name={item.name}
              value={formData[item.name] as string}
              onChange={handleChange}
            />
          </div>
        );
    }
  };

  return (
    <div className="lg:pt-32 sm:pt-20 pt-10">
      <ToastContainer />
      <div className="mx-auto shadow-lg flex flex-col max-lg:pt-5 max-md:pt-10 max-lg:flex-col xl:w-[60%] lg:w-[60%] w-[90%]">
        <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl text-center">
          Sell Your Bike
        </h1>

        <div className="mt-5 w-[100%] sm:mt-10 xl:text-base sm:text-sm text-xs">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row xl:w-[100%]">
              <div className="w-full lg:w-1/2 lg:pr-4">
                <h2 className="text-lg font-bold text-red-600 px-4 mb-4">
                  Contact Details
                </h2>
                <div className="flex flex-wrap">
                  {contactFields.map((item) => (
                    <div className="mb-4 w-full px-4" key={item.name}>
                      {renderField(item)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-4">
                <h2 className="text-lg font-bold text-red-600 px-4 mb-4">
                  Bike Details
                </h2>
                <div className="flex flex-wrap">
                  {bikeFields.map((item) => (
                    <div className="mb-4 w-full px-4" key={item.name}>
                      {renderField(item)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center my-5 w-full mx-auto">
              <button
                className="sm:w-[20%] w-[90%] rounded bg-secondary hover:bg-red-600 py-2 font-semibold text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
