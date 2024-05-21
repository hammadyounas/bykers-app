import React from 'react';

import Navbar from '@/components/pages/Header/Navbar';
import NewBikes from '@/components/pages/NewBikes.tsx/NewBikes';

export default function newBikes() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <NewBikes />
    </div>
  );
}
