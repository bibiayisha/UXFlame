// React imports
import React, { useState } from 'react'
// Third party imports
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// App imports
import images from '../../utils/constants'
import './NavBar.css'

 function NavBar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className='w-full bg-transparent navbar'>
      <div className='flex items-center justify-between container mx-auto  py-4'>
        <div>
          <img width={'180px'} src={`${images.header.logo}`} alt='logo' />
        </div>
        <div className='hidden md:block'>
          {/* improve this code by making it a component to remove code repeatition*/}
          <List className='navList'>
            <ListItem className='navListItem'>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem className='navListItem'>
              <ListItemText primary="Videos" />
            </ListItem>
            <ListItem className='navListItem' >
              <ListItemText primary="Blogs" />
            </ListItem>
            <ListItem className='navListItem'>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem className='navListItem'>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem className='navListItem'>
              <ListItemText primary="Partners" />
            </ListItem>
            <ListItem className='navListItem'>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem className='navListItem'>
              <ListItemText primary="Shop" />
            </ListItem>
          </List>
        </div>
        <div className='md:hidden'>
          <IconButton onClick={toggleDrawer}>
            <MenuRoundedIcon sx={{color:'white'}} fontSize='large' />
          </IconButton>
        </div>
        
      </div>
      <div className='md:hidden'>
          <Drawer open={isDrawerOpen} anchor='top' onClose={toggleDrawer}>
          <List>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Videos" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Blogs" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Partners" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Shop" />
            </ListItem>
          </List>
          </Drawer>
        </div>
    </div>
  ) 
}
export default NavBar