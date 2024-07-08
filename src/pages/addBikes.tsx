import React from 'react';

import AddBikes from '@/components/pages/AddBikes/AddBikes';
import Navbar from '@/components/pages/Header/Navbar';

export default function addBikes() {
  return (
    <div>
      <Navbar />
      <AddBikes />
    </div>
  );
}
