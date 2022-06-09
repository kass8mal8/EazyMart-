import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCartShopping, faClose, } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"
import {Link}  from 'react-router-dom'
import UserProfile from './UserProfile '

const Header =({handleCart, created})=>{

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")
  }
    
  const avatar="https://raw.githubusercontent.com/Infernus101/ProfileUI/0690f5e61a9f7af02c30342d4d6414a630de47fc/icon.png"
 
  const handleSignOut=()=>{
    
  }
 
  return(
    <div>
        <div className="h-div">
        
        <FontAwesomeIcon icon={faBars} className="h-div--bars" onClick={handleToggle}></FontAwesomeIcon>
        <h3>EazyMart</h3>
        
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon icon={faClose} className="top-nav--close" onClick={handleToggle}></FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/products" >Products</Link></li>
          <li><Link to="/about">About</Link></li> 
          {created ? <li onClick={handleSignOut} >Signout</li> :
          <li><Link to="/signup" >Create account </Link> </li>} 
        </ul>
        </div>
        <FontAwesomeIcon icon={faCartShopping}className="h-div--cart" onClick={handleCart}/>
         <img src={avatar} className="avatar" alt='avatar'/> 
        </div>
    </div>
  )
}
export default Header
