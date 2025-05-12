import React from 'react'
import "./App.css"

import Nav from "./Components/Nav/Nav"
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className="main">
    <Nav />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App