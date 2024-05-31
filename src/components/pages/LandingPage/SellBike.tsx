import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SellBikesConstant } from "../../../../constant/SellBikeConstant";

export default function SellBike() {
    const contactFields = SellBikesConstant.filter(item =>
        ['name', 'mobileNo', 'email'].includes(item.name)
    );

    const bikeFields = SellBikesConstant.filter(item =>
        !['name', 'mobileNo', 'email'].includes(item.name)
    );

    const renderField = (item: { name: string; type: string; label: string }) => {
        switch (item.type) {
            case "textarea":
                return (
                    <>
                        <label className="font-medium text-gray-700">{item.label}</label>
                        <textarea
                            className="mt-2 h-28 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
                            name={item.name}
                            required
                        />
                    </>
                );
            case "file":
                return (
                    <>
                        <label className="font-medium text-gray-700">{item.label}</label>
                        <div className="flex items-center justify-center w-full mt-2">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-700 dark:hover:bg-gray-200">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-slate-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-red-500 dark:text-slate-400">SVG, PNG, JPG  (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>

                    </>
                );

            default:
                return (
                    <>
                        <label className="font-medium text-gray-700">{item.label}</label>
                        <input
                            className="mt-2 w-full rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
                            type={item.type}
                            name={item.name}
                            required
                        />
                    </>
                );
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        toast.info(
            <div>
                Submitted Successfully.
                <br />
                Wait For Approval By Admin.
            </div>,
            {
                position: "top-center",
            }
        );
    }

    return (
        <div className="lg:pt-32 sm:pt-20 pt-10">
            <ToastContainer />
            <div className="mx-auto shadow-lg flex flex-col max-lg:pt-5 max-md:pt-10 max-lg:flex-col xl:w-[50%] lg:w-[60%] w-[90%]">
                <h1 className="text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl text-center">
                    Sell Your Bike
                </h1>

                <div className="mt-5 w-[100%] sm:mt-10 xl:text-base sm:text-sm text-xs">
                    <form className=" flex flex-wrap  xl:w-[100%]" onSubmit={handleSubmit}>
                        <div className="w-full">
                            <h2 className="text-lg font-bold text-red-600 px-4 mb-4">Contact Details</h2>
                            <div className="flex flex-wrap">
                                {contactFields.map((item) => (
                                    <div className="mb-4 w-full lg:w-1/2 px-4" key={item.name}>
                                        {renderField(item)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap mt-5">
                            <h2 className="text-lg font-bold text-red-600 px-4 mb-4">Bike Details</h2>
                            <div className="w-full flex flex-wrap">
                                {bikeFields.map((item) => (
                                    <div className="mb-4 w-full lg:w-1/2 px-4" key={item.name}>
                                        {renderField(item)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mx-4 my-5 w-full">
                            <button
                                className="sm:w-[20%] w-full rounded bg-secondary py-2 font-semibold text-white"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
