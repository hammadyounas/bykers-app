import React from 'react';

import BikeDetailSection from './BikeDetailSection';
import ImageSlider from './ImageSlider';
import SimilarAds from './SimilarAds';
import Title from '@/components/ui/Title';

export default function OldBike() {
  return (
    <>
        <Title title="Admin Dashboard" />
      <div className="flex min-h-screen w-full justify-center bg-slate-50 max-lg:flex-col pt-10">
        <ImageSlider />
        <BikeDetailSection price='$10000'/>
      </div>

      <div className=" mx-auto w-full bg-slate-100 py-10  lg:py-20">
        <SimilarAds />
        {/* <Footer /> */}
      </div>
    </>
  );
}
