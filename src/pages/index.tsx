import { useState } from 'react';
import Footer from '@/components/pages/Footer/Footer';
import Navbar from '@/components/pages/Header/Navbar';
import BrowseByType from '@/components/pages/LandingPage/BrowseByType';
import CursiosityTakesYou from '@/components/pages/LandingPage/CursiosityTakesYou';
import FeaturedBike from '@/components/pages/LandingPage/FeaturedBike';
import FirstSection from '@/components/pages/LandingPage/FirstSection';

interface SearchParams {
  model: string;
  condition: string;
  // min_price?: string;
  // max_price?: string;
}

const Index: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ model: '', condition: '' });

  const updateSearchParams = (params: Partial<SearchParams>) => {
    setSearchParams((prevParams) => ({ ...prevParams, ...params }));
  };

  return (
    <div className="text-gray-600 antialiased">
      <Navbar />
      <FirstSection setSearchParams={updateSearchParams} />
      <FeaturedBike />
      <CursiosityTakesYou />
      <BrowseByType model={searchParams.model} condition={searchParams.condition}
        // min_price={searchParams.min_price} 
        // max_price={searchParams.max_price} 
      />
      <Footer />
    </div>
  );
};

export default Index;
