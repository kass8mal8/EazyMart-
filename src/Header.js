import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faCartShopping, faClose, faUserCircle } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"
import {Link}  from 'react-router-dom'

const Header =()=>{
  const avatar="https://aakashhelloworld.github.io/css2/images/avatar-shanai.png"

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")
  }
  const handleCart=()=>{
       
  }
  return(
    <div>
        <div className="h-div">
        <FontAwesomeIcon icon={faBars} className="h-div--bars" onClick={handleToggle}></FontAwesomeIcon><h3>EazyMart</h3>
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon icon={faClose} className="top-nav--close" onClick={handleToggle}></FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/products" >products</Link></li>
          <li><Link to="/about">about</Link></li>      
        </ul>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="h-div--cart" onClick={handleCart}></FontAwesomeIcon>
        <img src={avatar} width="50px" alt="avatar"/>
        <FontAwesomeIcon icon={faUserCircle}className="h-div-user"></FontAwesomeIcon>
        </div>
    </div>
  )
}
export default Header