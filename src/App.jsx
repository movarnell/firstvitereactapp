import './App.css'
import EmailForm from './Components/EmailForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Home from './Home'
// import NotFoundPage from './Components/NotFoundPage'


function App() {
 

  return (
    <>
    
    <Routes>
    <Route path="/" element={<Home />} ></Route>
      <Route path='/emailform' element={<EmailForm/>}></Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      
    </Routes>
    </>
   
  )
}

export default App
