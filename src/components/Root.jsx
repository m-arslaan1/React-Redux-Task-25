import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../components/Cart'
import Footer from './Footer'

function Root() {
  return (
    <>
    <Header />
    <Cart />
    <Outlet />
    <Footer />
    </>
  )
}

export default Root