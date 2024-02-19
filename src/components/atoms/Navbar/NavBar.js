// React imports
import React, { useState, useEffect } from 'react';
// Third party imports
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// App imports
import images from '../../utils/constants'
import './NavBar.css'

 function NavBar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  return (
    <div className='w-full bg-transparent navbar'>
      <div className='flex items-center justify-between container mx-auto  py-4'>
        <div>
          <img width={'180px'} src={`${images.header.logo}`} alt='logo' />
        </div>
        <div className=''>
          <List className={` ${isDrawerOpen ? 'active' : ''} navList navbar-menu`}>
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
        <div className='lg:hidden block'>
        <IconButton onClick={toggleDrawer}>
        {isDrawerOpen ? (
          <CloseRoundedIcon sx={{ color: 'white' }} fontSize="large" />
        ) : (
          <MenuRoundedIcon sx={{ color: 'white' }} fontSize="large" />
        )}
      </IconButton>
      </div>
      {/* <div className='md:hidden'>
          <Drawer open={isDrawerOpen} anchor='right' onClose={toggleDrawer}>
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
        </div> */}
    </div>
    </div>
  ) 
}
export default NavBar