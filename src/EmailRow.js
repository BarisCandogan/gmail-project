import React from 'react'
import './EmailRow.css'

function EmailRow({ id, title, subject, description }) {
  return (
    <div className='emailRow'>
      <div className='emailRow_actions'></div>
      <div className='emailRow_title'></div>
      <div className='emailRow_message'></div>
      <div className='emailrow_description'></div>
    </div>
  )
}

export default EmailRow
