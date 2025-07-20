import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App