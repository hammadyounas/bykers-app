import SellBikeQueriesDetails from '@/components/pages/Admin/SellBikesQueries/SellBikeQueriesDetails'
import withAuth from '@/components/pages/hoc/withAuth'
import GridView from '@/components/ui/GridView'
import React from 'react'

const SellBikeQueries = () => {
  return (
    <GridView>
      <SellBikeQueriesDetails />
    </GridView>
  )
}

export default withAuth(SellBikeQueries);
