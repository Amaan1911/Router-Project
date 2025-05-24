import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
const LayOut = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    
    </>
  )
}

export default LayOut