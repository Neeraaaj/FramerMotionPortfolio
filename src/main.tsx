import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'virtual:windi.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import NavBar from './components/NavBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
