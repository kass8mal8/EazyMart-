import React, {useState } from "react";
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Mainproducts from "./Mainproducts"
import About from './About'
import Home from './Home'
import ProductPage from './ProductPage'

export default function App() {
  const handleCart=()=>{
    setIsCartClicked(true)
  }
  const [count, setCount]=useState(0)
  const [isCartClicked,setIsCartClicked]=useState(false)

  return (
    <div>
      <BrowserRouter>
        <Header handleCart={handleCart}/>
        {isCartClicked && <div className="cart-content">
          <div style={{borderBottom:'2px solid #ccc'}}>
            <p>Cart</p>
          </div>
         {count < 1 ?<p style={{color:'gray',textAlign:'center',marginTop:'20%'}}>You have no items in your cart</p> :<div>
           hello</div>}
        </div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Mainproducts count={count} setCount={setCount}/>} />
          <Route path="/product-page" element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
