import { similarAdsConstant } from 'constant/SimilarAdsConstant';
import React from 'react';

export default function BikesAds() {
  return (
    <div className="mx-auto mt-16 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[60%]">
      <h1 className="text-lg font-medium text-gray-800 sm:text-xl lg:text-2xl">
        Honda Pridor For Sale
      </h1>

      <div className="mt-5 flex w-[100%] flex-wrap">
        {similarAdsConstant.map((item, index) => (
          <div className="w-full sm:w-[50%] md:w-[25%] lg:w-[25%]" key={index}>
            <div className="mr-2 rounded bg-white shadow max-sm:mt-5">
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover sm:h-[25vh]"
              />
              <div className="p-3 ">
                <h2 className="text-sm font-semibold text-red-600 lg:text-base">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold text-gray-900">
                  $ {item.price}
                </p>
                <p className="text-sm text-gray-600">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
