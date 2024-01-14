import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'
import About from './components/About'
import Funtionally from './components/Funtionally'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Home />
      <About />
      <Funtionally />
      <Projects />
      <Contact />
    </>
  )
}

export default App