import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ServicesList } from './ServicesList'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<ServicesList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp