import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCartShopping, faClose, } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"
import {Link}  from 'react-router-dom'
import {auth} from './firebase'
import {signOut} from 'firebase/auth'

const Header =({handleCart,isUserCreated,setIsUserCreated, user})=>{

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")
  }
    
  const avatar="https://www.freeiconspng.com/uploads/profile-icon-9.png"
 
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
           <img src={avatar} className="avatar" alt='avatar' style={{background:'dimgray', padding:'3px'} } />} 
        </div>
    </div>
  )
}
export default Header
