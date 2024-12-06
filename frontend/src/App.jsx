/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
import Navbar from './componnent/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Loginpopup from './componnent/loginpopup/Loginpopup'
import Footer from './componnent/footer/Footer'
const App = () => {
  const [showLogin,setshowLogin]=useState(false)
  return (
    <>
      {showLogin ? <Loginpopup setshowLogin={setshowLogin} /> : <div></div>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
