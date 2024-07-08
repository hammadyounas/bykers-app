import React from 'react';

import Footer from '@/components/pages/Footer/Footer';
import Navbar from '@/components/pages/Header/Navbar';
import SellBike from '@/components/pages/LandingPage/SellBike';
import { SellBikeProvider } from 'context/sellBike/SellBikeProvider';

export default function sellBike() {
  return (
    <div>
      <Navbar />
      <SellBikeProvider >
        <SellBike />
      </SellBikeProvider>
      <Footer />
    </div>
  );
}
