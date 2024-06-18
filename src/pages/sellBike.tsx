import React from 'react';

import Footer from '@/components/pages/Footer/Footer';
import Navbar from '@/components/pages/Header/Navbar';
import SellBike from '@/components/pages/LandingPage/SellBike';

export default function sellBike() {
  return (
    <div>
      <Navbar />
      <SellBike />
      <Footer />
    </div>
  );
}
