import React, {useState } from "react";
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Mainproducts from "./Mainproducts"
import About from './About'
import Home from './Home'
import Signup from './Signup' 
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'

const App=() =>{
  

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
                  
        <div className="cart-content">
            <div style={{borderBottom:'2px solid #ccc',fontWeight:'bold'}}>
                  <p>Cart</p>
            </div>
         {count < 1 ?
         <p style={{color:'gray',
           textAlign:'center',
           marginTop:'22%'}}>
           You have no items in your cart
         </p> :
         <div>
            <img src={src} width='100' />
            <button style={
              {background:'hsl(25,100%,60%)',
              border:'1px solid hsl(25,100%,60%)',
              width:'100%',
              marginTop:'15%',
              padding:'10px',
              fontFamily:'kumbh sans',
              borderRadius:'2px'}}>proceed to checkout
            </button>
         </div>}
         </div>
 
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Mainproducts count={count} setCount={setCount}/>} />
          <Route path="/signup" element={<Signup isUserCreated={isUserCreated} setIsUserCreated={setIsUserCreated } user={user} />}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
export default App 