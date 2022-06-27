import React, { useState } from "react";
import "./style.css";
import {
   BrowserRouter, 
   Routes, 
   Route}
from 'react-router-dom'
import Header from './Header'
import Mainproducts from "./Mainproducts"
import About from './About'
import Home from './Home'
import Signup from './Signup'
import Complete from './Complete'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

const App =()=>{
  

  const handleCart=()=>{
     document.querySelector('.cart-content ').classList.toggle('show') 
  }
  const [isAccountCreated,setIsAccountCreated ]=useState(false)
  
  /*checking if user is currently logged in*/
  const [user, setUser] =useState({})
  onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setIsAccountCreated(true)
  })
  
  
  const src= "https://pluspng.com/img-png/clothes-png-hd-dress-shirt-png-hd-png-image-480.png"

  return (
    <div>
      <BrowserRouter>
        <Header
            handleCart={handleCart}
            user={user} 
            isAccountCreated={isAccountCreated} 
            setIsAccountCreated={setIsAccountCreated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/products" 
            element={
            <Mainproducts
               isAccountCreated={isAccountCreated} /> 
            }/>
          <Route
            path="/signup" 
            element={
            <Signup 
               user={user} 
               setIsAccountCreated={setIsAccountCreated} />
            }/>
          <Route path="checkout" element={<Complete/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
export default App 
