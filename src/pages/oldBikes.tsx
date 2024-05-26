import React from "react";

import OldBike from "@/components/pages/OldBikes/OldBike";
import GridView from "../components/ui/GridView";

export default function oldBikes() {
  return (
    <div>
      {/* <Navbar /> */}
      <GridView>
        <OldBike />
      </GridView>
    </div>
  );
}
