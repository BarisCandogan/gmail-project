import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <img
          src='https://teknosafari.net/wp-content/uploads/2020/10/google-gmailin-logosunu-degistirdi-958584.jpg.jpg'
          alt=''
        />
        <Button variant='contained' color='primary'>
          LOGIN
        </Button>
      </div>
    </div>
  )
}

export default Login
