import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='app_body'>
          <Sidebar />
          <Routes>
            <Route path='/Mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>
        <SendMail />
      </div>
    </BrowserRouter>
  )
}

export default App
