import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"

const Header =()=>{
  const avatar="https://aakashhelloworld.github.io/css2/images/avatar-shanai.png"

  const handleToggle=()=>{
    document.getElementById("toggle").classList.toggle("active")
  }
  const handleCart=()=>{
       return(
        <div className="h-cart">
            <div className="h-cart--">
           
            </div>
        </div>
       ) 
  }
  return(
    <div>
        <div className="h-div">
        <FontAwesomeIcon icon={faBars} className="h-div--bars" onClick={handleToggle}></FontAwesomeIcon><h3>sneakers</h3>
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon icon={faClose} className="top-nav--close" onClick={handleToggle}></FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li>collections</li>
          <li>men</li>
          <li>women</li>
          <li>about</li>
          <li>contacts</li>

        </ul>
        </div>
        <FontAwesomeIcon icon={faCartShopping} className="h-div--cart" onClick={handleCart}></FontAwesomeIcon>
        <img src={avatar} width="50px" alt="avatar"/>
        </div>
    </div>
  )
}
export default Header