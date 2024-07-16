import ViewQueriesDetails from '@/components/pages/Admin/BikesDetails/ViewQueriesDetails'
import withAuth from '@/components/pages/hoc/withAuth'
import GridView from '@/components/ui/GridView'
import React from 'react'

const queriesDetails = () => {
  return (
    <GridView>
      <ViewQueriesDetails />
    </GridView>
  )
}

export default withAuth(queriesDetails);
