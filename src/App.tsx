import { useState } from 'react'

import Hero from './Components/Hero'

import './App.css'
import TitleSection from './Components/TitleSection'
import RallyDetails from './Components/RallyDetails'

function App() {
  return (
    <>
      <Hero />
      <TitleSection />
      <RallyDetails />
    </>
  )
}

export default App
