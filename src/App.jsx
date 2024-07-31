import React from 'react'
import Navbaar from './Components/Navbaar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Template from './Components/Template'
import Examples from './Components/Examples'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Render from './Components/Preview/Render'


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbaar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Templates' element={<Template/>}></Route>
        <Route path='/Examples' element={<Examples/>}></Route>
        <Route path='/Contact' element={<ContactUs/>}></Route>
        <Route path='/:templateId' element={<Render/>}>
       
      
        </Route> 
       
      </Routes>
      <Footer/>
      
      
    </div>
  )
}

export default App
