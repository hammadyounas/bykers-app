import QueriesDetails from '@/components/pages/Admin/Queries/QueriesDetails'
import withAuth from '@/components/pages/hoc/withAuth'
import React from 'react'

const BuyBikeQueriesDetails = () => {
  return (
    <div>
      <QueriesDetails />
    </div>
  )
}

export default withAuth(BuyBikeQueriesDetails);
