import React from "react";

import OldBike from "@/components/pages/OldBikes/OldBike";
import GridView from "../components/ui/GridView";
import Title from "../components/ui/Title";

export default function oldBikes() {
  return (
    <div>
      {/* <Navbar /> */}
      <GridView>
        <Title title="Old Bikes" />
        <OldBike />
      </GridView>
    </div>
  );
}
