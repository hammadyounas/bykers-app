import Footer from '@/components/pages/Footer/Footer';
import Navbar from '@/components/pages/Header/Navbar';
import BrowseByType from '@/components/pages/LandingPage/BrowseByType';
import CursiosityTakesYou from '@/components/pages/LandingPage/CursiosityTakesYou';
import FeaturedBike from '@/components/pages/LandingPage/FeaturedBike';
import FirstSection from '@/components/pages/LandingPage/FirstSection';

const Index = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Navbar />
      <FirstSection />
      <FeaturedBike />
      <CursiosityTakesYou />
      <BrowseByType />
      <Footer />
    </div>
  );
};

export default Index;
