import React from 'react';

import Footer from '../Footer/Footer';
import Alternatives from './Alternatives';
import BikesAds from './BikesAds';
import Colors from './Colors';
import Comparison from './Comparison';
import ComparisonDropdown from './ComparisonDropdown';
import ImageSlider from './ImageSlider';
import Overview from './Overview';
import ProsAndCons from './ProsAndCons';
import Reviews from './Reviews';
import Specifications from './Specifications';

export default function NewBikes() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center pt-20 max-lg:flex-col sm:pt-32">
      <ImageSlider />
      <ProsAndCons />
      <Overview />
      <Specifications />
      <Colors />
      <Comparison />
      <ComparisonDropdown />
      <Reviews />
      <Alternatives />
      <BikesAds />
      <Footer />
    </div>
  );
}
