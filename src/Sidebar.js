import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='border'>
        <Button
          className='sidebar_button'
          startIcon={<AddIcon fontSize='large' />}
        >
          Compose
        </Button>
        <SidebarOption
          Icon={InboxIcon}
          title='Inbox'
          number={54}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title='Starred' number={23} />
        <SidebarOption Icon={AccessTimeIcon} title='Starred' number={23} />

        <SidebarOption Icon={LabelImportantIcon} title='Imported' number={23} />
        <SidebarOption Icon={NearMeIcon} title='Sent' number={23} />
        <SidebarOption Icon={NoteIcon} title='Drafts' number={23} />
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={23} />
      </div>
      <div className='sidebar_footer'>
        <div className='sidebar_footericons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
