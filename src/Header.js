import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCartShopping, faClose, } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"
import {Link}  from 'react-router-dom'

const Header =({handleCart, created})=>{
  const avatar="https://assets.webiconspng.com/uploads/2017/01/Black-User-Icon-300x300.png"

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")
  }
    
  const src="https://raw.githubusercontent.com/ahmadseleem/Atom-Classy-icons/master/Free-Atom/Free-icon.png"
  if(created){
    document.getElementById('avatar').src=src
  }
  return(
    <div>
        <div className="h-div">
        <FontAwesomeIcon icon={faBars} className="h-div--bars" onClick={handleToggle}></FontAwesomeIcon><h3>EazyMart</h3>
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon icon={faClose} className="top-nav--close" onClick={handleToggle}></FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/products" >Products</Link></li>
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/signup"><button>sign up</button></Link></li>     
        </ul>
        </div>
        <FontAwesomeIcon icon={faCartShopping}className="h-div--cart" onClick={handleCart}/>
        <img src={avatar} width="50px" id="avatar" />
        </div>
    </div>
  )
}
export default Header