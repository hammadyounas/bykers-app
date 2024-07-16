import Queries from '@/components/pages/Admin/Queries/Queries'
import withAuth from '@/components/pages/hoc/withAuth'
import GridView from '@/components/ui/GridView'
import React from 'react'

const queries = () => {
  return (
    <GridView>
      <Queries />
    </GridView>
  )
}

export default withAuth(queries);
