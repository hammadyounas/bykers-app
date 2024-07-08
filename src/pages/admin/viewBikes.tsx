import React from "react";

import ViewBikes from "@/components/pages/Admin/ViewBikes/ViewBikes";
import GridView from "@/components/ui/GridView";

export default function viewBikes() {
  return (
    <GridView>
        <ViewBikes />
      {/* <div className="-mt-10">
        <Footer />
      </div> */}
    </GridView>
  );
}
