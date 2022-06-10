import React, {useState } from "react";
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Mainproducts from "./Mainproducts"
import About from './About'
import Home from './Home'
import Signup from './Signup'
import Cart from './Cart'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'

export default function App() {
  

  const handleCart=()=>{
    setIsCartClicked(true)
    document.querySelector('.cart-content ').classList.toggle('show') 
  }
  

  const [count, setCount]=useState(0)
  const [isCartClicked,setIsCartClicked]=useState(false)
  const [isUserCreated, setIsUserCreated]=useState(false)
  
  /*checking if user is currently logged in*/
  const [user, setUser] =useState({})
  onAuthStateChanged(auth, (currentUser)=>{
     setUser(currentUser)
  })
  
 
  const src= "https://pluspng.com/img-png/clothes-png-hd-dress-shirt-png-hd-png-image-480.png"

  return (
    <div>
      <BrowserRouter>
        <Header handleCart={handleCart}  isUserCreated={isUserCreated}  setIsUserCreated={setIsUserCreated} user={user} count={count} />
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Mainproducts count={count} setCount={setCount}/>} />
          <Route path="/signup" element={<Signup isUserCreated={isUserCreated} setIsUserCreated={setIsUserCreated } user={user} />}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
