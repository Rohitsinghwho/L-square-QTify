import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Section
         title={"Top Albums"}
         endpoint={"https://qtify-backend-labs.crio.do/albums/top"}
        />
        <Section
        title={"New Albums"}
        endpoint={"https://qtify-backend-labs.crio.do/albums/new"}
        />
        <Section
        title={"Songs"}
        endpoint={"https://qtify-backend-labs.crio.do/songs"}
        />
    </div>
  )
}

export default App