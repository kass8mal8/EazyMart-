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
 
  const src= "https://pluspng.com/img-png/clothes-png-hd-dress-shirt-png-hd-png-image-480.png"

  return (
    <div>
      <BrowserRouter>
        <Header handleCart={handleCart}/>
        {isCartClicked && <div className="cart-content">
          <div style={{borderBottom:'2px solid #ccc',fontWeight:'bold'}}>
            <p>Cart</p>
          </div>
         {count < 1 ?<p style={{color:'gray',textAlign:'center',marginTop:'22%'}}>You have no items in your cart</p> :<div>
           <img src={src} width="80" style={{background:'whitesmoke',borderRadius:'4px',marginTop:'5px'}} />
           <button style={{background:'hsl(25,100%,60%)',border:'1px solid hsl(25,100%,60%)',width:'100%',marginTop:'25%',padding:'10px',fontFamily:'kumbh sans',borderRadius:'2p'}}>checkout</button></div>}
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
