import React from 'react';

import BikeDetailSection from './BikeDetailSection';
import ImageSlider from './ImageSlider';
import SimilarAds from './SimilarAds';

export default function OldBike() {
  return (
    <>
      <div className="flex min-h-screen w-full justify-center bg-slate-50 pt-20 max-lg:flex-col sm:pt-32">
        <ImageSlider />
        <BikeDetailSection />
      </div>

      <div className=" mx-auto w-full bg-slate-100 py-10  lg:py-20">
        <SimilarAds />
        {/* <Footer /> */}
      </div>
    </>
  );
}
