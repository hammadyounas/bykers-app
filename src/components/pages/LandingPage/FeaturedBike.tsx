import Image from 'next/image';
import React from 'react';

export default function FeaturedBike() {
  return (
    <div id="featured" className={'max-sm:mt-10 sm:m-20'}>
      <h1
        className={
          'text-center text-2xl font-bold text-black sm:text-3xl lg:text-5xl'
        }
      >
        Featured <span className={'text-red-600'}>Bikes</span>
      </h1>

      {/* images */}
      <div
        className={
          'mx-auto mt-10 flex w-full items-center justify-between max-lg:flex-col'
        }
      >
        <Image
          src="/assets/Images/bike3.png"
          alt="bike1"
          width={150}
          height={100}
          className=" w-[150px] opacity-70 xl:h-[180px]  xl:w-[300px]"
        />
        <div>
          <Image
            src="/assets/Images/bike1.png"
            alt="bike1"
            width={700}
            height={700}
            className=""
          />
          <div
            className={
              'absolute z-10 mx-auto -mt-10 flex flex-col items-center justify-center bg-white p-2 text-center shadow-md shadow-gray-400 sm:-mt-20 sm:p-5'
            }
          >
            <h1 className="font-bold max-sm:text-sm lg:text-lg">
              750 ADVENTURE 2020
            </h1>
            <h2 className="text-xs font-semibold text-red-600 lg:text-base">
              $71,000
            </h2>
            <p className="text-xs font-semibold text-red-600 lg:text-base">
              VIEW DETAILS
            </p>
          </div>
        </div>
        <Image
          src="/assets/Images/bike3.png"
          alt="bike1"
          width={300}
          height={180}
          className=" w-[150px] opacity-70 xl:h-[180px] xl:w-[300px]"
        />
      </div>
    </div>
  );
}
