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
                            className="mt-2 h-20 w-full resize-none rounded px-4 py-2 caret-gray-900 shadow-sm shadow-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-gray-600"
                            name={item.name}
                            required
                        />
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
