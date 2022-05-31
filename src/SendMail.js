import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button, IconButton } from '@material-ui/core'
function SendMail() {
  return (
    <div className='sendMail'>
      <div className='sendmail-header'>
        <h3>New Message</h3>
        <IconButton>
          <CloseIcon className='closebutton' />
        </IconButton>
      </div>
      <form>
        <input type='text' placeholder='To' />
        <input type='text' placeholder='Subject' />
        <div>
          <input
            type='text'
            placeholder='Message..'
            className='sendmail-message'
          />
        </div>
        <div className='sendmail-option'>
          <Button>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
