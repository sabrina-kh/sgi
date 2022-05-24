import { Button } from '@mui/material'
import React, { Fragment, useState, useRef } from 'react'
import { Scatter } from 'react-chartjs-2';

import Drawer from './Drawer'

const DashboardContainer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggleDrawer () {
    return setDrawerOpen(!drawerOpen)
  }

  return (
    <Fragment>
      <Button onClick={() => toggleDrawer()}>Menu</Button>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onOpen={() => setDrawerOpen(true)}/>
<Scatter datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }} />
    </Fragment>
  )
}

export default DashboardContainer