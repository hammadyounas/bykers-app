import React from "react";

import NewBikes from "@/components/pages/NewBikes.tsx/NewBikes";
import GridView from "@/components/ui/GridView";

export default function newBikes() {
  return (
    <div className="overflow-x-hidden">
      {/* <Navbar /> */}
      <GridView>
        <NewBikes />
      </GridView>
    </div>
  );
}
