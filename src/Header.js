import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import { auth } from './firebase'
import { signOut } from 'firebase/auth'

const Header = ({ handleCart, user, setIsAccountCreated, isAccountCreated }) => {

   const handleToggle = () => {
      document.getElementById("toggle").classList.toggle("active")
   }

   const avatar = "https://cdn3.iconfinder.com/data/icons/gray-toolbar-3/512/user-512.png"

   const handleSignOut = async () => {
      try {
         await signOut(auth)
         alert("logged out successfully ")
         setIsAccountCreated(false)
      }
      catch (error) {
         console.log(error.message)
      }
   }


   const [title, setTitle] = useState('EazyMart')
   return (
      <div>
        <div className="h-div">
        
        <FontAwesomeIcon 
          icon={faBars} 
          className="h-div--bars" 
          onClick={handleToggle}>
        </FontAwesomeIcon>
        <h3>{title} </h3>
        
        <div className="top-nav" id="toggle">
          <FontAwesomeIcon 
               icon={faClose} 
               className="top-nav--close" 
               onClick={handleToggle}>
          </FontAwesomeIcon>
        <ul className="top-nav--wrapper">
          <li onClick={()=>title !== 'EazyMart' ? setTitle('EazyMart') : ''} >
             <Link to="/" >
                 Home
             </Link>
          </li>
          <li onClick={()=>setTitle('Products')} >
             <Link to="/products" >
                 Products
             </Link>
          </li>
          <li onClick={()=>setTitle('About')} >
              <Link to="/about">
                 About
              </Link>
          </li> 
          {user ? 
          <li onClick={handleSignOut} >
            Sign out
          </li> :
          <li onClick={()=>setTitle('Signup')} >
              <Link to="/signup" >
                 Sign up 
              </Link> 
          </li>} 
        </ul>
        </div>
        <FontAwesomeIcon 
            icon={faCartShopping} 
            className="h-div--cart" 
            onClick={handleCart}>
        </FontAwesomeIcon>
            
          {user ? 
           <img 
               src={user.photoURL} 
               className="avatar"
               alt='icon'/>  : 
           <img 
               src={avatar} 
               className="avatar"
               alt='icon' 
               style={{
                  padding:'1px', 
                  opacity:'65%'
               }} />
          } 
        </div>
    </div>
   )
}
export default Header
