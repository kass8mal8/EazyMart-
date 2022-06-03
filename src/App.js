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
    alert("hello")
  }
  const [count, setCount]=useState(0)

  return (
    <div>
      <BrowserRouter>
        <Header handleCart={handleCart}/>
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
