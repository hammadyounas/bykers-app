import ViewBikesDetails from '@/components/pages/Admin/BikesDetails/ViewBikesDetails';
import withAuth from '@/components/pages/hoc/withAuth';
import GridView from '@/components/ui/GridView';
import React from 'react';

const DetailsPageById: React.FC = () => {
  return (
    <GridView>
      <ViewBikesDetails />
    </GridView>
  );
};

export default withAuth(DetailsPageById);
