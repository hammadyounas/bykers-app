import React from 'react';

import Title from '@/components/ui/Title';

import BikeDetailSection from './BikeDetailSection';
import ImageSlider from './ImageSlider';
import SimilarAds from './SimilarAds';

export default function OldBike() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center py-20 max-lg:flex-col pt-10 mx-auto bg-white shadow-md w-[95%] items-center lg:w-[100%] lg:p-5 p-2">
        <Title title="Admin Dashboard" />
        <div className="flex min-h-screen w-full justify-center bg-slate-50 max-lg:flex-col pt-10">
          <ImageSlider />
          <BikeDetailSection price="$10000" />
        </div>

        <div className=" mx-auto w-full bg-slate-100 py-10  lg:py-20">
          <SimilarAds />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
