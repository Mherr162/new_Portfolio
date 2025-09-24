import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Experience from '../Pages/Experience.jsx'
import Certifications from '../Pages/Certifications.jsx'
import Contacts from '../Pages/Contacts.jsx'
import Projects from '../Pages/Projects.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  )
}

export default App
