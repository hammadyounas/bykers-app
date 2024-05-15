import React from 'react';

import ImageSlider from './ImageSlider';
import Overview from './Overview';
import ProsAndCons from './ProsAndCons';

export default function NewBikes() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center pt-20 max-lg:flex-col sm:pt-32">
      <ImageSlider />
      <ProsAndCons />
      <Overview />
    </div>
  );
}
