import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Home/>
        <About/>
        <Projects/>
      </BrowserRouter>
    </>
  )
}

export default App
