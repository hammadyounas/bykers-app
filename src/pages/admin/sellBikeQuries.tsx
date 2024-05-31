import GridView from '@/components/ui/GridView'
import React from 'react'
import SellBikesQueries from '@/components/pages/Admin/SellBikesQueries/SellBikesQueries'

export default function sellBikeQuries() {
  return (
    <GridView>
      <div>
        <SellBikesQueries />
      </div>
    </GridView>
  )
}
