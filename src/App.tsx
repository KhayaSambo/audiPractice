import { useState } from 'react'

import Hero from './Components/HeroSection'

import './App.css'
import TitleSection from './Components/TitleSection'
import RallyDetails from './Components/RallyDetails'
import CTASection from './Components/CTASection'

function App() {
  return (
    <>
      <Hero />
      <TitleSection />
      <RallyDetails />
      <CTASection />
    </>
  )
}

export default App
