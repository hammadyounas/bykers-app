import React from 'react';

import ViewBikes from '@/components/pages/Admin/ViewBikes/ViewBikes';
import Navbar from '@/components/pages/Header/Navbar';
import Footer from '@/components/pages/Footer/Footer';

export default function viewBikes() {
  return (
    <div>
      <Navbar />
      <ViewBikes />
      <Footer />
    </div>
  );
}