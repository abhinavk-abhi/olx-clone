import React from 'react'
import Home from './components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './components/Details/Details'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/details' element={<Details/>} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App