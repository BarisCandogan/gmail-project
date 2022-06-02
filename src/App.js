import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import { useDispatch, useSelector } from 'react-redux'
import { SendMessageIsOpen } from './features/mailSlice'
import { selectUser } from './features/UserSlice'
import Login from './Login'
import { auth } from './firebase'
import { login } from './features/UserSlice'

function App() {
  const sendMessageIsOpen = useSelector(SendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayname: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      } else {
      }
    })
  }, [])

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Routes>
              <Route path='/Mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
