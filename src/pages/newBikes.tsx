import React from 'react';

import Navbar from '@/components/pages/Header/Navbar';
import NewBikes from '@/components/pages/NewBikes.tsx/NewBikes';

export default function newBikes() {
  return (
    <div>
      <Navbar />
      <NewBikes />
    </div>
  );
}
