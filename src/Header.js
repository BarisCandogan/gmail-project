import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          className='header_image'
          src='https://teknosafari.net/wp-content/uploads/2020/10/google-gmailin-logosunu-degistirdi-958584.jpg.jpg'
          alt=''
        />
      </div>
      <div className='header_middle'>
        <SearchIcon style={{ color: 'grey' }} />
        <input type='text' placeholder='Search E-mail' />
        <ArrowDropDownIcon />
      </div>
      <div className='header_right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <AccountCircleIcon style={{ color: 'grey' }} />
      </div>
    </div>
  )
}

export default Header
