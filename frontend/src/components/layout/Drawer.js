import { List, ListItem, SwipeableDrawer } from '@mui/material'
import React, { Fragment, useState } from 'react'

const Drawer = ({ open, onClose, onOpen }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div >
        <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      
    >
    <List style={{ width: '350px', padding: '10%' }}>
        <ListItem style={{ marginBock: '5%', fontSize: '1.25rem', fontWeight: 'bold', fontFamily: ['Arial'] }}><i class="fa-solid fa-gear mx-3"></i> Paramètres</ListItem>
        <ListItem style={{ marginBock: '5%', fontSize: '1.25rem', fontWeight: 'bold', fontFamily: ['Arial'] }}><i class="fa-solid fa-user mx-3"></i> Comptes</ListItem>
        <ListItem style={{ marginBock: '5%', fontSize: '1.25rem', fontWeight: 'bold', fontFamily: ['Arial'] }}><i class="fa-solid fa-cart-shopping mx-3"></i>Ventes</ListItem>
        <ListItem style={{ marginBock: '5%', fontSize: '1.25rem', fontWeight: 'bold', fontFamily: ['Arial'] }}><i class="fa-solid fa-shop mx-3 "></i>Stock</ListItem>
    </List>
    </SwipeableDrawer>
    </div>
  )
}

export default Drawer