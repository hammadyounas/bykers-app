import React from 'react';

import Rating from '@/components/ui/Rating';

export default function Reviews() {
  return (
    <div className="mx-auto mt-10 w-[95%] sm:mt-20 sm:w-[90%] lg:w-[70%] xl:w-[60%]">
      <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Reviews
      </h1>

      <div className="mt-5 flex items-center text-xs sm:text-sm">
        <p className="mr-2">3.0</p>
        <Rating />
        <p className="ml-2 text-gray-600">(25 Reviews)</p>
      </div>

      {/* overall rating */}
      <div className="mt-5 max-sm:text-xs">
        <p>The overall rating based on:</p>
        <ul className="mt-2 text-gray-800">
          <li>Style</li>
          <li>Comfort</li>
          <li>Fuel Economy</li>
          <li>Performance</li>
          <li>Value for Money</li>
        </ul>
      </div>

      <div className="mt-5 grid w-full grid-cols-2">
        {/* left side */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex max-sm:flex-col sm:items-center">
            <div>
              <img
                src="/assets/Images/bike9.jpg"
                alt="bike1"
                className="w-32"
              />
            </div>

            <div className="sm:ml-5">
              <h3 className="font-semibold text-red-600">
                Lorem ipsum dolor sit amet
              </h3>
              <h5 className="mt-2 text-xs lg:text-sm">Honda Pridor</h5>
              <div className="mt-2 flex items-center text-xs lg:text-sm">
                <Rating />
                <h5 className="ml-2">Anonymous</h5>
                <h6 className="ml-2 text-xs text-gray-600">Feb 12, 2020</h6>
              </div>
            </div>
          </div>
          <p className="mt-2 text-xs lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae culpa neque nobis quaerat explicabo similique magnam ipsa, ut
            necessitatibus reiciendis tempora sapiente. Placeat natus
            blanditiis, sed ab voluptatum ducimus quod deserunt.
          </p>
        </div>

        {/* right */}
        <div className="col-span-2 max-sm:mt-5 lg:col-span-1">
          <div className="flex max-sm:flex-col sm:items-center">
            <div>
              <img
                src="/assets/Images/bike9.jpg"
                alt="bike1"
                className="w-32"
              />
            </div>

            <div className="sm:ml-5">
              <h3 className="font-semibold text-red-600">
                Lorem ipsum dolor sit amet
              </h3>
              <h5 className="mt-2 text-xs lg:text-sm">Honda Pridor</h5>
              <div className="mt-2 flex items-center text-xs lg:text-sm">
                <Rating />
                <h5 className="ml-2">Anonymous</h5>
                <h6 className="ml-2 text-xs text-gray-600">Feb 12, 2020</h6>
              </div>
            </div>
          </div>
          <p className="mt-2 text-xs lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae culpa neque nobis quaerat explicabo similique magnam ipsa, ut
            necessitatibus reiciendis tempora sapiente. Placeat natus
            blanditiis, sed ab voluptatum ducimus quod deserunt.
          </p>
        </div>
      </div>
    </div>
  );
}
