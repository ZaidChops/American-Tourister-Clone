import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import LoginPage from './components/LoginPage'
import CartDetails from './components/CartDetails'
import Products from './components/Products'

const App = () => {
  return (
    <>
   
    <Router>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login/register' element={<LoginPage/>}/>
    <Route path='/cartdetails' element={<CartDetails/>}/>
    <Route path='/products' element={<Products/>}/>
    </Routes>
    
    </Router>
      
    </>
  )
}

export default App
