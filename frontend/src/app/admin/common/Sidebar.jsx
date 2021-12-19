import React from 'react'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ListItemButton from './ListItemButton'
import CategoryIcon from '@mui/icons-material/Category'
import ViewListIcon from '@mui/icons-material/ViewList'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import StoreIcon from '@mui/icons-material/Store'

export const listItems = (
  <div>
    <ListItemButton text="Products" path="/">
      <ShoppingCartIcon />
    </ListItemButton>
    <ListItemButton text="Categories" path="categories">
      <CategoryIcon />
    </ListItemButton>
    <ListItemButton text="Subcategories" path="subcategories">
      <ViewListIcon />
    </ListItemButton>
    <ListItemButton text="Users" path="users">
      <AccountCircleIcon />
    </ListItemButton>
    <ListItemButton text="Orders" path="orders">
      <StoreIcon />
    </ListItemButton>
  </div>
)

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

export default function Menu(props) {
  return (
    <Drawer variant="permanent" open={props.open}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1], }}>
        <IconButton onClick={props.toggleDrawer}><ChevronLeftIcon /></IconButton>
      </Toolbar>
      <Divider />
      <List>{listItems}</List>
    </Drawer>
  )
}