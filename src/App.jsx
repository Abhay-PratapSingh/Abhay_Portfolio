import React from 'react'
import Navbar from './assets/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ScrollToSection from './component/ScrollToSection' // ✅ added

const App = () => {
  return (

    <>
      <ScrollToSection /> {/* ✅ added */}

      <Routes>
        <Route element={<Layout />} >

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />

          {/* ❌ removed Project route */}

          <Route path="/Login" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

        </Route >
      </Routes>
    </>
  )
}

export default App