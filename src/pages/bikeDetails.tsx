import React from 'react';

import Footer from '@/components/pages/Footer/Footer';
import Navbar from '@/components/pages/Header/Navbar';
import BikeDetails from '@/components/pages/LandingPage/BikeDetails';

export default function bikeDetails() {
  return (
    <div>
      <Navbar />
      <BikeDetails />
      <Footer />
    </div>
  );
}
