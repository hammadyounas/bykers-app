import GridView from '@/components/ui/GridView'
import React from 'react'
import SellBikesQueries from '@/components/pages/Admin/SellBikesQueries/SellBikesQueries'
import withAuth from '@/components/pages/hoc/withAuth'

const sellBikeQuries = () =>{ 
  return (
    <GridView>
      <div>
        <SellBikesQueries />
      </div>
    </GridView>
  )
}

export default withAuth(sellBikeQuries);
