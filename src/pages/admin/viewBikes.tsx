import React from "react";

import ViewBikes from "@/components/pages/Admin/ViewBikes/ViewBikes";
import GridView from "@/components/ui/GridView";
import withAuth from "@/components/pages/hoc/withAuth";

const viewBikes = () => {
  return (
    <GridView>
      <ViewBikes />
    </GridView>
  );
};

export default withAuth(viewBikes);
