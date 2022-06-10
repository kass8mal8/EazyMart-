import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCartShopping, faClose, } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"
import {Link}  from 'react-router-dom'
import {auth} from './firebase'
import {signOut} from 'firebase/auth'

const Header =({handleCart,isUserCreated,setIsUserCreated, user, count})=>{

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")
  }
    
  const avatar="https://cdn3.iconfinder.com/data/icons/gray-toolbar-3/512/user-512.png"
 
  const handleSignOut = async ()=> {
      try{
          await signOut(auth)
          setIsUserCreated(false)
          alert("logged out successfully ")
      }catch(error ){
          console.log(error.message)
      }
  }
  
  
  return(
    <div>
        <div className="h-div">
        
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
            <p style={
            {marginTop:'5%',
            textAlign:'center'}} >You have {count} items in your cart
            </p>
            <Link to="/cart" >
            <button style={{background:'hsl(25,100%,60%)',
              border:'1px solid hsl(25,100%,60%)',
              width:'100%',
              marginTop:'15%',
              padding:'10px',
              fontFamily:'kumbh sans',
              borderRadius:'2px'}}>proceed to checkout
             </button>
             </Link>
         </div>}
         </div>
        
        
        <FontAwesomeIcon icon={faBars} className="h-div--bars" onClick={handleToggle}></FontAwesomeIcon>
        <h3>EazyMart</h3>
        
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon icon={faClose} className="top-nav--close" onClick={handleToggle}>
          </FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li>
             <Link to="/" >Home</Link>
          </li>
          <li>
             <Link to="/products" >Products</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
          </li> 
          {isUserCreated ? 
          <li onClick={handleSignOut} >Sign out
          </li> :
          <li>
              <Link to="/signup" >Sign up </Link> 
          </li>} 
        </ul>
        </div>
        <FontAwesomeIcon icon={faCartShopping}className="h-div--cart" onClick={handleCart}/>
          {user ? 
           <img src={user.photoURL} className="avatar" alt='avatar'/>  : 
           <img src={avatar} className="avatar" alt='avatar' style={
             {background:'whitesmoke', 
              padding:'1px', 
              top:'15px'
             } } />} 
        </div>
    </div>
  )
}
export default Header
