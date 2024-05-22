import React, { useState } from "react";

import Dropdown from "@/components/ui/Dropdown";
import Link from "next/link";
import ViewBikesData from "./ViewBikesData";

export default function ViewBikes() {
  const [selectedTypes, setSelectedTypes] = useState<string>("");
  const allTypes = [
    { value: "old-bikes", label: "Old Bikes" },
    { value: "new-bikes", label: "New Bikes" },
  ];
  return (
    <div className="pt-20 sm:pt-32 w-full bg-slate-100 pb-14  min-h-[100vh]">
      <div className="mx-auto flex bg-white shadow-md w-[95%] flex-col items-center justify-center  max-lg:flex-col lg:w-[80%] lg:p-5 p-2">
        <div className="flex max-sm:flex-col justify-between items-center w-full">
          <div className="lg:w-[20%] w-[40%] max-sm:mb-2">
            <h1 className="sm:text-base text-sm font-medium text-gray-800 lg:text-xl">
              Add Bike Details
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
                label="Filter"
                options={allTypes}
                selected={selectedTypes}
                setSelected={setSelectedTypes}
              />
            </div>
            <div className="flex w-[50%] sm:ml-4 items-center justify-center cursor-pointer bg-secondary-light rounded text-white font-semibold hover:bg-secondary max-sm:py-2 max-sm:mt-1 sm:text-sm text-xs">
              <Link href={"/addBikes"} className="flex justify-between">
                <p>
                  <i className="fa-solid fa-plus"></i> Add Bike
                </p>
              </Link>
            </div>
          </div>
        </div>

        <ViewBikesData />
      </div>
    </div>
  );
}
