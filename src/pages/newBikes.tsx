import React from "react";

import NewBikes from "@/components/pages/NewBikes.tsx/NewBikes";
import GridView from "@/components/ui/GridView";
import Title from "@/components/ui/Title";

export default function newBikes() {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <GridView>
        <Title title="Admin Dashboard" />
        <NewBikes />
      </GridView>
    </div>
  );
}
