import React,{useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import {GoogleButton} from 'react-google-button'
import {auth} from './firebase'
import { 
   createUserWithEmailAndPassword,
   signInWithPopup, 
   GoogleAuthProvider, 
   onAuthStateChanged} 
from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


const Signup=({user})=>{
  
  const emailRef=useRef()
  const passwordRef=useRef()

  const [isPasswordValid, setIsPasswordValid]=useState(false)
  const [isPending, setIsPending ]=useState(false)
  const [selectMethod, setSelectMethod] =useState(true) 

  const navigate=useNavigate()
  
  const handleEmailSignup=async()=>{
       setIsPending(true) 
       try{
          const user=await createUserWithEmailAndPassword (auth,emailRef.current.value, passwordRef.current.value )
             navigate('/products')
       }
       catch(error) {
         console.log(error.message)
       }
       setIsPending(false) 
     
  }


  
  
  const handleGoogleSignIn=async()=>{
    const provider=new GoogleAuthProvider()
     try{  
        const user=await signInWithPopup(auth, provider)
         console.log("logged in successfully :) ")
         navigate('/products')
          
      }
      catch(error){
          console.log(error.message)
      }
   }
   
   
  return(
    <div className="container">

      {selectMethod &&
         <div className="method-selection" >
           <GoogleButton 
               onClick={handleGoogleSignIn} 
               className="google-btn"/>
           <button 
               onClick={() =>setSelectMethod(false)}>
               Sign in with Email
           </button>
         </div>
     } 
     
      <div>
      <p>Create EazyMart shopping account</p>
      
      <form
         onSubmit={handleEmailSignup} 
         id="sign-form">
        <label>Email</label>
        <FontAwesomeIcon 
            icon={faEnvelope} 
            className="sign-icons">
        </FontAwesomeIcon>
        <input ref={emailRef} type="email" placeholder="email@example.com"/>
        <label>Password</label>
        
        {isPasswordValid &&
            <small>
               {error.message}
            </small>
        }
       <FontAwesomeIcon 
            icon={faLock} 
            className ="sign-icons">
       </FontAwesomeIcon>
        <input ref={passwordRef} type="password" placeholder="password"  />
        <button 
            style={{marginTop:'20px'}}> 
            {isPending ? 
               <>signing in... </> : 
               <>signin</>
            } 
        </button>
     </form>
     </div>
       
    </div>
  )
}
export default Signup
